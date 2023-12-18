<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"
import Calendar from "primevue/calendar";
import SelectButton from "primevue/selectbutton";
import CourseItem from "@/components/search/CourseItem.vue";
import TutorItem from "@/components/search/TutorItem.vue";
import Toast from "primevue/toast";
import AutoComplete from "primevue/autocomplete";

import { openDB } from 'idb';



var courses = ref([]);

async function loadData() {
    const db = await openDB("db_",1);
    let k =await db.getAll("courses")
    courses.value = k
}
loadData()

let input = ref("");

let selectedOption = function() {
  const type = "type";
  const route = useRoute()

  const default_type = "courses";
  if (type in route.query && route.query[type] === "tutors" )
    return ref(route.query["type"])
  return ref(default_type)
}();



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
const time2 = ref(null);
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
  return courses.value.filter((course) =>
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
    schedule: [
      [['16:00', '17:30']],
      [['12:00', '14:30'], ['19:30', '21:00']],
      [['12:00', '14:30'], ['19:30', '21:00']],
      [['12:00', '14:30'], ['19:30', '21:00']],
    ],
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
    schedule: [
      [['14:00', '17:00']],
      [['12:30', '15:30']],
    ],
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
    schedule: [
      [['17:00', '20:00']],
      [['10:00', '13:00'], ['15:30', '18:30']],
      [['12:00', '14:00'], ['17:30', '20:30']],
    ],
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
    schedule: [
      [['13:00', '16:00']],
      [['18:30', '20:30']],
    ],
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
    schedule: [
      [['18:00', '21:00']],
      [['14:30', '17:30']],
    ],
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
    schedule: [
      [['15:00', '18:00']],
      [['12:30', '15:30']],
    ],
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
    schedule: [
      [['14:00', '17:00']],
      [['13:30', '16:30'], ['18:00', '19:30']],
      [['14:00', '17:00']],
    ],
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
    schedule: [
      [['17:00', '20:00']],
      [['13:30', '16:30']],
    ],
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
    schedule: [
      [['16:00', '19:00']],
      [['11:30', '14:30'], ['17:00', '19:30']],
      [['12:00', '14:00'], ['18:00', '20:00']],
    ],
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
    schedule: [
      [['18:00', '21:00']],
      [['13:30', '16:30']],
    ],
    price: 60
  },
  {
  id: 11,
    firstname: 'Jan',
    lastname: 'Nowak',
    short_desc: 'Doświadczony korepetytor z fizyki, specjalizujący się w teorii kwantowej.',
    image_url: 'https://example.com/jan-nowak.jpg',
    subject: 'Fizyka',
    days: [0, 2],
    schedule: [
  [['15:00', '18:00']],
  [['10:00', '12:30']],
],
    price: 55
},
{
  id: 12,
      firstname: 'Alicja',
    lastname: 'Kowalska',
    short_desc: 'Pasjonująca nauczycielka literatury angielskiej ze specjalizacją w dziełach Shakespeare\'a.',
    image_url: 'https://example.com/alicia-kowalska.jpg',
    subject: 'Literatura angielska',
    days: [1, 4],
    schedule: [
  [['17:00', '20:00']],
  [['14:00', '17:30']],
],
    price: 50
},
{
  id: 13,
      firstname: 'Robert',
    lastname: 'Jankowski',
    short_desc: 'Doświadczony korepetytor matematyki specjalizujący się w analizie matematycznej i algebrze.',
    image_url: 'https://example.com/robert-jankowski.jpg',
    subject: 'Matematyka',
    days: [0, 3],
    schedule: [
  [['14:00', '17:00']],
  [['18:30', '21:30']],
],
    price: 55
},
{
  id: 14,
      firstname: 'Zofia',
    lastname: 'Clark',
    short_desc: 'Nauczycielka historii ze skupieniem na starożytnych cywilizacjach i wydarzeniach światowych.',
    image_url: 'https://example.com/zofia-clark.jpg',
    subject: 'Historia',
    days: [2, 4],
    schedule: [
  [['16:00', '19:00']],
  [['11:00', '13:30']],
],
    price: 50
},
{
  id: 15,
      firstname: 'Michał',
    lastname: 'Brąz',
    short_desc: 'Korepetytor chemii specjalizujący się w chemii organicznej i nieorganicznej.',
    image_url: 'https://example.com/michal-braz.jpg',
    subject: 'Chemia',
    days: [1, 2],
    schedule: [
  [['15:30', '18:30']],
  [['13:00', '15:30']],
],
    price: 60
},
{
  id: 16,
      firstname: 'Ema',
    lastname: 'Taylor',
    short_desc: 'Doświadczona nauczycielka hiszpańskiego z naciskiem na język i kulturę.',
    image_url: 'https://example.com/ema-taylor.jpg',
    subject: 'Język hiszpański',
    days: [0, 3],
    schedule: [
  [['17:30', '20:30']],
  [['14:30', '17:00']],
],
    price: 45
},
{
  id: 17,
      firstname: 'Ryan',
    lastname: 'Williams',
    short_desc: 'Mentor informatyki z doświadczeniem w programowaniu.',
    image_url: 'https://example.com/ryan-williams.jpg',
    subject: 'Informatyka',
    days: [1, 4],
    schedule: [
  [['14:30', '17:30']],
  [['19:00', '21:30']],
],
    price: 55
},
{
  id: 18,
      firstname: 'Izabela',
    lastname: 'Martin',
    short_desc: 'Nauczycielka sztuki ze skupieniem na malarstwie i rzeźbie.',
    image_url: 'https://example.com/izabela-martin.jpg',
    subject: 'Sztuka',
    days: [0, 2],
    schedule: [
  [['16:30', '19:30']],
  [['10:30', '13:00']],
],
    price: 50
},
{
  id: 19,
      firstname: 'Dawid',
    lastname: 'Biały',
    short_desc: 'Instruktor muzyki specjalizujący się w teorii muzycznej i grze na instrumentach.',
    image_url: 'https://example.com/dawid-bialy.jpg',
    subject: 'Muzyka',
    days: [1, 3],
    schedule: [
  [['18:30', '21:30']],
  [['13:30', '16:00']],
],
    price: 60
},
{
  id: 20,
      firstname: 'Olivia',
    lastname: 'Anderson',
    short_desc: 'Nauczycielka języka francuskiego ze specjalizacją w gramatyce i konwersacji.',
    image_url: 'https://example.com/olivia-anderson.jpg',
    subject: 'Język Francuski',
    days: [2, 4],
    schedule: [
  [['15:00', '18:00']],
  [['11:30', '14:00']],
],
    price: 45
}

];

