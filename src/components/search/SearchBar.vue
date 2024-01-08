<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"
import Calendar from "primevue/calendar";
import SelectButton from "primevue/selectbutton";
import CourseItem from "@/components/search/CourseItem.vue";
import TutorItem from "@/components/search/TutorItem.vue";
import Toast from "primevue/toast";
import AutoComplete from "primevue/autocomplete";
import ToggleButton from 'primevue/togglebutton';
import { openDB } from 'idb';



var courses =[];
var tutors =[];

async function loadData() {
    const db = await openDB("db_",1);
    let k =await db.getAll("courses")
    courses = k
    k = await db.getAll("tutors")
    tutors = k
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
  return courses.filter((course) =>
    course.name.toLowerCase().includes(input.value.toLowerCase())
    
  );
}


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
    let filtered_c = courses.filter((course) =>
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

let showTimeOptions = ref(false); // default not show
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
        <div class="w-100"><ToggleButton v-model="showTimeOptions" onLabel="Ukryj" offLabel="Pokaż"
                           onIcon="pi pi-clock" offIcon="pi pi-clock" icon-pos="right" class="toggleButtonOptions"/></div>
        <div v-if="showTimeOptions" class="my-2">
        <div class="mt-3 w-100"><SelectButton v-model="days" :options="options" optionLabel="weekDay" multiple aria-labelledby="multiple" />
          <h4 class="mx-2 mt-2"> Od </h4>
          <Calendar  v-model="time"  class="mt-1 mx-2 w-25" date-format=" " :manual-input="false" :input-style="styles" show-icon icon="pi pi-clock"  time-only input-id="calendar-inputId"/>
          <div class="w-100"><button class="btn btn-lg btn-outline-success mt-2 mx-2" @click="setToday">Dzisiejsza godzina</button>
            <button class="btn btn-lg btn-outline-danger mt-2" @click="time = ''">Wyczyść</button></div>
          <h4 class="mx-2 mt-2"> Do </h4>
        <Calendar  v-model="time2"  class="mt-1 w-25 mx-2" date-format=" " :manual-input="false" :input-style="styles" show-icon icon="pi pi-clock" time-only input-id="calendar-inputId2" />

          </div>
          <button class="btn btn-lg btn-outline-danger mt-2" @click="time2 = ''">Wyczyść</button>
        </div>
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
.toggleButtonOptions {
  min-width: 120px;
}

</style>
