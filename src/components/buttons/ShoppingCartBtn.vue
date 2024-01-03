<template>

  <button :id="'Button' + id" class="btn btn-outline-success btn-lg" @click="showSuccess()"><mdicon name="cart-arrow-down"></mdicon></button>


</template>

<style scoped>

</style>

<script>
import { useCartStore } from '@/store.js'
import { mapWritableState } from 'pinia'

export default {
  computed:{
    ...mapWritableState(useCartStore, ['courses'])
  },
  props: ["id", "summaryMessage", "contentMessage"],
  methods: {
    showSuccess() {
      // Get the currently focused element
      const focusedElement = document.activeElement;

      // Remove the focus
      if (focusedElement) {
        focusedElement.blur();
      }
      const cartStore = useCartStore()
      cartStore.addCourse(this.id)
      this.$toast.add({severity: 'success', summary: this.summaryMessage, detail: this.contentMessage, group: 'pt', life: 10000});
    }
  },
}
</script>