
const courses = [
    {
      id: 1,
      authorId:0,
      name: 'Podstawy JavaScript',
      short_desc: 'Naucz się podstaw programowania w JavaScript.',
      image_url: 'https://example.com/js-podstawy.jpg',
      last_updated: '2022-01-01',
      author_name: 'Jan Kowalski',
      price: 120
    },
    {
      id: 2,
      authorId:0,
      name: 'Zaawansowane rozwijanie w React',
      short_desc: 'Opanuj zaawansowane koncepcje w React.js.',
      image_url: 'https://example.com/zaawansowany-react.jpg',
      last_updated: '2022-02-15',
      author_name: 'Anna Nowak',
      price: 200
    },
    {
      id: 3,
      authorId:0,
      name: 'Node.js dla początkujących',
      short_desc: 'Rozpocznij pracę z JavaScript po stronie serwera za pomocą Node.js.',
      image_url: 'https://example.com/nodejs-poczatkujacy.jpg',
      last_updated: '2022-03-10',
      author_name: 'Michał Jankowski',
      price: 150
    },
    {
      id: 4,
      authorId:1,
      name: 'Podstawy kuchni włoskiej',
      short_desc: 'Naucz się podstaw kuchni włoskiej i technik gotowania.',
      image_url: 'https://example.com/kuchnia-wloska.jpg',
      last_updated: '2022-04-20',
      author_name: 'Maria Rossi',
      price: 250
    },
    {
      id: 5,
      authorId:2,
      name: 'Kurs intensywny języka hiszpańskiego',
      short_desc: 'Szybkie opanowanie podstaw języka hiszpańskiego.',
      image_url: 'https://example.com/hiszpanski-intensywny.jpg',
      last_updated: '2022-05-05',
      author_name: 'Karol Fernandez',
      price: 180
    },
    {
      id: 6,
      authorId:0,
      name: 'Data Science z użyciem Pythona',
      short_desc: 'Zbadaj analizę danych i machine learning przy użyciu Pythona.',
      image_url: 'https://example.com/data-science-python.jpg',
      last_updated: '2022-06-15',
      author_name: 'Anna Wang',
      price: 300
    },
    {
      id: 7,
      authorId:2,
      name: 'Masterclass w fotografii',
      short_desc: 'Doskonal swoje umiejętności fotograficzne dzięki temu kompleksowemu kursowi.',
      image_url: 'https://example.com/masterclass-fotografia.jpg',
      last_updated: '2022-07-01',
      author_name: 'Dawid Miller',
      price: 220
    },
    {
      id: 8,
      authorId:1,
      name: 'Francuska kuchnia: Od podstaw do gourmet',
      short_desc: 'Zanurz się w sztuce gotowania francuskiego od początkującego do wykwintnego.',
      image_url: 'https://example.com/francuska-kuchnia.jpg',
      last_updated: '2022-08-10',
      author_name: 'Zofia Dubois',
      price: 170
    },
    {
      id: 9,
      authorId:0,
      name: 'Wprowadzenie do Machine Learning',
      short_desc: 'Zacznij od podstaw w dziedzinie machine learning.',
      image_url: 'https://example.com/wprowadzenie-do-ml.jpg',
      last_updated: '2022-09-20',
      author_name: 'Michał Chen',
      price: 280
    },
    {
      id: 10,
      authorId:2,
      name: 'Język i kultura japońska',
      short_desc: 'Zanurz się w języku japońskim i tradycjach kulturowych.',
      image_url: 'https://example.com/japonski-jezyk.jpg',
      last_updated: '2022-10-05',
      author_name: 'Yuki Tanaka',
      price: 160
    }
  ];
  
  const tutors = [
    {
      id: 1,
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:2,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:0,
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
    tutorId:3,
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
    tutorId:0,

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
    tutorId:1,
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
    tutorId:0,
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

  const users =[
    {
      id:0, username:"myUsername",password:"haslo",
      firstname: 'Olivia',
      lastname: 'Anderson',
      class:"teacher"
    },
    {
      id:1, username:"anotherUsername",password:"haslo",
      firstname: 'Dawid',
      lastname: 'Biały',
      class:"teacher"},
    {
      id:2, username:"teacher",password:"teacher",
      firstname: 'Emilia',
      lastname: 'Brąz',
      class:"teacher"
    },
    {
      id:3, username:"test",password:"test",
      firstname: 'Ryan',
      lastname: 'Williams',
      class:"teacher"
    },
    {
      id:4, username:"user",password:"user",
      firstname: 'Paweł',
      lastname: 'Czarny',
      class:"student"
    }
  ]

const courseContents = [
    {
      courseId: 1,
      title: "Podstawy JavaScript",
      chapters: [
        {
          title: "Wstęp",
          type: "video",
          content: "Witaj w kursie 'Podstawy JavaScript'! W tym wprowadzeniu omówimy, dlaczego JavaScript jest tak istotny w dzisiejszym świecie programowania. Dowiesz się, jakie są podstawowe koncepcje języka i jak można go używać do tworzenia dynamicznych stron internetowych."
        },
        {
          title: "Zmienne",
          type: "text",
          content: "W tym rozdziale zajmiemy się koncepcją zmiennych w JavaScript. Zmienne są fundamentem programowania, pozwalają przechowywać i manipulować danymi. Przejdziemy przez różne typy zmiennych, deklarację i przypisanie wartości, a także dowiemy się, jak używać zmiennych w praktyce."
        },
      ],
    },
    {
      courseId: 2,
      title: "Zaawansowane rozwijanie w React",
      chapters: [
        {
          title: "Rozpoczęcie",
          type: "video",
          content: "Witaj w kursie 'Zaawansowane rozwijanie w React'! W tym module omówimy, dlaczego React stał się jednym z najpopularniejszych frameworków do budowania interfejsów użytkownika. Przyjrzymy się, jak zacząć pracę z React, instalować go i tworzyć pierwsze komponenty."
        },
        {
          title: "Komponenty",
          type: "text",
          content: "Rozdział ten poświęcony jest głębszemu zrozumieniu roli komponentów w React. Dowiesz się, jak projektować modularne interfejsy, korzystając z komponentów, oraz jak przekazywać dane między nimi. Sprawdzimy także, jak używać stanu i efektów dla bardziej zaawansowanych funkcji."
        },
        {
          title: "Stan i efekty",
          type: "video",
          content: "W tym ostatnim module przejdziemy przez zaawansowane koncepcje, takie jak zarządzanie stanem i efektami w React. Będziesz gotów do tworzenia bardziej skomplikowanych i interaktywnych aplikacji przy użyciu tych zaawansowanych funkcji React."
        },
      ],
    },
    {
      courseId: 3,
      title: "Node.js dla początkujących",
      chapters: [
        {
          title: "Instalacja Node.js",
          type: "text",
          content: "W tym rozdziale przewodnika dowiesz się, jak zainstalować Node.js na swoim systemie. Node.js to środowisko uruchomieniowe JavaScript po stronie serwera, które umożliwia tworzenie skalowalnych i wydajnych aplikacji. Postępuj zgodnie z krokami, aby mieć gotowe środowisko do pracy z Node.js."
        },
        {
          title: "Tworzenie prostego serwera",
          type: "video",
          content: "Po zakończeniu instalacji Node.js przejdziemy do tworzenia prostego serwera. Będziesz krok po kroku tworzyć serwer, obsługiwać zapytania i odpowiadać na nie. To świetne wprowadzenie do programowania po stronie serwera przy użyciu JavaScript z pomocą Node.js."
        },
      ],
    },
    {
      courseId: 4,
      title: "Podstawy kuchni włoskiej",
      chapters: [
        {
          title: "Historia kuchni włoskiej",
          type: "text",
          content: "Rozpocznijmy naszą podróż od historii kuchni włoskiej. Poznasz fascynującą historię potraw, tradycji kulinarnej i wpływów, które kształtują charakterystyczny smak włoskiej kuchni."
        },
        {
          title: "Techniki gotowania",
          type: "video",
          content: "W tym module nauczymy się podstawowych technik gotowania używanych we włoskiej kuchni. Od przygotowania makaronu po sosy i pieczenie, odkryj tajniki, które uczynią Twoje dania niezapomnianymi."
        },
      ],
    },
    {
      courseId: 5,
      title: "Kurs intensywny języka hiszpańskiego",
      chapters: [
        {
          title: "Podstawy hiszpańskiego",
          type: "video",
          content: "Witaj w kursie intensywnego hiszpańskiego! Rozpoczniemy od podstaw, ucząc się podstawowych zwrotów, gramatyki i wymowy. To idealny punkt startowy dla tych, którzy chcą szybko opanować hiszpański."
        },
        {
          title: "Rozmowy i dialogi",
          type: "text",
          content: "Kolejny etap to praktyka rozmów i dialogów. Ćwiczenia, scenariusze i realistyczne sytuacje pomogą Ci zastosować swoją wiedzę w praktyce, rozwijając biegłość w mówieniu i słuchaniu."
        },
      ],
    },
    {
      courseId: 6,
      title: "Data Science z użyciem Pythona",
      chapters: [
        {
          title: "Wprowadzenie do Data Science",
          type: "video",
          content: "Rozpocznijmy naszą podróż po świecie analizy danych i machine learning. W tym module omówimy podstawowe pojęcia, narzędzia i zastosowania Data Science. Przygotuj się na fascynującą podróż w świat danych!"
        },
        {
          title: "Analiza danych w Pythonie",
          type: "text",
          content: "Poznamy podstawy analizy danych przy użyciu języka Python. Dowiesz się, jak korzystać z bibliotek takich jak Pandas i NumPy, aby manipulować danymi i wyciągać cenne informacje z zestawów danych."
        },
      ],
    },
    {
      courseId: 7,
      title: "Masterclass w fotografii",
      chapters: [
        {
          title: "Podstawy fotografii",
          type: "video",
          content: "Witaj w Masterclassie w fotografii! Zaczniemy od podstaw, omawiając kluczowe elementy kompozycji, światła i perspektywy. Ta sekcja przygotuje Cię do tworzenia pięknych i znaczących fotografii."
        },
        {
          title: "Edycja i retusz",
          type: "text",
          content: "Kiedy już opanujesz sztukę robienia zdjęć, przejdziemy do edycji i retuszu. Poznasz narzędzia i techniki, które pozwolą Ci poprawić jakość swoich fotografii, dodając im profesjonalny wygląd."
        },
      ],
    },
    {
      courseId: 8,
      title: "Francuska kuchnia: Od podstaw do gourmet",
      chapters: [
        {
          title: "Podstawy francuskiego gotowania",
          type: "text",
          content: "Rozpocznijmy naszą kulinarną podróż od podstaw francuskiego gotowania. Poznasz kluczowe składniki, techniki i narzędzia, które są niezbędne do przygotowania autentycznych dań francuskich."
        },
        {
          title: "Wykwintne potrawy",
          type: "video",
          content: "W kolejnym module skupimy się na przygotowywaniu wykwintnych potraw. Odkryj tajniki haute cuisine i naucz się, jak tworzyć eleganckie dania, które zachwycą nawet najbardziej wyrafinowane podniebienia."
        },
      ],
    },
    {
      courseId: 9,
      title: "Wprowadzenie do Machine Learning",
      chapters: [
        {
          title: "Początki w Machine Learning",
          type: "video",
          content: "Rozpocznijmy naszą podróż w świecie Machine Learning! W tym module omówimy podstawowe pojęcia, algorytmy i zastosowania Machine Learning. To idealne wprowadzenie dla tych, którzy chcą zanurzyć się w fascynujący świat sztucznej inteligencji."
        },
        {
          title: "Praktyczne zastosowania",
          type: "text",
          content: "Przejdziemy do praktycznych zastosowań Machine Learning. Zastosujemy algorytmy do analizy danych, prognozowania trendów i rozwiązania realnych problemów. Będziesz gotów na samodzielną eksplorację świata Machine Learning po zakończeniu tego kursu."
        },
      ],
    },
    {
      courseId: 10,
      title: "Język i kultura japońska",
      chapters: [
        {
          title: "Podstawy języka japońskiego",
          type: "text",
          content: "Rozpocznijmy od nauki podstaw języka japońskiego. Poznasz alfabet, podstawowe zwroty i zasady gramatyki, które pozwolą Ci porozumiewać się w japońskim środowisku."
        },
        {
          title: "Tradycje i zwyczaje",
          type: "video",
          content: "Odkryj bogatą kulturę Japonii, ucząc się o tradycjach, zwyczajach i ceremoniach. Ten moduł pomoże Ci zrozumieć głębsze konteksty kulturowe, które wpływają na japoński język i styl życia."
        },
      ],
    },
]

  import { openDB } from 'idb';
  export default async function initalizeDatabaseData() {
      const db = await openDB("db_",1,{  upgrade(db){
        let store = db.createObjectStore('users', {keyPath: 'id',autoIncrement: true,});
        store.createIndex("auth",["username","password"])
        store = db.createObjectStore('courses', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('author','authorId')
        store = db.createObjectStore('tutors', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('tutorId','tutorId')
        store = db.createObjectStore('courseContents', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('courseId','courseId')
      }});
  
      const tx = db.transaction('courses', 'readwrite')
      
      await Promise.all(courses.map((kurs) => 
      {
        return tx.store.add(kurs).then((result) => {
          console.debug("Item added successfully:", result);
        }).catch((result) => {
          console.debug("Item rejected:", result);
        })
      }).join(tx.done.catch((result) => {
          console.debug("Item rejected:", result);
        })))
    
  
        const tx2 = db.transaction('tutors', 'readwrite')
      
        await Promise.all(tutors.map((tutor) => 
        {
          return tx2.store.add(tutor).then((result) => {
            console.debug("Item added successfully:", result);
          }).catch((result) => {
            console.debug("Item rejected:", result);
          })
        }).join(tx2.done.catch((result) => {
            console.debug("Item rejected:", result);
          })))

          
        const tx3 = db.transaction('users', 'readwrite')
      
        await Promise.all(users.map((user) => 
          {
            return tx3.store.add(user).then((result) => {
              console.debug("Item added successfully:", result);
            }).catch((result) => {
              console.debug("Item rejected:", result);
            })
          }).join(tx3.done.catch((result) => {
              console.debug("Item rejected:", result);
        })))

        const tx4 = db.transaction('courseContents', 'readwrite')
      
        await Promise.all(courseContents.map((kurs) => 
        {
          return tx4.store.add(kurs).then((result) => {
            console.debug("Item added successfully:", result);
          }).catch((result) => {
            console.debug("Item rejected:", result);
          })
        }).join(tx4.done.catch((result) => {
            console.debug("Item rejected:", result);
          })))
      
    db.close()
  }
  