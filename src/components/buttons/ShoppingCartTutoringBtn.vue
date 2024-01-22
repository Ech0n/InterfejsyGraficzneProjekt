<template>

  <button :id="'Button' + id" class="btn btn-outline-success btn-lg" @click="showSuccess()"><mdicon name="cart-arrow-down"></mdicon></button>


</template>

<style scoped>

</style>

<script>
import { useCartStore } from '@/store.js'
import { mapWritableState } from 'pinia'
import router from "@/router";
import { openDB } from 'idb';

async function checkIfAlreadyOwned(userId,tutoringId){
  let db = await openDB('db_',1)
  let k =  await db.getAllFromIndex('boughtTutorings',"getTutorings",String(userId));
  return  k.some(el=>el.tutoringId == tutoringId)
}

export default {
  computed:{
    ...mapWritableState(useCartStore, ['courses'])
  },
  props: ["id", "summaryMessage", "contentMessage","price","name"],
  methods: {
    async showSuccess() {
      // Get the currently focused element
      const focusedElement = document.activeElement;

      // Remove the focus
      if (focusedElement) {
        focusedElement.blur();
      }

      let userId = sessionStorage.getItem("userId")
      let isAbleToAdd = true
      let msg = ""
      if (userId != null){

        if(await checkIfAlreadyOwned(userId,this.id))
        {
          isAbleToAdd = false
          msg = "Ten korepetycje są już posiadane"

        }
      }

      if(isAbleToAdd)
      {
        const cartStore = useCartStore()
        isAbleToAdd = cartStore.addTutoring({id:this.id,name:this.name,price:parseInt(this.price)})
        msg = "Te korepetycje znajdują się już w koszyku"
      }
      if(isAbleToAdd)
      {
        this.$toast.add({severity: 'success', summary: this.summaryMessage, detail: this.contentMessage, group: 'pt', life: 10000});
      }else{
        this.$toast.add({severity: 'error', summary: msg, group: 'pt', life: 10000});

      }
    }
  },
}
</script>