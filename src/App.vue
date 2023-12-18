<script setup>
localStorage.isLoggedIn = false


const courses = [
  {
    id: 1,
    name: 'Podstawy JavaScript',
    short_desc: 'Naucz się podstaw programowania w JavaScript.',
    image_url: 'https://example.com/js-podstawy.jpg',
    last_updated: '2022-01-01',
    author_name: 'Jan Kowalski',
    price: 120
  },
  {
    id: 2,
    name: 'Zaawansowane rozwijanie w React',
    short_desc: 'Opanuj zaawansowane koncepcje w React.js.',
    image_url: 'https://example.com/zaawansowany-react.jpg',
    last_updated: '2022-02-15',
    author_name: 'Anna Nowak',
    price: 200
  },
  {
    id: 3,
    name: 'Node.js dla początkujących',
    short_desc: 'Rozpocznij pracę z JavaScript po stronie serwera za pomocą Node.js.',
    image_url: 'https://example.com/nodejs-poczatkujacy.jpg',
    last_updated: '2022-03-10',
    author_name: 'Michał Jankowski',
    price: 150
  },
  {
    id: 4,
    name: 'Podstawy kuchni włoskiej',
    short_desc: 'Naucz się podstaw kuchni włoskiej i technik gotowania.',
    image_url: 'https://example.com/kuchnia-wloska.jpg',
    last_updated: '2022-04-20',
    author_name: 'Maria Rossi',
    price: 250
  },
  {
    id: 5,
    name: 'Kurs intensywny języka hiszpańskiego',
    short_desc: 'Szybkie opanowanie podstaw języka hiszpańskiego.',
    image_url: 'https://example.com/hiszpanski-intensywny.jpg',
    last_updated: '2022-05-05',
    author_name: 'Karol Fernandez',
    price: 180
  },
  {
    id: 6,
    name: 'Data Science z użyciem Pythona',
    short_desc: 'Zbadaj analizę danych i machine learning przy użyciu Pythona.',
    image_url: 'https://example.com/data-science-python.jpg',
    last_updated: '2022-06-15',
    author_name: 'Anna Wang',
    price: 300
  },
  {
    id: 7,
    name: 'Masterclass w fotografii',
    short_desc: 'Doskonal swoje umiejętności fotograficzne dzięki temu kompleksowemu kursowi.',
    image_url: 'https://example.com/masterclass-fotografia.jpg',
    last_updated: '2022-07-01',
    author_name: 'Dawid Miller',
    price: 220
  },
  {
    id: 8,
    name: 'Francuska kuchnia: Od podstaw do gourmet',
    short_desc: 'Zanurz się w sztuce gotowania francuskiego od początkującego do wykwintnego.',
    image_url: 'https://example.com/francuska-kuchnia.jpg',
    last_updated: '2022-08-10',
    author_name: 'Zofia Dubois',
    price: 170
  },
  {
    id: 9,
    name: 'Wprowadzenie do Machine Learning',
    short_desc: 'Zacznij od podstaw w dziedzinie machine learning.',
    image_url: 'https://example.com/wprowadzenie-do-ml.jpg',
    last_updated: '2022-09-20',
    author_name: 'Michał Chen',
    price: 280
  },
  {
    id: 10,
    name: 'Język i kultura japońska',
    short_desc: 'Zanurz się w języku japońskim i tradycjach kulturowych.',
    image_url: 'https://example.com/japonski-jezyk.jpg',
    last_updated: '2022-10-05',
    author_name: 'Yuki Tanaka',
    price: 160
  }
];

import { openDB } from 'idb';
async function initalizeDatabaseData() {
    const db = await openDB("db_",1,{  upgrade(db){
      db.createObjectStore('users', {keyPath: 'id',autoIncrement: true,});
      db.createObjectStore('courses', {keyPath: 'id',autoIncrement: true,});
    }});


    const tx = db.transaction('courses', 'readwrite')
    
    await Promise.all(courses.map((kurs) => 
    {
      return tx.store.add(kurs).then((result) => {
        console.log("Item added successfully:", result);
      }).catch((result) => {
        console.log("Item rejected:", result);
      })
    }).join(tx.done.catch((result) => {
        console.log("Item rejected:", result);
      })))
  
}

initalizeDatabaseData()
</script>

<template>
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