let valuesArray;

function filteredTutorsList() {
  if (input.value && input.value.length > 1) {
    valuesArray = [];
    let filtered_tutors = tutors.filter((tutor) =>
        tutor.subject.toLowerCase().includes(input.value.toLowerCase())
    );
    if (days.value.length !== 0) {
      valuesArray = days.value.map(day => day.value);
      filtered_tutors = filtered_tutors.filter((tutor) => tutor.days.some((day) => valuesArray.includes(day))
      );
      if (time.value != null)
        filtered_tutors = filtered_tutors.filter((tutor) => tutor.schedule.some((day) => {
          const relevantStartTimes = day.flatMap((hours) =>
              hours.filter((_, index) => index % 2 === 0)
          );

          return relevantStartTimes.some((startTime) =>
              isTimeStartBeforeOrEqual(time.value, startTime)
          );
        }));

      if (time2.value != null)
        filtered_tutors = filtered_tutors.filter((tutor) => tutor.schedule.some((day) => {
          const relevantStartTimes = day.flatMap((hours) =>
              hours.filter((_, index) => index % 2 === 1)
          );

          return relevantStartTimes.some((endTime) =>
              isTimeEndBeforeOrEqual(time2.value, endTime)
          );
        }));

      if (time.value != null && time2.value != null)
        filtered_tutors = filtered_tutors.filter((tutor) => tutor.schedule.some((day) => {
          const relevantStartTimes = day.flatMap((hours) =>
              hours.filter((_, index) => index % 2 === 0)
          );
          const relevantEndTimes = day.flatMap((hours) =>
              hours.filter((_, index) => index % 2 === 1)
          );


          return relevantStartTimes.some((startTime, index) =>
              index < relevantEndTimes.length &&
              isTimeStartBeforeOrEqual(time.value, startTime) &&
              isTimeEndBeforeOrEqual(time2.value, relevantEndTimes[index]))
        }));

    }
    return filtered_tutors;
  }
}

function isTimeStartBeforeOrEqual(timeStart, startCourseHour) {
  if (timeStart) {
    const [courseHour, courseMinute] = startCourseHour.split(':');

    const timeStartToCompare = new Date(timeStart);
    timeStartToCompare.setHours(courseHour, courseMinute, 0, 0);

    // Compare the time parts
    return timeStart <= timeStartToCompare;
  }
  return true;
}

