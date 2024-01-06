

<script setup>
import Tree from 'primevue/tree';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import InlineMessage from 'primevue/inlinemessage';

import NavbarTop from "@/components/navbar/NavbarTop.vue";
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

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
</script>


<template>
  <div class="border-bottom mb-2"><NavbarTop /> </div>

  <div class="row">
    <div class="col-6">
  <div class="card flex justify-content-center">
    <Toast />
    <div class="card flex flex-column align-items-cente">
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