<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import cartItem from "@/components/cart/cartItem.vue"
import {ref} from 'vue';
import { useCartStore } from '@/store.js'
import Button from 'primevue/button';
import { storeToRefs } from 'pinia'
import router from "@/router";


const store = useCartStore()
let {totalPrice} = storeToRefs(store)

function removeCourse(id){

    store.removeCourse(id)
}
function removeTutoring(id){

store.removeTutoring(id)
}
// let showCart = ref(false)
let isNotLoggedIn = ref(false)
let userId = sessionStorage.getItem("userId")
isNotLoggedIn.value = !(userId != undefined && userId != null)

function goToPayment()
{
  router.push('/cart/redirect')
}

</script>

<template>
  <NavbarTop />
  <!-- <NavbarBottom /> -->
  <div class="d-flex flex-column align-items-center flex-nowrap">

    <div  id=cartList v-for="course in store.courses" :key="course.id" class="d-flex flex-column align-items-center flex-nowrap" >
      <div>
        <div class="d-flex flex-row listItem border-top-1 surface-border " > 
        <cartItem :cartItem="course" type="kurs" />
              <Button icon="pi pi-minus" rounded outlined  severity="danger" class="iconButton my-3 " aria-label="Filter" @click=removeCourse(course.id)> </Button>
                  <!-- <RouterLink :to="'/course/' + cartItem.id" class="text-decoration-none"><button class="btn btn-primary w-75">Zobacz strone kursu</button></RouterLink>  -->
          </div>
          
        </div>
    </div>
  
    <div  id=cartList v-for="tutoring in store.tutorings" :key="tutoring.id" class="d-flex flex-column align-items-center flex-nowrap" >
      <div>
        <div class="d-flex flex-row listItem border-top-1 surface-border " > 
          <cartItem :cartItem="tutoring" type="korepetycje" />
          <Button icon="pi pi-minus" rounded outlined  severity="danger" class="iconButton my-3 " aria-label="Filter" @click=removeTutoring(tutoring.id)> </Button>
                  <!-- <RouterLink :to="'/course/' + cartItem.id" class="text-decoration-none"><button class="btn btn-primary w-75">Zobacz strone kursu</button></RouterLink>  -->
        </div>
          
      </div>
    </div>
  
    <h2 class="   border-top-1  surface-border pt-3 mx-2 w-5 d-flex justify-content-center align-items-center" >Cena łączna: {{totalPrice.toFixed(2) }} zł</h2>

  
   
      <button  class="btn btn-primary" :disabled="isNotLoggedIn" @click="goToPayment">  Przejdź do płatności!  </button>
      <small  v-if="isNotLoggedIn">  <a href="/login">Zaloguj się</a> aby dokonać zakupu!  </small>
    
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