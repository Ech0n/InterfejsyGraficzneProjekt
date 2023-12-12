<script setup>

import NavbarTop from "@/components/navbar/NavbarTop.vue";

</script>

<script>
function submit()
{
  localStorage.isLoggedIn = true;
}
</script>

<template>
  <NavbarTop />

  <div class="text-md-left ml5">
    <h1>Zaloguj się</h1>
    <div>
      <input type="email/username" v-model="email" placeholder="email"/>
      <input type="password" v-model="password" placeholder="password"/>

      <button @click="submit">Zaloguj</button>
    </div>
  </div>
</template>

<style scoped>

</style>