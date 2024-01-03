<script setup>
import {ref} from 'vue'
import Badge from 'primevue/badge';

let userId = sessionStorage.getItem("userId")
let userRedirect = "/login"
if(userId != null)
{
  userRedirect = "/u/"+userId
}
import { useCartStore } from '@/store.js'

const store = useCartStore()
console.log(!store.isEmpty)
// let showCart = ref(false)
// showCart = !store.isEmpty()

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">KOREPETYCJE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link mx-2"><font-awesome-icon icon="fa-solid fa-home"/></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/search" class="nav-link mx-2">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link mx-2"><font-awesome-icon icon="fa-solid fa-message"/></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to=userRedirect class="nav-link mx-2"><font-awesome-icon icon="fa-solid fa-user"/></RouterLink>
          </li>
          <li class="nav-item" v-if=!store.isEmpty>
            <RouterLink to="/cart" v-badge=store.size  class="nav-link mx-2 p-overlay-badge"><font-awesome-icon icon="fa-solid fa-shopping-cart"  style="font-size: 1rem" /></RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#pv_id_2_badge{
  min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
}
</style>