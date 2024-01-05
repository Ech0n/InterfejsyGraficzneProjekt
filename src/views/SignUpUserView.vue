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
    <h1>Zarejestruj się (Uczeń)</h1>
    <div class="row">
      <div class="col">
        <h6>Dane osobowe:</h6>
        <input type="name" v-model="text" placeholder="Imię"/>
        <br>
        <input type="surname" v-model="text" placeholder="Nazwisko"/>

        <h6>Data urodzenia:</h6>
        <input type="date" v-model="Date" placeholder="DD/MM/YYYY">

        <h6>Poziom nauczania:</h6>
        <select v-model="selected">
          <option disabled value="">Wybierz poziom nauczania</option>
          <option>Przedszkole</option>
          <option>Szkoła Podstawowa</option>
          <option>Szkoła Średnia</option>
          <option>Studia</option>
          <option>(nie dotyczy)</option>
        </select>
        <br>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">Profil z kontolą rodzicielską</label>
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