<script setup>

import ShoppingCartBtn from "@/components/buttons/ShoppingCartBtn.vue";
</script>

<template>
  <div class="card mx-3 my-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://placehold.co/600x400" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ courseItem.name }}</h5>
          <p class="card-text">{{ courseItem.short_desc }}</p>
          <p class="card-text"><small class="text-muted">Ostatnia aktualizacja {{ courseItem.last_updated }}</small></p>
          <p class="d-flex justify-content-around"><button class="btn">Cena {{ courseItem.price }} zł</button>
            <RouterLink :to="'/course/' + courseItem.id" class="text-decoration-none"><button class="btn btn-primary w-75">Zobacz strone kursu</button></RouterLink>
            <ShoppingCartBtn :id="courseItem.id" :summary-message="'   Dodano do koszyka: '" :content-message="' kurs ' + courseItem.name + '\n za cenę ' + courseItem.price + ' zł!' "/></p>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

</style>

<script>
export default {
  props: ["courseItem"]
};
</script>