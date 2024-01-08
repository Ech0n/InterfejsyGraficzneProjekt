<script setup>

import NavbarTop from "@/components/navbar/NavbarTop.vue";
import NavbarBottom from "@/components/navbar/NavbarBottom.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import SearchLogo from "@/components/search/SearchLogo.vue";
</script>

<template>
  <NavbarTop />
  <!-- <NavbarBottom /> -->
  <SearchLogo />

  <div class="text-md-center mt-3">
    <SearchBar />
  </div>
</template>

<style scoped>

</style>