

<script setup>
import Tree from 'primevue/tree';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import InlineMessage from 'primevue/inlinemessage';

import FileUpload from 'primevue/fileupload';

import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { ref, watch  } from 'vue';
import { useToast } from "primevue/usetoast";

import { useRoute,useRouter } from 'vue-router';

import { openDB } from 'idb';


const route = useRoute();
const router = useRouter();



function courseId() {
  return route.params.id;
}


const nodes = ref(null);
const selectedKey = ref(null);
const expandedKeys = ref({});
const toast = useToast();
const value = ref('');
const component_title = ref('');

nodes.value = [];

const saveChanges = (node) => {
  toast.add({ severity: 'success', summary: 'Zapisano zmiany', detail: node.label, life: 3000 });
};

const expandAll = () => {
  for (let node of nodes.value) {
    expandNode(node);
  }

  expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
  expandedKeys.value = {};
};

const expandNode = (node) => {
  if (node.children && node.children.length) {
    expandedKeys.value[node.key] = true;

    for (let child of node.children) {
      expandNode(child);
    }
  }
};

const addChapter = () => {
  treeShown.value = true
  let length = nodes.value.length;
  let chapterName = chapterTitle.value;
  if(chapterName ==="")
  {
    chapterName = "Nowy rozdział"
  }
  nodes.value.push({key: length.toString(),
      label: chapterName,
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
  ]
});
  chapterTitle.value = '';
};

function clear() {
  component_title.value = "";
  value.value = "";
}
function getKeyValue() {
  const rawObject = {...selectedKey.value};
  return Object.keys(rawObject)[0];
}
const addText = () => {

  let selected_key = getKeyValue();
  let title = component_title.value
  if( title ==="")
  {
    title = "Bez tytułu"
  }
  for (let node of nodes.value) {
    if (node.key === selected_key) {
      let length = node.children.length;
      node.children.push( {
        key: selected_key + '-' + length.toString(),
        label: title,
        data: value.value,
        type:"text",
        icon: 'pi pi-fw pi-file-o',
      })
      expandedKeys.value[selected_key] = true;
  }}
  clear();
};

const getData = () => {
  let k = getKeyValue();
  for (let node of nodes.value) {
    for (let child of node.children) {
      if (k === child.key) {
        editComponent_title = child.label;
        editValue = child.data;
        return true;
      }
    }
  }
  return false;
}

const updateText = () => {
  let k = getKeyValue();
  for (let node of nodes.value) {
    for (let child of node.children) {
      if (k === child.key) {
        child.label = editComponent_title;
        child.data = editValue;
        saveChanges(child);
        return;
      }
    }
  }
};

let editComponent_title = '';
let editValue = '';
let chapterTitle = ref('');

let course = {
  authorId:undefined,
  name: '',
  short_desc: '',
  image_url: 'https://example.com/zaawansowany-react.jpg',
  last_updated: '',
  author_name: undefined,
  price: null
};

let courseContent ={
  id: parseInt(courseId()),
  title: '',
  chapters: nodes.value
}

let price = ref(course.price);
let name = ref(course.name);
let desc = ref(course.short_desc);
let base64textString = ref('');
let imageName = ref('');
let showImage = ref(false);
let treeShown = ref(false)

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
const save = async () => {
  course.price = price.value;
  course.name = name.value;
  course.short_desc = desc.value;
  course.last_updated = getCurrentDate();
  course.image_url = base64textString.value;

  courseContent.title = name.value;
  courseContent.chapters = JSON.stringify( nodes.value);
  // save logic
  let db = await openDB("db_",1);
  db.put("courses",course).then((res)=>
  {
    if(!courseId())
    {
      courseContent.courseId = res
    }
    console.log(courseContent)
    db.put("courseContents",courseContent)
    console.log(res)
    toast.add({ severity: 'success', summary: 'Zapisano zmiany', detail: '', life: 3000 });
    db.close()
    if(!courseId()){
      router.push("/course/"+res+"/edit")
    }
  })

}

function  convertToBase64(event) {
    const file = event.target.files[0];
    imageName.value = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      base64textString.value = reader.result;
      showImage.value = true;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
}
const offFocus = () => {
  document.activeElement.blur();
}

async function loadCourseData(){

  console.log(courseId())
  let db = await openDB("db_",1);
  let k = await db.get("courses",parseInt(courseId()))
  course = k
  price.value = parseInt(k.price)
  name.value = k.name
  desc.value = k.short_desc

  if (k.image_url.length !==0 ) {
    base64textString.value = k.image_url
    showImage.value = true
    imageName.value = "Załadowano logo"
  }

  k = await db.getFromIndex("courseContents","courseId",parseInt(courseId()))
  console.log("debuig: ",parseInt(courseId()))
  courseContent = k
  if (typeof courseContent.chapters === 'string' || courseContent.chapters instanceof String)
  {
    courseContent.chapters = JSON.parse(courseContent.chapters)
  }
  nodes.value = courseContent.chapters
  if (courseContent.chapters.length>0)
  {
    treeShown.value = true
  }
  db.close()
}

