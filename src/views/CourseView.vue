<script setup>
import {ref} from 'vue';
import CourseSideBar from "@/components/sidebar/CourseSideBar.vue";


let currentChapter = ref({title: "Strona główna"});

const updateChapter = ((updatedChapter) => {
  currentChapter.value = updatedChapter;
  return updatedChapter;
  });

</script>

<template>

  <CourseSideBar :courseItem="courseItem" :courseChapters="courseChapters" @complete-chapter="updateChapter"/>
  <h1 class="display-1 text-center my-3">{{ currentChapter.title }}</h1>
  <h5 v-text="courseItem.name" class="text-center my-2 text-muted"></h5>
</template>

<style scoped>

</style>

<script>
export default  {
  data() {
    return {
      courseItem: this.getCourseById(),
      courseChapters: this.getChaptersInfo(),
      currentChapter: {title: 'Strona główna'}
    };
  },
  methods: {
    courseId() {
      return this.$route.params.id;
    },
    getCourseById() {
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
      if (0 < this.courseId() && this.courseId() < courses.length)
        return courses[this.courseId()-1];
      return  courses[0];// default return first course
    },

    getChaptersInfo() {
      const chapters = [
        {
          course_id: 1,
          chapters: [
            { title: 'Wprowadzenie do JavaScript' },
            { title: 'Podstawy składni JavaScript' },
            { title: 'Operatory i typy danych' },
            { title: 'Struktury kontrolne w JavaScript' },
            { title: 'Funkcje i obiekty w JavaScript' },
          ],
        },
        {
          course_id: 2,
          chapters: [
            { title: 'Wprowadzenie do React.js' },
            { title: 'Komponenty i props' },
            { title: 'Stan i cykl życia komponentu' },
            { title: 'Zaawansowane techniki w React' },
            { title: 'Testowanie w React' },
          ],
        },
        {
          course_id: 3,
          chapters: [
            { title: 'Wprowadzenie do Node.js' },
            { title: 'Obsługa żądań HTTP w Node.js' },
            { title: 'Express.js i tworzenie API' },
            { title: 'Praca z bazami danych w Node.js' },
            { title: 'Middleware i bezpieczeństwo w Node.js' },
          ],
        },
        {
          course_id: 4,
          chapters: [
            { title: 'Historia kuchni włoskiej' },
            { title: 'Podstawowe składniki i techniki gotowania' },
            { title: 'Przygotowanie tradycyjnych potraw' },
            { title: 'Wino i kuchnia włoska' },
            { title: 'Desery i słodkości włoskie' },
          ],
        },
        {
          course_id: 5,
          chapters: [
            { title: 'Podstawy języka hiszpańskiego' },
            { title: 'Komunikacja w codziennych sytuacjach' },
            { title: 'Podróże i kultura w Hiszpanii' },
            { title: 'Zawody i praca w hiszpańskojęzycznym środowisku' },
            { title: 'Rozwijanie umiejętności językowych' },
          ],
        },
        {
          course_id: 6,
          chapters: [
            { title: 'Wprowadzenie do analizy danych' },
            { title: 'Przetwarzanie danych w Pythonie' },
            { title: 'Modelowanie danych i machine learning' },
            { title: 'Eksploracyjna analiza danych' },
            { title: 'Zastosowania praktyczne w Data Science' },
          ],
        },
        {
          course_id: 7,
          chapters: [
            { title: 'Podstawy fotografii' },
            { title: 'Techniki kompozycji' },
            { title: 'Oświetlenie w fotografii' },
            { title: 'Postprodukcja i edycja zdjęć' },
            { title: 'Projektowanie portfolio fotograficznego' },
          ],
        },
        {
          course_id: 8,
          chapters: [
            { title: 'Historia kuchni francuskiej' },
            { title: 'Techniki gotowania i przygotowywania potraw' },
            { title: 'Specjały kuchni francuskiej' },
            { title: 'Wino i ser w kuchni francuskiej' },
            { title: 'Gotowanie na poziomie gourmet' },
          ],
        },
        {
          course_id: 9,
          chapters: [
            { title: 'Wprowadzenie do Machine Learning' },
            { title: 'Algorytmy uczenia maszynowego' },
            { title: 'Modelowanie i ocena wyników' },
            { title: 'Praktyczne zastosowania w ML' },
            { title: 'Trendy i przyszłość Machine Learning' },
          ],
        },
        {
          course_id: 10,
          chapters: [
            { title: 'Podstawy języka japońskiego' },
            { title: 'Pismo i alfabet japoński' },
            { title: 'Zwroty i frazy podstawowe' },
            { title: 'Kultura japońska i zwyczaje' },
            { title: 'Rozwinięcie umiejętności komunikacyjnych' },
          ],
        },
      ];
      if (0 < this.courseId() && this.courseId() < chapters.length)
        return chapters[this.courseId()-1];
      return  chapters[0];// default return first course
    },
    updateParent(chapter) {
      this.currentChapter = chapter
    }


  }
}
</script>