<script setup>
import Button from 'primevue/button';
const props = defineProps(["cartItem"])
console.log(props)
import { useCartStore } from '@/store.js'
const store = useCartStore()
function removeItem(id){

    store.removeCourse(id)
}
</script>

<template>
  <div class="cart-item mx-6 my-3 d-flex flex-row " style="max-width: 840px;">
    <div clss="border rounded  border-primary border-5">
    <div class = "container ">
        <div class="row g-0">
      <div class="col-sm"> 
          <p >{{ cartItem.name }}</p>
        </div>
      <div class="col-sm"> 
        
        <p >Cena {{ cartItem.price  }} zł </p>
        </div>
    </div>
</div>
</div> 
    <div class="col-sm align-items-end d-flex flex-column"> 
        <Button icon="pi pi-minus" severity="danger" class="circle " aria-label="Filter" @click=removeItem(cartItem.id)> </Button>
             <!-- <RouterLink :to="'/course/' + cartItem.id" class="text-decoration-none"><button class="btn btn-primary w-75">Zobacz strone kursu</button></RouterLink>  -->
    </div>
    
</div>

</template>


<style scoped>
.cart-item{
    min-width:30rem;
}
</style>
<!-- 
<script>
export default {
  props: ["cartItem"]
};
</script> -->