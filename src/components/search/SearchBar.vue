<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"
import Calendar from "primevue/calendar";
import SelectButton from "primevue/selectbutton";
import CourseItem from "@/components/search/CourseItem.vue";
import TutorItem from "@/components/search/TutorItem.vue";


let input = ref("");

let selectedOption = function() {
  const type = "type";
  const route = useRoute()

  const default_type = "courses";
  if (type in route.query && route.query[type] === "tutors" )
    return ref(route.query["type"])
  return ref(default_type)
}();

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


const days = ref([]);
const options = [
  { weekDay: 'Poniedziałek', value: 0 },
  { weekDay: 'Wtorek', value: 1 },
  { weekDay: 'Środa', value: 2 },
  { weekDay: 'Czwartek', value: 3 },
  { weekDay: 'Piątek', value: 4 },
  { weekDay: 'Sobota', value: 5 },
  { weekDay: 'Niedziela', value: 6 }
];

const time = ref(null);
const styles = {
  color: "green",
  textAlign: "left",
  fontSize: "2rem",
};

function setToday() {
  time.value = new Date();
}
function filteredCoursesList() {
  if (input.value && input.value.length > 1)
  return courses.filter((course) =>
      course.name.toLowerCase().includes(input.value.toLowerCase())
  );
}
const tutors = [
  {
    id: 1,
    firstname: 'Jan',
    lastname: 'Kowalski',
    short_desc: 'Doświadczony korepetytor z matematyki z pasją do nauczania.',
    image_url: 'https://example.com/jan-kowalski.jpg',
    subject: 'Matematyka',
    days: [0, 1, 2, 4],
    hours: '15:00 - 18:00',
    price: 50
  },
  {
    id: 2,
    firstname: 'Alicja',
    lastname: 'Nowak',
    short_desc: 'Ekspert w biologii specjalizujący się w anatomii i genetyce.',
    image_url: 'https://example.com/alicia-nowak.jpg',
    subject: 'Biologia',
    days: [1, 3],
    hours: '14:00 - 17:00',
    price: 60
  },
  {
    id: 3,
    firstname: 'Michał',
    lastname: 'Jankowski',
    short_desc: 'Pasjonat nauczania języka angielskiego i literatury.',
    image_url: 'https://example.com/michal-jankowski.jpg',
    subject: 'Język angielski',
    days: [0, 2, 4],
    hours: '17:00 - 20:00',
    price: 45
  },
  {
    id: 4,
    firstname: 'Emilia',
    lastname: 'Brąz',
    short_desc: 'Nauczyciel historii ze specjalizacją w wydarzeniach światowych.',
    image_url: 'https://example.com/emilia-braz.jpg',
    subject: 'Historia',
    days: [1, 3],
    hours: '16:00 - 19:00',
    price: 55
  },
  {
    id: 5,
    firstname: 'Daniel',
    lastname: 'Miller',
    short_desc: 'Doświadczony instruktor fizyki z naciskiem na mechanikę.',
    image_url: 'https://example.com/daniel-miller.jpg',
    subject: 'Fizyka',
    days: [0, 2],
    hours: '18:00 - 21:00',
    price: 50
  },
  {
    id: 6,
    firstname: 'Zofia',
    lastname: 'Garcia',
    short_desc: 'Korepetytor chemii specjalizujący się w chemii organicznej i nieorganicznej.',
    image_url: 'https://example.com/zofia-garcia.jpg',
    subject: 'Chemia',
    days: [1, 3],
    hours: '15:00 - 18:00',
    price: 60
  },
  {
    id: 7,
    firstname: 'Mateusz',
    lastname: 'Anders',
    short_desc: 'Mentor informatyki z doświadczeniem w programowaniu.',
    image_url: 'https://example.com/mateusz-anders.jpg',
    subject: 'Informatyka',
    days: [0, 2, 4],
    hours: '14:00 - 17:00',
    price: 55
  },
  {
    id: 8,
    firstname: 'Olga',
    lastname: 'Talar',
    short_desc: 'Nauczycielka języka hiszpańskiego specjalizująca się w języku i kulturze.',
    image_url: 'https://example.com/olga-talar.jpg',
    subject: 'Język hiszpański',
    days: [1, 3],
    hours: '17:00 - 20:00',
    price: 45
  },
  {
    id: 9,
    firstname: 'Witold',
    lastname: 'Czarnecki',
    short_desc: 'Nauczyciel sztuki ze skupieniem na malarstwie i rzeźbie.',
    image_url: 'https://example.com/witold-czarnecki.jpg',
    subject: 'Sztuka',
    days: [0, 2, 4],
    hours: '16:00 - 19:00',
    price: 50
  },
  {
    id: 10,
    firstname: 'Ema',
    lastname: 'Hill',
    short_desc: 'Instruktorka muzyki ze specjalizacją w teorii i grze na instrumentach.',
    image_url: 'https://example.com/ema-hill.jpg',
    subject: 'Muzyka',
    days: [1, 3],
    hours: '18:00 - 21:00',
    price: 60
  }
];


