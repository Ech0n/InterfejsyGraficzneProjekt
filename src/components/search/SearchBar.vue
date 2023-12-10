<script setup>
import { ref } from "vue";
import SearchItem from "@/components/search/SearchItem.vue";
let input = ref("");
const courses = [
  {
    id: 1,
    name: 'JavaScript Fundamentals',
    short_desc: 'Learn the basics of JavaScript programming.',
    image_url: 'https://example.com/js-fundamentals.jpg',
    last_updated: '2022-01-01',
    author_name: 'John Doe'
  },
  {
    id: 2,
    name: 'Advanced React Development',
    short_desc: 'Master advanced concepts in React.js.',
    image_url: 'https://example.com/advanced-react.jpg',
    last_updated: '2022-02-15',
    author_name: 'Jane Smith'
  },
  {
    id: 3,
    name: 'Node.js for Beginners',
    short_desc: 'Get started with server-side JavaScript using Node.js.',
    image_url: 'https://example.com/nodejs-beginners.jpg',
    last_updated: '2022-03-10',
    author_name: 'Sam Johnson'
  },
  {
    id: 4,
    name: 'Italian Cooking Essentials',
    short_desc: 'Learn the basics of Italian cuisine and cooking techniques.',
    image_url: 'https://example.com/italian-cooking.jpg',
    last_updated: '2022-04-20',
    author_name: 'Maria Rossi'
  },
  {
    id: 5,
    name: 'Spanish Language Crash Course',
    short_desc: 'Quickly grasp the essentials of the Spanish language.',
    image_url: 'https://example.com/spanish-crash-course.jpg',
    last_updated: '2022-05-05',
    author_name: 'Carlos Fernandez'
  },
  {
    id: 6,
    name: 'Data Science with Python',
    short_desc: 'Explore data analysis and machine learning with Python.',
    image_url: 'https://example.com/data-science-python.jpg',
    last_updated: '2022-06-15',
    author_name: 'Anna Wang'
  },
  {
    id: 7,
    name: 'Photography Masterclass',
    short_desc: 'Hone your photography skills with this comprehensive masterclass.',
    image_url: 'https://example.com/photography-masterclass.jpg',
    last_updated: '2022-07-01',
    author_name: 'David Miller'
  },
  {
    id: 8,
    name: 'French Cuisine: From Basics to Gourmet',
    short_desc: 'Dive into the art of French cooking from beginner to gourmet.',
    image_url: 'https://example.com/french-cuisine.jpg',
    last_updated: '2022-08-10',
    author_name: 'Sophie Dubois'
  },
  {
    id: 9,
    name: 'Introduction to Machine Learning',
    short_desc: 'Get started with the fundamentals of machine learning.',
    image_url: 'https://example.com/intro-to-ml.jpg',
    last_updated: '2022-09-20',
    author_name: 'Michael Chen'
  },
  {
    id: 10,
    name: 'Japanese Language and Culture',
    short_desc: 'Immerse yourself in Japanese language and cultural traditions.',
    image_url: 'https://example.com/japanese-language.jpg',
    last_updated: '2022-10-05',
    author_name: 'Yuki Tanaka'
  }
];

function filteredList() {
  if (input.value && input.value.length > 1)
  return courses.filter((course) =>
      course.name.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<template>
  <div class="container">
    <div class="row d-flex flex-wrap justify-content-center">
      <div class="select-course-or-tutor col-sm-2 ml-2 col-4 align-self-center mb-4">
      <select v-model="selectedOption" class="form-select form-select-lg" aria-label="Large select example">
        <option value="courses" selected>Kursy</option>
        <option value="tutors">Korepetytorzy</option>
      </select>
      </div>
  <div class="col-sm align-self-center">
  <input class="form-control form-control-lg" v-model="input" type="text" placeholder="Search courses..." aria-label=".form-control-lg example">
  </div>
      <div class="row">
    <div class="d-flex flex-wrap">
      <div v-if="shouldRenderCourseBlock">
  <div class="item fruit" v-for="course in filteredList()" :key="course.id">
<!--    <p>{{ course }}</p>-->
    <SearchItem :courseItem="course" />
  </div>
        </div>
    </div>
    <div class="alert alert-primary item error mt-3" role="alert" v-if="input.length > 1 && !filteredList().length">
      No results found! <a href="#" class="alert-link">an example link</a>. Try entering random title here!
    </div>
      </div>
  </div>
  </div>

</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      selectedOption: 'courses', // Set a default "Kursy"
    };
  },
  computed: {
    shouldRenderCourseBlock() {
      return this.selectedOption === 'courses';
    },
  },
};
</script>