<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { openDB } from 'idb';
import {ref} from 'vue'

let category = ref("")
let price = ref(0)
let description = ref("")
let name = ref("")
function onPickFile () {
  this.$refs.fileInput.click()
}

function onFilePicked (event) {
  const files = event.target.files
  let filename = files[0].name
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    this.imageUrl = fileReader.result
  })
  fileReader.readAsDataURL(files[0])
  this.image = files[0]
}


async function pushToDB(course)
{
  console.log(course)
  const dbs = await openDB("db_",1);
  await dbs.put("courses",course)
  dbs.close()
}

async function getUserData(){
  const db = await openDB("db_",1);
  let username = sessionStorage.getItem("username")
  let res = await db.getFromIndex('users','findUsername',username)
  db.close()

  return res
}


function addCourse(){
  const currentDate = new Date();
  getUserData().then((userData) =>
  {
    pushToDB({name:name.value,short_desc:description.value,last_updated:currentDate.toISOString().split('T')[0],
    authorId:userData.id,
    author_name: userData.firstname + userData.lastname,
    price:price.value
  })
})
}

</script>

<template>
  <NavbarTop />

  <div class="text-md-left ml5">
    
    <div class="row">
        <h1><input type="name" v-model="name" placeholder="Nazwa kursu"></h1>
        
        <div class="col">
            <h3>
                Kategoria kursu:<br>
                <select v-model="category">
                    <option disabled value="">Wybierz Kategorię</option>
                    <option>Python</option>
                    <option>E-commerce</option>
                    <option>Kurs języka hiszpańskiego</option>
                    <option>JavaScript</option>
                    <option>Algorytmy</option>
                </select>
                <br>
                <button @click="onPickFile">Upload course thumbnail</button>
                <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"/>
            </h3>
        </div>

        <div class="col">
            <h3>
                Cena kursu:<br>
                <input type="price" placeholder="zł" v-model="price"><br>

                Opis kursu:<br>
                <textarea v-model="description" placeholder="Opisz swoją wersję kursu najlepiej jak potrafisz..."></textarea>

            </h3>
        </div>
    </div>

    <h2><button @click="addCourse">Dodaj kurs</button></h2>
  </div>
</template>

<style scoped>

</style>