function isTimeEndBeforeOrEqual(timeEnd, EndCourseHour) {
  if (timeEnd) {
    const [courseHour, courseMinute] = EndCourseHour.split(':');

    const timeEndToCompare = new Date(timeEnd);
    timeEndToCompare.setHours(courseHour, courseMinute, 0, 0);

    // Compare the time parts
    return timeEndToCompare <= timeEnd;

  }
  return true;
}

const items = ref([]);

const search = (event) => {

  let uniqueElements = new Set();

  if (selectedOption.value === 'tutors') {
    let filtered_t = tutors.filter((tutor) =>
        tutor.subject.toLowerCase().includes(event.query.toLowerCase()));

    filtered_t.forEach(tutor => {
      uniqueElements.add(tutor.subject);
    });

    items.value = Array.from(uniqueElements);

    if (items.value.length === 0) {
      items.value = ["Matematyka", "Informatyka", "Fizyka"];
    }
  }
  else {
    let filtered_c = courses.value.filter((course) =>
        course.name.toLowerCase().includes(event.query.toLowerCase()));

    filtered_c.forEach(course => {
      uniqueElements.add(course.name);
    });

    items.value = Array.from(uniqueElements);

    if (items.value.length === 0) {
      items.value = ["Podstawy", "Data Science", "Język"];
    }
  }
}
</script>

<template>
  <Toast position="top-right" group="pt"
  :pt="{
         container: { class: 'alert alert-success' }
  }"/> <!-- !important for showing messages-->
  <div class="container">
    <div class="row d-flex flex-wrap justify-content-center">
      <div class="select-course-or-tutor col-sm-2 ml-2 col-4 align-self-center mb-4">
      <select v-model="selectedOption" class="form-select form-select-lg" aria-label="Large select example">
        <option value="courses" selected>Kursy</option>
        <option value="tutors">Korepetycje</option>
      </select>
      </div>
  <div class="col-sm align-self-center">
<!--  <input class="form-control form-control-lg" v-model="input" type="text" placeholder="Wyszukaj..." aria-label=".form-control-lg example">-->
    <AutoComplete v-model="input" :suggestions="items" @complete="search" input-class="form-control form-control-lg" class="form-control form-control-lg" placeholder="Wyszukaj..." aria-label=".form-control-lg example"/>
  </div>
      <div class="row space_between_results_and_search_bar"></div>
      <div class="row">

      <div class="d-flex flex-wrap align-items-center justify-content-center" v-if=" selectedOption === 'courses' ">
  <div  id=searchResultsId v-for="course in filteredCoursesList()" :key="course.id">
<!--    <p>{{ course }}</p>-->
    <CourseItem :courseItem="course" />
  </div>
        <div class="alert alert-primary item error mt-3" role="alert" v-if="input.length > 1 && !filteredCoursesList().length">
          Nie znaleziono żadnego kursu! Spróbój wpisać coś innego lub skorzystaj z sugestii!
        </div>
        </div>
      <div class="d-flex flex-wrap align-items-center justify-content-center"  v-else>
        <div class="mt-3 w-100"><SelectButton v-model="days" :options="options" optionLabel="weekDay" multiple aria-labelledby="multiple" />
          <h4 class="mx-2 my-2"> Od </h4>
          <Calendar  v-model="time"  class="mt-4 mx-2 w-25" date-format=" " :manual-input="false" :input-style="styles" show-icon time-only input-id="calendar-inputId"/>
          <div class="w-100"><button class="btn btn-lg btn-outline-success mt-2" @click="setToday">Dzisiejsza godzina</button></div>
          <h4 class="mx-2 my-2"> Do </h4>
        <Calendar  v-model="time2"  class="mt-4 w-25" date-format=" " :manual-input="false" :input-style="styles" show-icon time-only input-id="calendar-inputId2"/></div>
        <div  v-for="tutor in filteredTutorsList()" :key="tutor.id">
          <!--    <p>{{ course }}</p>-->
          <TutorItem :tutorItem="tutor" :chosenDays="valuesArray" :timeStart="time" :timeEnd="time2" />
        </div>
        <div class="alert alert-primary item error mt-3" role="alert" v-if="input.length > 1 && !filteredTutorsList().length">
          Nie znaleziono żadnego korepetytora! Sprobój wpisać coś innego lub skorzystaj z sugestii!
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

.space_between_results_and_search_bar {
  min-height: 180px;
}
</style>

<script>
</script>