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

let days = [
  { id: 1, name: 'Poniedziałek' },
  { id: 2, name: 'Wtorek' },
  { id: 3, name: 'Środa' },
  { id: 4, name: 'Czwartek' },
  { id: 5, name: 'Piątek' },
  { id: 6, name: 'Sobota' }
]

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
        <DataTable :value="Korepetycje" tableStyle="min-width: 50rem">
          <Column field="day" header="Dzień"></Column>
          <Column field="hours" header="Godziny"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
