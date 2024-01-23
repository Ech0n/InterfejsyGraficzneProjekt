<script setup>
import { ref } from 'vue'
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { openDB } from 'idb';
import { useCartStore } from '@/store.js'
import { useRouter } from 'vue-router';

const username = ref("")
const password = ref("")

const router = useRouter();

async function authUser(username,password) {
    const db = await openDB("db_",1);
    let user = await db.getFromIndex('users',"auth",[username,password]);
    if(user==undefined)
    {
      throw "Username or password incorrect!"
    }
    //Remove alreay ownd items from cart
    let k = await db.getAllFromIndex('boughtCourses',"getCourses",String(user.id));
    const cart = useCartStore()
    k.forEach(item =>{
      cart.removeCourse(item.courseId)
    })

    k = await db.getAllFromIndex('boughtTutorings',"getTutorings",String(user.id));
    k.forEach(item =>{
      cart.removeTutoring(item.tutoringId)
    })
    db.close()

    return user
}


function tryLogin()
{
  authUser(username.value,password.value).then((user) =>
  {
    sessionStorage.setItem("username",username.value)
    sessionStorage.setItem("userId",user["id"])
    sessionStorage.setItem("userClass",user["class"])

    router.push({ name: 'home' });
  }).catch((arg)=>{alert(arg)})
  
}
</script>

<template>
  <NavbarTop />
  <!-- <NavbarBottom/> -->

  <div class="text-md-center ml5">
    <h1>Zaloguj się</h1>
    <div>
      <input type="email/username" v-model="username" placeholder="Login*"/>
      <br>
      <input type="password" v-model="password" placeholder="Hasło*"/>
      <br>
      <button @click="tryLogin">Zaloguj</button>
      <br>
      <p>Nie masz konta?
      <RouterLink to="/signup" class="nav-link-center mx-2" id="nav-link">Zarejestruj się!</RouterLink></p>
    </div>
  </div>
</template>


<style scoped>
.text-md-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70%; 
}

.text-md-left {
  margin-left: 30px;
  margin-right: 20px;
}

.nav-link-center{
  width: 40%;
  color: darkblue;
  font-weight: 650;
  text-align: center;

}
.nav-link-center:hover{
  color: blue;
}

h1{
  color: #333;
  margin-top: 25px;
  margin-left: 30px;
}

input, select{
  width: 300px;
  padding: 10px;
  margin: 20px;
  margin-left: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: blue; 
  color: white;
  padding: 15px 20px;
  margin: 10px;
  margin-bottom: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}

</style>