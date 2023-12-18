<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import NavbarBottom from "@/components/navbar/NavbarBottom.vue";
import { openDB } from 'idb';
import { ref } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
var userData = ref();
let userId = route.params.id
console.log(userId)
async function loadData() {
    const db = await openDB("db_",1);
    let k = await db.get('users',parseInt(userId));
    userData.value = k
    db.close()
}

loadData()
</script>

<template>
  <NavbarTop />
  <NavbarBottom />
  <div class = "d-flex flex-column align-items-center justify-content-start">
    <h1>
      {{userData}}

    </h1>
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