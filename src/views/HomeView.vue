<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import NavbarBottom from "@/components/navbar/NavbarBottom.vue";
</script>

<template>
  <NavbarTop />
  <NavbarBottom />
  <div class = "d-flex flex-column align-items-center justify-content-start">
  <h1 class="text-center">Wyszukiwanie:</h1>
  <div class="d-flex p-2">
    <a href="/search" type="button" class="btn btn-primary">Szukaj Kursu</a>
    <a href="/search" type="button" class="btn btn-primary">Szukaj Korepetycji</a>
  </div>
  <hr class="hr" />
  <a href="/login" class="btn btn-primary">Zaloguj się</a>

  <h2 class="text-center">Nie masz konta?</h2>
  <div class="d-flex p-2 justify-content-around">
    <div class="card d-flex align-items-center justify-content-start">
      <mdicon name="account" :width="150" :height="200" />
      <div class="card-body">
        <a href="/login" class="btn btn-primary">Zarejestruj się jako uczeń</a>
      </div>
    </div>
    <div class="card d-flex align-items-center justify-content-start">
      <mdicon name="school" :width="150" :height="200" />
      <div class="card-body">
        <a href="/login" class="btn btn-primary">Zarejestruj się jako nauczyciel</a>
      </div>
    </div>
  </div>
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