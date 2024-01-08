
<template>
  <div class="card flex justify-content-center text-decoration-none" >
    <Sidebar v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
          <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span class="inline-flex align-items-center gap-2">
<!--                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path-->
<!--                                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"-->
<!--                                    fill="var(&#45;&#45;primary-color)"-->
<!--                                />-->
<!--                                <path-->
<!--                                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"-->
<!--                                    fill="var(&#45;&#45;text-color)"-->
<!--                                />-->
<!--                            </svg>-->
                          <img :src="courseItem.image_url" alt='course-logo' width="64px"/>
                            <span class="font-semibold text-2xl text-primary">{{ courseItem.name }} </span>
                        </span>
            <span>

                            <button class="btn btn-dark mx-4" @click="closeCallback" v-styleclass="{
                                    selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }">X</button>
                        </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="list-none p-3 m-0">
              <li>
                <div
                    v-ripple
                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                >
                  <span class="font-medium">ROZDZIAŁY</span>
                  <i class="pi pi-chevron-down"></i>

                </div>

                <ul class="list-none p-0 m-0">
                  <li>
                    <RouterLink :to="'/course/' + courseItem.id" @click="emit('completeChapter', mainPage); closeCallback();" class="text-decoration-none"><i class="pi pi-home"></i> Strona główna </RouterLink>
                  </li>
                  <ScrollPanel style="width: 100%; height: 200px" class="scrollChapters"
                  >
                  <li v-for="(chapter, chapterIndex) in courseChapters.chapters" :key="chapter.key" class="my-2">
                    <a v-ripple @click="emit('completeChapter', chapter); closeCallback();" class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple text-decoration-none">
<!--                      <span>{{ chapterIndex + 1}}</span>-->
<!--                      <i class="pi pi-caret-right mx-1"></i>-->
                      <svg width="31" height="31" xmlns="http://www.w3.org/2000/svg">
                        <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" fill="violet" />
                        <text v-if="free" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{{ parseInt(chapterIndex) + 1 }}</text>
                        <g v-else>
                          <svg xmlns="http://www.w3.org/2000/svg" x="8" y="6" dominant-baseline="middle" text-anchor="middle" height="16" width="15" viewBox="0 0 448 512"> <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                        </g>
                      </svg>
                      <span class="mx-2"> {{ chapter.label }}</span>
                    </a>
                  </li>
                  </ScrollPanel>
                </ul>

              </li>
            </ul>
            <ul class="list-none p-3 m-0">
              <li>
                <div
                    v-ripple
                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                >
                  <span class="font-medium">APPLICATION</span>
                  <i class="pi pi-chevron-down"></i>
                </div>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-folder mr-2"></i>
                      <span class="font-medium">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-chart-bar mr-2"></i>
                      <span class="font-medium">Performance</span>
                    </a>
                  </li>
                  <li>
                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                      <i class="pi pi-cog mr-2"></i>
                      <span class="font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="my-4 fixed-bottom">
            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
            <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
              <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />

              <span class="font-bold mx-5">{{ courseItem.author_name }}</span>
            </a>
          </div>
        </div>
      </template>
    </Sidebar>
    <Button icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<script setup>
import Sidebar from 'primevue/sidebar';

import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import { ref } from "vue";
import ScrollPanel from 'primevue/scrollpanel';

// import { usePrimeVue } from 'primevue/config';
//
// const PrimeVue = usePrimeVue();
//
// PrimeVue.config.ripple = true;

const visible = ref(false);

const props = defineProps(["chapter", "courseItem", "courseChapters", "mainPage"]);

const emit = defineEmits(['completeChapter']);
let free = true;
</script>

<style scoped>
:deep(.p-scrollpanel-bar-y) {
  background: #6bd4b1;
  margin-left: 0.9rem;
  min-width: 0.5rem;
}
</style>
<script>
export default {
  data() {
    return {
      currentChapter: {title: 'Strona główna'}
    };
  },
}
</script>