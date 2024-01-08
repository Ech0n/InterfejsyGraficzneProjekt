<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue'
import { openDB } from 'idb'
import { ref } from 'vue'

import Button from 'primevue/button'
import Toast from 'primevue/toast'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Calendar from 'primevue/calendar'

let calendar = ref()
let time = ref()

let name = ref("")
let desc = ref("")
let selectedDay = ref("")
let price = ref(0)
let days = [
  { id: 1, name: 'Poniedziałek' },
  { id: 2, name: 'Wtorek' },
  { id: 3, name: 'Środa' },
  { id: 4, name: 'Czwartek' },
  { id: 5, name: 'Piątek' },
  { id: 6, name: 'Sobota' }
]
let userData

async function loadUserData(){

  let dbu = await openDB("db_",1);
  let uid = parseInt(sessionStorage.getItem("userId"))
  let k = await dbu.get("users",uid)
  userData = k
  dbu.close()
}

async function save()
{
  console.log(name,desc,selectedDay)
  let tutoring = {firstname:userData.firstname,lastname:userData.lastname,tutorId:userData.id,
    short_desc:desc.value ,image_url: 'https://placehold.co/600x400',
    subject:name.value,
    level:"None",
    price:parseInt(price.value),
    days: "[]",
    schedule: "[]",}
  let db = await openDB("db_",1);
  db.put("tutors",tutoring)
  db.close()
}
loadUserData()
</script>

<template>
  <div class="border-bottom mb-2"><NavbarTop /></div>

  <div class="row">
    <div class="col-6">
      <div class="card flex justify-content-center">
        <Toast />
        <div class="card flex flex-column align-items-cente">
          <div class="row mx-2">
            <InputText
              type="text"
              v-model="name"
              placeholder="Nazwa korepetycji"
              class="my-3 w-75"
            />
            <InputText
              type="text"
              v-model="desc"
              placeholder="Krótki opis korepetycji"
              class="my-3 w-75"
            />
            <InputText type="text" v-model="price" placeholder="Cena/h" class="my-3 w-75" />
          </div>

          <div class="col">
            <Dropdown
              v-model="selectedDay"
              :options="days"
              optionLabel="name"
              placeholder="Dzień"
              class="w-full md:w-14rem"
            />
            <Calendar id="start-time" v-model="time" timeOnly placeholder="Data rozpoczęcia" />
            <Calendar id="end-time" v-model="time" timeOnly placeholder="Data zakończenia" disabled />
            <Button class="btn btn-primary" label="+" />


          </div>

          <Button
            type="button"
            icon="pi pi-save"
            label="Zapisz"
            @click="save"
            class="btn btn-primary w-25 mx-2 my-3"
          ></Button>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card flex justify-content-center">
        <DataTable :value="calendar" tableStyle="min-width: 50rem">
          <Column field="day" header="Dzień"></Column>
          <Column field="hours" header="Godziny"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
