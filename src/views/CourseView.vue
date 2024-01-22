<script setup>
import {ref} from 'vue';
import CourseSideBar from "@/components/sidebar/CourseSideBar.vue";
import { openDB } from 'idb';
import { useRoute } from 'vue-router';
import Toast from "primevue/toast";
import NavbarTop from "@/components/navbar/NavbarTop.vue";

import { useCartStore } from '@/store.js'

const store = useCartStore()

const route = useRoute();
let main_page ={key: '0', label: "Strona główna",
    children:[{
      key: '0-0',
      label: 'Opis',
      data: 'puste'
    }
  ]}
let currentChapter = ref(main_page);
let courseItem = ref({})
let courseChapters = ref({})
const updateChapter = ((updatedChapter) => {
  currentChapter.value = updatedChapter;
  return updatedChapter;
  });
function courseId() {
      return route.params.id
}
async function getCourseById() {
      const db = await openDB("db_",1);
      let k =await db.get("courses",parseInt(courseId()))
      console.log(k)
      courseItem.value = k

      main_page.children[0].data = courseItem.value.short_desc
      currentChapter.value = main_page;
    }

async function getChaptersInfo() {
      const db = await openDB("db_",1);
      let k =await db.get("courseContents",parseInt(courseId()))
      courseChapters.value  = k
      console.log(courseChapters.value)
      if (typeof k.chapters === 'string' || k.chapters instanceof String)
      {
        console.log("chapters", k)
        courseChapters.value.chapters = JSON.parse(k.chapters)
      }
      }
function updateParent(chapter) {
      this.currentChapter = chapter
}
getCourseById()
getChaptersInfo()
// const currentChapter = {title: 'Strona główna'}

</script>

<template>
  <Toast position="top-right" group="pt"
  :pt="{
    container: { class: 'alert alert-success' }
  }"/> <!-- !important for showing messages-->
  <NavbarTop/>
  <div>
  <div v-if=!store.isEmpty style="min-height: 50px" class="nav-item">
    <RouterLink to="/cart" class="nav-link"  style="position: fixed; top:20px; right:30px;"><span v-badge=store.size class="p-overlay-badge" style="font-size: 1rem"><font-awesome-icon  icon="fa-solid fa-shopping-cart"  /></span></RouterLink>
  </div>
  <CourseSideBar :courseItem="courseItem" :courseChapters=courseChapters :mainPage="main_page" @complete-chapter="updateChapter"/>
  </div>
  <h1 class="display-1 text-center my-3">{{ currentChapter.label }}</h1>
  <h5 v-text="courseItem.name" class="text-center my-2 text-muted"></h5>
  <!-- <p v-text="currentChapter.content"></p> -->
<!--  <p>{{ currentChapter.children[0].data }}</p>-->
  <div class="row my-5">
    <div class="col-2"></div>
    <div class="col">
    <div class="row my-5" v-for="component in currentChapter.children" :key="component.key">
      <h3 class="mx-2 my-2"> {{ component.label }} </h3>
      <div v-html="component.data" class="mx-4 my-5"></div>
      </div>
    </div>

    <div class="col-2"></div>
  </div>
</template>

<style scoped>

</style>
