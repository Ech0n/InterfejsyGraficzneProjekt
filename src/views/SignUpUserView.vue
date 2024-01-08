<script setup>
import { ref } from 'vue'
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { openDB } from 'idb';
import { useRouter } from 'vue-router';
import  {makeUser,checkUsernameAvailbility} from '@/signup.js'
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';
import Password from 'primevue/password'

const toast = useToast();

const router = useRouter();

const username = ref("")
const password = ref("")
const passwordConfirmation = ref("")

const firstname = ref("")
const lastname = ref("")
const selectedEducationLevel = ref([])
const isParentalControlOn = ref(false)
const birthDate = ref("")
const tel = ref("")
const mail = ref("")
const address = ref("")


function tryRegister()
{
    //check if all required fields are filled
    let isFilled = firstname.value !== "" && lastname.value !== "" && password.value !== "" && passwordConfirmation.value !== "" 
    if (!isFilled)
    {
      toast.add({  severity: 'error', summary:"Uzupełnij wszystkie wymagane pola!", life: 3000 });

      return
    }
    
  makeUser({username:username.value,password:password.value,firstname:firstname.value,lastname:lastname.value,class:"student"},passwordConfirmation.value).then((msg)=>{
    if(msg ==="success")
    {

      window.location.href = '/login'
    }
    else
    {
      toast.add({  severity: 'error', summary:msg, life: 3000 });
    }
  })

}

</script>

<template>
  <NavbarTop />

  <div class="text-md-left ml5">
    <h1>Zarejestruj się (Uczeń)</h1>
    <div class="row">
      <div class="col">
        <h6>Dane osobowe:</h6>
        <input type="name" v-model="firstname" placeholder="Imię"/>
        <br>
        <input type="surname" v-model="lastname" placeholder="Nazwisko"/>

        <h6>Data urodzenia:</h6>
        <input type="date" v-model="birthDate" placeholder="DD/MM/YYYY">

        <h6>Poziom nauczania:</h6>
        <select v-model="selectedEducationLevel">
          <option disabled value="">Wybierz poziom nauczania</option>
          <option>Przedszkole</option>
          <option>Szkoła Podstawowa</option>
          <option>Szkoła Średnia</option>
          <option>Studia</option>
          <option>(nie dotyczy)</option>
        </select>
        <br>
        <input type="checkbox" id="checkbox" v-model="isParentalControlOn" />
        <label for="checkbox">Profil z kontolą rodzicielską</label>
      </div>

      <div class="col">
        <h6>Dane kontaktowe:</h6>
        <input type="telephone" v-model="tel" placeholder="Nr telefonu"/>
        <br>
        <input type="e-mail" v-model="mail" placeholder="E-mail"/>
        <br>
        <input type="address" v-model="address" placeholder="Adres zamieszkania"/>
      </div>

      <div class="col">
        <h6>Dane do logowania:</h6>
        <input type="username" v-model="username" placeholder="Login"/>
        <br>
        <Password type="password" v-model="password" placeholder="Hasło" class="mt-3"  promptLabel="siła hasła" weakLabel="słabe hasło" mediumLabel="dobre hasło" strongLabel="mocne hasło"/>
        <br>
        <Password type="password" v-model="passwordConfirmation" placeholder="Powtórz hasło" class="mt-3" :feedback="false"/>
      </div>

    </div>

    <button @click="tryRegister">Zarejestruj się!</button>
  </div>
</template>

<style scoped>
.text-md-left {
  margin-left: 20px;
  margin-right: 20px;
}

h1, h6 {
  color: #333;
  margin-top: 25px;
  margin-left: 15px;
}

input, select{
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.p-password{
  height: 45px;
  padding-left: 10px;
}

input[type=checkbox] {
  width: auto;
  margin-left: 10px; 
}

button {
  background-color: blue; 
  color: white;
  padding: 15px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}
</style>
