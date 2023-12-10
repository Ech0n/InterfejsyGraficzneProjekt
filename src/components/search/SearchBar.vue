<script setup>
import { ref } from "vue";
import CourseItem from "@/components/search/CourseItem.vue";
import TutorItem from "@/components/search/TutorItem.vue";
let input = ref("");
let selectedOption = ref("courses")
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

function filteredCoursesList() {
  if (input.value && input.value.length > 1)
  return courses.filter((course) =>
      course.name.toLowerCase().includes(input.value.toLowerCase())
  );
}
const tutors = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    short_desc: 'Experienced Math tutor with a passion for teaching.',
    image_url: 'https://example.com/john-doe.jpg',
    subject: 'Math',
    days: ['Monday', 'Wednesday', 'Friday'],
    hours: '3:00 PM - 6:00 PM'
  },
  {
    id: 2,
    firstname: 'Alice',
    lastname: 'Smith',
    short_desc: 'Biology expert specializing in anatomy and genetics.',
    image_url: 'https://example.com/alice-smith.jpg',
    subject: 'Biology',
    days: ['Tuesday', 'Thursday'],
    hours: '2:00 PM - 5:00 PM'
  },
  {
    id: 3,
    firstname: 'Michael',
    lastname: 'Johnson',
    short_desc: 'Passionate about teaching English and Literature.',
    image_url: 'https://example.com/michael-johnson.jpg',
    subject: 'English',
    days: ['Monday', 'Wednesday', 'Friday'],
    hours: '5:00 PM - 8:00 PM'
  },
  {
    id: 4,
    firstname: 'Emily',
    lastname: 'Brown',
    short_desc: 'History tutor with expertise in world events.',
    image_url: 'https://example.com/emily-brown.jpg',
    subject: 'History',
    days: ['Tuesday', 'Thursday'],
    hours: '4:00 PM - 7:00 PM'
  },
  {
    id: 5,
    firstname: 'Daniel',
    lastname: 'Miller',
    short_desc: 'Experienced Physics instructor with a focus on mechanics.',
    image_url: 'https://example.com/daniel-miller.jpg',
    subject: 'Physics',
    days: ['Monday', 'Wednesday'],
    hours: '6:00 PM - 9:00 PM'
  },
  {
    id: 6,
    firstname: 'Sophia',
    lastname: 'Garcia',
    short_desc: 'Chemistry tutor specializing in organic and inorganic chemistry.',
    image_url: 'https://example.com/sophia-garcia.jpg',
    subject: 'Chemistry',
    days: ['Tuesday', 'Thursday'],
    hours: '3:00 PM - 6:00 PM'
  },
  {
    id: 7,
    firstname: 'Matthew',
    lastname: 'Anderson',
    short_desc: 'Computer Science mentor with expertise in programming.',
    image_url: 'https://example.com/matthew-anderson.jpg',
    subject: 'Computer Science',
    days: ['Monday', 'Wednesday', 'Friday'],
    hours: '2:00 PM - 5:00 PM'
  },
  {
    id: 8,
    firstname: 'Olivia',
    lastname: 'Taylor',
    short_desc: 'Spanish tutor specializing in language and culture.',
    image_url: 'https://example.com/olivia-taylor.jpg',
    subject: 'Spanish',
    days: ['Tuesday', 'Thursday'],
    hours: '5:00 PM - 8:00 PM'
  },
  {
    id: 9,
    firstname: 'William',
    lastname: 'Clark',
    short_desc: 'Art teacher with a focus on painting and sculpture.',
    image_url: 'https://example.com/william-clark.jpg',
    subject: 'Art',
    days: ['Monday', 'Wednesday', 'Friday'],
    hours: '4:00 PM - 7:00 PM'
  },
  {
    id: 10,
    firstname: 'Emma',
    lastname: 'Hill',
    short_desc: 'Music instructor with expertise in theory and instrumentals.',
    image_url: 'https://example.com/emma-hill.jpg',
    subject: 'Music',
    days: ['Tuesday', 'Thursday'],
    hours: '6:00 PM - 9:00 PM'
  }
];

function filteredTutorsList() {
  if (input.value && input.value.length > 1)
    return tutors.filter((tutor) =>
        tutor.subject.toLowerCase().includes(input.value.toLowerCase())
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
  <input class="form-control form-control-lg" v-model="input" type="text" placeholder="Wyszukaj..." aria-label=".form-control-lg example">
  </div>
      <div class="row">

      <div class="d-flex flex-wrap align-items-center justify-content-center" v-if=" selectedOption === 'courses' ">
  <div  v-for="course in filteredCoursesList()" :key="course.id">
<!--    <p>{{ course }}</p>-->
    <CourseItem :courseItem="course" />
  </div>
        <div class="alert alert-primary item error mt-3" role="alert" v-if="input.length > 1 && !filteredCoursesList().length">
          Nie znaleziono żadnego kursu! Spróbój wpisać [random func here]
        </div>
        </div>
      <div class="d-flex flex-wrap align-items-center justify-content-center"  v-else>
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

</style>

<script>
</script>