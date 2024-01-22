<template>

  <button :id="'Button' + id" class="btn btn-outline-success btn-lg" @click="showSuccess()"><mdicon name="cart-arrow-down"></mdicon></button>


</template>

<style scoped>

</style>

<script>
import { useCartStore } from '@/store.js'
import { mapWritableState } from 'pinia'
import { openDB } from 'idb';
import router from "@/router";

async function checkIfAlreadyOwned(userId,courseId){
  let db = await openDB('db_',1)
  let k =  await db.getAllFromIndex('boughtCourses',"getCourses",String(userId));
  console.log("tutaj",String(userId))
  return  k.some(el=>el.courseId == courseId)
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
          msg = "Ten kurs jest już posiadany"

        }
      }

      if(isAbleToAdd)
      {
        const cartStore = useCartStore()
        isAbleToAdd = cartStore.addCourse({id:this.id,name:this.name,price:parseFloat(this.price)})
        msg = "Ten kurs znajduje się już w koszyku"
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