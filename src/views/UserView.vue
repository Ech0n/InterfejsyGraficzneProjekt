<script setup>
async function loadData() {
    const db = await openDB("db_",1);
    let k = await db.get('users',parseInt(userId));
    userData.value = k
    ownerAndTeacher.value = isOwner && k["class"] === "teacher"
    ownerAndUser.value = isOwner && k["class"] === "student"
    if(k["class"] === "techer")
    {

      k = await db.getAllFromIndex('tutors',"tutorId",parseInt(userId));
      tutorings.value = k
      k = await db.getAllFromIndex('courses',"author",parseInt(userId));
      courses.value = k
    }else{
      console.log("Tutaj")
      k = await db.getAllFromIndex('boughtTutorings',"getTutorings",(userId));
      k.forEach(async key=> 
      {
        let tut = await db.get("tutors",parseInt(key.tutoringId))
        tutorings.value.push(tut)
      })
      k = await db.getAllFromIndex('boughtCourses',"getCourses",(userId));
      k.forEach(async key=> 
      {
        let cour = await db.get("courses",parseInt(key.courseId))
        courses.value.push(cour)
      })
    }
    db.close()

}    

import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { openDB } from 'idb';
import { ref } from "vue";
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

import DataView from 'primevue/dataview';

const route = useRoute();
const router = useRouter();
var userData = ref({});
let userId = route.params.id
var tutorings = ref([]);
var courses = ref([]);
let ownerAndTeacher = ref(false)
let ownerAndUser = ref(false)
let isOwner  =ref(false)

let sessionUid = sessionStorage.getItem("userId")
console.log(sessionUid)
isOwner.value =  sessionUid == userId

loadData()

function logout(){
  sessionStorage.removeItem("userId")
  sessionStorage.removeItem("username")
  router.push('/')
  //dont redirect just refresh:
  // router.go('/')
}

</script>

<template>
  <NavbarTop />
  <!-- <NavbarBottom /> -->
  <div class = "d-flex flex-column align-items-center justify-content-start ">
    <div id="userHeader" class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 border-bottom-1 w-full">
      <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block border-circle ml-8" :src="`https://placehold.co/600x600`"  />
      <div class=" flex-row">
        <div>
          <h1>

            {{ userData.firstname }} 
            {{ userData.lastname}} 
          </h1>
        </div>
        <div v-if="ownerAndTeacher">
          <RouterLink to="/add-course/" class="text-decoration-none"><button class="btn btn-primary w-75">Dodaj kurs</button></RouterLink>
          <RouterLink to="/add-lesson/" class="text-decoration-none"><button class="btn btn-primary w-75 mt-1">Dodaj korepetycje</button></RouterLink>
        </div>
        <div v-if="isOwner">
          <button class="btn btn-primary w-100 mt-1" @click="logout">Wyloguj</button>
        </div>
      </div>
    </div>
    <div class="ml-8  mr-8">
    <h1>
    </h1>



    <h2 class="text-center">
      Korepetycje: 
    </h2>
    <div v-if="tutorings.length != 0">
      <DataView :value="tutorings" >
              <template #list="slotProps">
                  <div class="grid grid-nogutter">
                      <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                          <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 " :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://placehold.co/600x400`" :alt="item.name" />
                              <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                  <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                      <div class="text-2xl font-bold text-900">{{ item.subject }}</div>
                                      <!-- <Rating :modelValue="item.rating" readonly :cancel="false"></Rating> -->
                                      <div class="flex align-items-center gap-3">
                                          <span class="flex align-items-center gap-2">
                                              <!-- <i class="pi pi-tag"></i> -->
                                              <!-- <span class="font-semibold">{{ item.category }}</span> -->
                                              {{ item.short_desc }}
                                          </span>
                                          <!-- <Tag :value="item.level" :severity="getSeverity(item)"></Tag> -->
                                      </div>
                                  </div>
                                  <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                      <span class="text-2xl font-semibold">{{ item.price }} zł</span>
                                      
                                      <!-- <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button> -->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </template>
        </DataView>
    </div>
    <div v-else> 
      <p class="text-center">
        Nie posiadasz jeszcze żadnych korepetycji...
      </p>
    </div>
    <h2 class="text-center">
      Kursy: 
    </h2>
    <div v-if="courses.length != 0">
    <DataView :value="courses">
            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 " :class="{ 'border-top-1 surface-border': index !== 0 }">
                          <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`" :alt="item.name" />
                            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                    <a :href="'/course/'+item.id"><div class="text-2xl font-bold text-900">{{ item.name }}</div></a>
                                    <!-- <Rating :modelValue="item.rating" readonly :cancel="false"></Rating> -->
                                    <div class="flex align-items-center gap-3">
                                        <span class="flex align-items-center gap-2">
                                            <!-- <i class="pi pi-tag"></i> -->
                                            {{ item.short_desc }}
                                            <!-- <span class="font-semibold">{{ item.category }}</span> -->
                                        </span>
                                        <!-- <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag> -->
                                    </div>
                                </div>
                                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                    <span class="text-2xl font-semibold">{{ item.price }} zł</span>
                                    <span id="ButtonContainer">
                                      <RouterLink v-if="ownerAndTeacher" :to="'/course/'+item.id+'/edit'" class="text-decoration-none"><button class="btn btn-primary w-100">Edytuj</button></RouterLink>
                                      <RouterLink v-if="!ownerAndTeacher" :to="'/course/'+item.id" class="text-decoration-none"><button class="btn btn-primary w-100">Zobacz kurs</button></RouterLink>
                                    </span>

                                    <!-- <Button icon="pi pi-shopping-cart" rounded :disabled="item.inventoryStatus === 'OUTOFSTOCK'"></Button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
  </div>
  <div v-else> 
      <p class="text-center">
        Nie posiadasz jeszcze żadnego kursu...
      </p>
    </div>
  </div></div>
</template>

<!-- <style scoped>
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
</style> -->