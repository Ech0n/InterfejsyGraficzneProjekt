<script setup>

</script>

<template>
<h1 v-text="courseId" class="text-center"></h1>
</template>

<style scoped>

</style>

<script>
export default  {
  computed: {
    courseId() {
      return this.$route.params.id;
    }
  }
}
</script>