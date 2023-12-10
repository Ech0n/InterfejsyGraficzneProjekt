<script setup>

import NavbarTop from "@/components/navbar/NavbarTop.vue";
import NavbarBottom from "@/components/navbar/NavbarBottom.vue";
import SearchBar from "@/components/search/SearchBar.vue";
</script>

<template>
  <NavbarTop />
  <NavbarBottom />
  <h1 class="text-center mt-3">Search View</h1>

  <div class="text-md-center mt-3">
    <SearchBar />
  </div>
</template>

<style scoped>

</style>