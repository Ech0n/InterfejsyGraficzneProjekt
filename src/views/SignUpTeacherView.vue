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
    <div class="row">
      <div class="col">
        <h6>Dane osobowe:</h6>
        <input type="name" v-model="text" placeholder="Imię"/>
        <br>
        <input type="surname" v-model="text" placeholder="Nazwisko"/>

        <h6>Data urodzenia:</h6>
        <input type="date" v-model="Date" placeholder="DD/MM/YYYY">

        <h6>Oferowane korepetycje:</h6>
        <select v-model="selected" multiple>
          <option disabled value="">Wybierz przedmioty</option>
          <option>Matematyka</option>
          <option>J. Polski</option>
          <option>J. Angielski</option>
          <option>Fizyka</option>
          <option>Chemia</option>
        </select>
        <br>
        <h6>Oferowane kursy:</h6>
        <select v-model="selected" multiple>
          <option disabled value="">Wybierz kursy</option>
          <option>Python</option>
          <option>E-commerce</option>
          <option>Kurs języka hiszpańskiego</option>
          <option>JavaScript</option>
          <option>Algorytmy</option>
        </select>
      </div>

      <div class="col">
        <h6>Dane kontaktowe:</h6>
        <input type="telephone" v-model="text" placeholder="Nr telefonu"/>
        <br>
        <input type="e-mail" v-model="email" placeholder="E-mail"/>
        <br>
        <input type="address" v-model="text" placeholder="Adres zamieszkania"/>
      </div>

      <div class="col">
        <h6>Dane do logowania:</h6>
        <input type="username" v-model="username" placeholder="Login"/>
        <br>
        <input type="password" v-model="password" placeholder="Hasło"/>
        <br>
        <input type="password" v-model="password" placeholder="Powtórz hasło"/>
      </div>

    </div>

    <button @click="tryLogin">Zarejestruj</button>
  </div>
</template>

<style scoped>

</style>