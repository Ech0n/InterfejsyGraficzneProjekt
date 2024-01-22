<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import SignUpSelectorCard from "../components/card/SignUpSelectorCard.vue";


let isLoggedIn = false
if(sessionStorage.getItem("userId"))
{
  isLoggedIn = true
}

let username = sessionStorage.getItem("username");

async function loadData() {
    const db = await openDB("db_",1);
    let k = await db.get('users',parseInt(sessionStorage.getItem("userId")));
    console.log(k["class"]);
    userData.value = k;

    db.close()
}    

// TODO: zaimplementować
function isTeacher() {
  return false;
}


</script>

<template>
  <NavbarTop />
  <!-- <NavbarBottom /> -->

  <div class = "d-flex flex-column align-items-center justify-content-center">
  <h1 v-if="isLoggedIn">Witaj, {{ username }}.</h1>
  <div class="d-flex p-2"><mdicon v-if="isTeacher() && isLoggedIn" name="school" :width="150" :height="200" /></div>
  <div class="d-flex p-2"><mdicon v-if="!(isTeacher()) && isLoggedIn" name="account" :width="150" :height="200" /></div>
  <h1 class="text-center">Wyszukiwanie:</h1>
  <div class="d-flex p-2">
    <a href="/search?type=courses" type="button" class="btn btn-primary">Szukaj Kursu</a>
    <a href="/search?type=tutors" type="button" class="btn btn-primary">Szukaj Korepetycji</a>
  </div>
  <hr class="hr" />
  <span v-if="!isLoggedIn" class="d-flex flex-column align-items-center justify-content-center">
    <a href="/login" class="btn btn-primary">Zaloguj się</a>

    <h2 class="text-center">Nie masz konta?</h2>
    <SignUpSelectorCard/>
  </span>
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