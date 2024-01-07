

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
import {useRoute} from "vue-router";

const route = useRoute();

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
  let length = nodes.value.length;
  let chapterName = chapterTitle.value;
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

  for (let node of nodes.value) {
    if (node.key === selected_key) {
      let length = node.children.length;
      node.children.push( {
        key: selected_key + '-' + length.toString(),
        label: component_title.value,
        data: value.value,
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
  id: courseId(),
  authorId:0,
  name: '',
  short_desc: '',
  image_url: 'https://example.com/zaawansowany-react.jpg',
  last_updated: '',
  author_name: 'Anna Nowak',
  price: null
};

let courseContent = {
  id: courseId(),
  title: '',
  chapters: nodes.value
}

let price = ref(course.price);
let name = ref(course.name);
let desc = ref(course.short_desc);
let base64textString = ref('');
let imageName = ref('');
let showImage = ref(false);

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
const save = () => {
  course.price = price;
  course.name = name;
  course.short_desc = desc;
  course.last_updated = getCurrentDate();
  course.image_url = base64textString.value;

  // save logic



  toast.add({ severity: 'success', summary: 'Zapisano zmiany', detail: '', life: 3000 });
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
            <img :src="base64textString" :alt="imageName" />
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
      <Tree v-model:expandedKeys="expandedKeys" v-model:selectionKeys="selectedKey" selectionMode="single" :value="nodes" class="w-75" ></Tree>
      <InputText type="text" v-model="chapterTitle" class="my-3 mx-2" placeholder="Wpisz nazwe rozdziału"/>
      <Button type="button" icon="pi pi-plus" label="Dodaj nowy rozdział" @click="addChapter" class="w-25 mx-2 my-3"></Button>
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