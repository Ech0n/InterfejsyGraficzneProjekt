<script setup>
import { ref } from 'vue'
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { openDB } from 'idb';
import { useRouter } from 'vue-router';

const username = ref("")
const password = ref("")

const router = useRouter();

async function authUser(username,password) {
    const db = await openDB("db_",1);
    let k = await db.getFromIndex('users',"auth",[username,password]);
    db.close()
    if(k==undefined)
    {
      throw "Username or password incorrect!"
    }
    return k
}


function tryLogin()
{
  authUser(username.value,password.value).then((user) =>
  {
    sessionStorage.setItem("username",username.value)
    sessionStorage.setItem("userId",user["id"])
    router.push({ name: 'home' });
  }).catch((arg)=>{alert(arg)})
  
}
</script>

<template>
  <NavbarTop />

  <div class="text-md-left ml5">
    <h1>Zarejestruj się (Nauczyciel)</h1>
    <div>
      <input type="email/username" v-model="username" placeholder="username"/>
      <input type="password" v-model="password" placeholder="password"/>

      <button @click="tryLogin">Zaloguj</button>
    </div>
  </div>
</template>

<style scoped>

</style>