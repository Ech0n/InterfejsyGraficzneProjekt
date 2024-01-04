<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import NavbarBottom from "@/components/navbar/NavbarBottom.vue";
import cartItem from "@/components/cart/cartItem.vue"
import {ref} from 'vue';
import { useCartStore } from '@/store.js'

let courseList = ref([])
const store = useCartStore()
// let showCart = ref(false)
</script>

<template>
  <NavbarTop />
  <NavbarBottom />
  <div  id=cartList v-for="course in store.courses" :key="course.id" class="d-flex flex-column align-items-center flex-nowrap" >
    <cartItem :cartItem="course" />
  </div>
</template>

<style scoped>
.card{
  width:15rem;
  margin:1rem;
}
a{
  margin-right:5px;
  margin-left:5px;

}
hr{
  color:black;
  border-top: 1px solid black;
  opacity: 1;
  width:30rem;
}
</style>