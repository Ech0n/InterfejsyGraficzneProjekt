<script setup>

</script>

<template>
  <RouterLink :to="'/course/' + courseItem.id" class="text-decoration-none">
  <div class="card mx-3 my-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://placehold.co/600x400" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ courseItem.name }}</h5>
          <p class="card-text">{{ courseItem.short_desc }}</p>
          <p class="card-text"><small class="text-muted">Last updated {{ courseItem.last_updated }}</small></p>
        </div>
      </div>
    </div>
  </div>
  </RouterLink>
</template>


<style scoped>

</style>

<script>
export default {
  props: ["courseItem"]
};
</script>