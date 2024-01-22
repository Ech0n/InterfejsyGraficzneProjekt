<script setup>
import Button from 'primevue/button';
const props = defineProps(["cartItem","type"])
console.log(props)
import { useCartStore } from '@/store.js'


</script>

<template>
  <div class="cart-item mx-6   d-flex flex-row  max-h-3rem" >
    <div class = "w-full ">
      <div class="row g-0">
        <div class="col-9 lh-0"> 
          <a :href="'/course/'+cartItem.id"><p class="mb-0">{{ cartItem.name }}</p></a>
          <p class="mb-3">  {{ props.type }} </p>
        </div>
        <div class="col d-flex align-items-center"> 
          
          <p >Cena {{ cartItem.price.toFixed(2)  }} zł </p>
        </div>
    </div> 
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