function filteredTutorsList() {
  if (input.value && input.value.length > 1) {
    let filtered_tutors = tutors.filter((tutor) =>
        tutor.subject.toLowerCase().includes(input.value.toLowerCase())
    );
    if (days.value.length !== 0) {
      const valuesArray = days.value.map(day => day.value);
            return filtered_tutors.filter((tutor) => tutor.days.some((day) => valuesArray.includes(day))
      );
    }
    return filtered_tutors;
  }
}


</script>

<template>
  <div class="container">
    <div class="row d-flex flex-wrap justify-content-center">
      <div class="select-course-or-tutor col-sm-2 ml-2 col-4 align-self-center mb-4">
      <select v-model="selectedOption" class="form-select form-select-lg" aria-label="Large select example">
        <option value="courses" selected>Kursy</option>
        <option value="tutors">Korepetycje</option>
      </select>
      </div>
  <div class="col-sm align-self-center">
  <input class="form-control form-control-lg" v-model="input" type="text" placeholder="Wyszukaj..." aria-label=".form-control-lg example">

  </div>
      <div class="row">

      <div class="d-flex flex-wrap align-items-center justify-content-center" v-if=" selectedOption === 'courses' ">
  <div  id=searchResultsId v-for="course in filteredCoursesList()" :key="course.id">
<!--    <p>{{ course }}</p>-->
    <CourseItem :courseItem="course" />
  </div>
        <div class="alert alert-primary item error mt-3" role="alert" v-if="input.length > 1 && !filteredCoursesList().length">
          Nie znaleziono żadnego kursu! Spróbój wpisać [random func here]
        </div>
        </div>
      <div class="d-flex flex-wrap align-items-center justify-content-center"  v-else>
        <div class="mt-3 w-100"><SelectButton v-model="days" :options="options" optionLabel="weekDay" multiple aria-labelledby="multiple" />
          <Calendar id="calendar-timeonly" v-model="time"  class="mt-4 w-25" date-format=" " :manual-input="false" :input-style="styles" show-icon time-only input-id="calendar-inputId"/></div>
        <div class="w-100"><button class="btn btn-lg btn-outline-success mt-2" @click="setToday">Dzisiejsza godzina</button></div>
        <div  v-for="tutor in filteredTutorsList()" :key="tutor.id">
          <!--    <p>{{ course }}</p>-->
          <TutorItem :tutorItem="tutor" />
        </div>
        <div class="alert alert-primary item error mt-3" role="alert" v-if="input.length > 1 && !filteredTutorsList().length">
          Nie znaleziono żadnego korepetytora! Sprobój wpisać [random func here]
        </div>
      </div>
      </div>
  </div>
  </div>

</template>

<style scoped>
@media (max-width: 1200px) {
  #calendar-timeonly.w-25 {
    width: 50% !important; /* Override the width for smaller screens */
  }
}
</style>

<script>

</script>