async function setupNewCourse(){

let db = await openDB("db_",1);
let uid = parseInt(sessionStorage.getItem("userId"))
let k = await db.get("users",uid)

course.authorId = k["id"]
course.author_name = k.firstname + " " + k.lastname
console.log("new course data", course)
courseContent.authorId = k.id
db.close()
}

if(courseId()){
  loadCourseData()
}else{
  setupNewCourse()
}
</script>


<template>
  <div class="border-bottom mb-2"><NavbarTop /> </div>

  <div class="row">
    <div class="col-6">
  <div class="card flex justify-content-center">
    <Toast />
    <div class="card flex flex-column align-items-cente">
      <div class="row mx-2">
        <InputText type="text" v-model="name" placeholder="Nazwa kursu" class="my-3 w-75"/>
        <InputText type="text" v-model="desc" placeholder="Krótki opis kursu" class="my-3 w-75"/>
        <InputText type="text" v-model="price" placeholder="Cena" class="my-3 w-75"/>
        <div>
          <input type="file" @change="convertToBase64" accept="image/*" />
          <br />
          <div v-if="showImage">
            <img :src="base64textString" :alt="imageName.value"/>
          </div>
          <br />
<!--          <textarea v-model="base64textString" rows="5"></textarea>-->
        </div>

      </div>
      <div class="flex flex-wrap  mb-4">
        <Button type="button" icon="pi pi-plus" label="Rozwiń wszystko" @click="expandAll" class="mx-2"/>
        <Button type="button" icon="pi pi-minus" label="Zwiń wszystko" @click="collapseAll" class="mx-2" />
      </div>
      <div>
        <h3 class="mx-4">Rozdziały</h3>
      <Tree v-if="treeShown" v-model:expandedKeys="expandedKeys" v-model:selectionKeys="selectedKey" selectionMode="single" :value="nodes" class="w-75" ></Tree>
      <InputText type="text" v-model="chapterTitle" class="my-3 mx-2" placeholder="Wpisz nazwe rozdziału"/>
      <Button type="button" icon="pi pi-plus" label="Dodaj nowy rozdział" @click="addChapter" class="w-25 mx-2 my-3"></Button>
      <div>
        <Button type="button" @click="addText" class="w-25 mx-2 my-2">Dodaj tekst</Button>
      </div>

        </div>
      <Button type="button" icon="pi pi-save" label="Zapisz" @click="save" class="w-25 mx-2 my-3"></Button>
    </div>
  </div>
    </div>
    <div class="col">
      <div class="card">

      </div>
      <div v-if="selectedKey && !getKeyValue().includes('-')" class="row">
<!--        <InputText type="text" v-model="chapter_title" placeholder="Tytuł:"/>-->
<!--        <Textarea v-model="value" rows="5" cols="30" placeholder="Wpisz treść:" />-->
        <InputText type="text" v-model="component_title" placeholder="Tytuł:" class="my-3"/>
        <Editor v-model="value" editorStyle="height: 320px">

          <template v-slot:toolbar>
             <span class="ql-formats">
          <select class="ql-font"></select>
          <select class="ql-header"></select>
        </span>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
            <button v-tooltip.bottom="'Image'" class="ql-image"></button>
        </span>
            <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
            <span class="ql-formats">
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
        </span>
          </template>
        </Editor>
        <Button type="button" @click="addText" class="w-25 mx-2 my-2">Dodaj tekst</Button>
        <Button type="button" @click="clear" class="w-25 mx-2 my-2 btn btn-lg btn-danger">Wyczyść</Button>
      </div>
      <div v-else-if="selectedKey && getKeyValue().includes('-') && getData()" class="row">

        <InputText type="text" v-model="editComponent_title" class="my-3"/>
        <Editor v-model="editValue" editorStyle="height: 320px">
          <template v-slot:toolbar>
            <span class="ql-formats">
          <select class="ql-font"></select>
          <select class="ql-header"></select>
        </span>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
            <button v-tooltip.bottom="'Image'" class="ql-image"></button>
        </span>
            <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
            <span class="ql-formats">
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
        </span>
          </template>
        </Editor>
    <Button type="button" @click="updateText" class="w-25 mx-2 my-2">Zaktualizuj</Button>
<!--        <div v-html="value" class="d-flex flex-wrap"></div>-->
      </div>
      <div v-else>
        <InlineMessage severity="info">Wybierz rozdział</InlineMessage>
      </div>
      <div class="row">
      </div></div></div></template>