
const courses = [
    {
      id: 1,
      authorId:0,
      name: 'Podstawy JavaScript',
      short_desc: 'Naucz się podstaw programowania w JavaScript.',
      image_url: 'data:image/png;base64,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',
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
      price: 50,
      level: 'studia'
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
      price: 60,
      level: 'studia'
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
      price: 45,
      level: 'studia'
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
      price: 55,
      level: 'studia'
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
      price: 50,
      level: 'srednia'
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
      price: 60,
      level: 'studia'
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
      price: 55,
      level: 'studia'
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
      price: 45,
      level: 'podstawowa'
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
      price: 50,
      level: 'None'
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
      price: 60,
      level: 'None'
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
      price: 55,
      level: 'studia'
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
      price: 50,
      level: 'srednia'
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
      price: 55,
      level: 'studia'
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
      price: 50,
      level: 'podstawowa'
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
      price: 60,
      level: 'srednie'
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
      price: 45,
      level: 'None'
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
      price: 55,
      level: 'None'
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
      price: 50,
      level: 'None'
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
      price: 60,
      level: 'None'
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
      price: 45,
      level: 'studia'
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
      title: 'Podstawy Javascript',
      chapters: '[{"key":"0","label":"Wprowadzenie do kursu","data":"Documents Folder","icon":"pi pi-fw pi-inbox","children":[{"key":"0-0","label":"Witaj w kursie \\"Podstawy JavaScript\\"!","data":"<h2>Wprowadzenie do kursu stanowi pierwszy podrozdział, który pełni rolę powitalną i orientacyjną dla uczestników. </h2><p>Głównym celem tego podrozdziału jest zapoznanie z kursu oraz przedstawienie głównych koncepcji i celów nauki.</p>","type":"text","icon":"pi pi-fw pi-file-o"}]}]',
      authorId: 3
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
        store.createIndex("findUsername","username")
        store = db.createObjectStore('courses', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('author','authorId')
        store = db.createObjectStore('tutors', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('tutorId','tutorId')
        store = db.createObjectStore('courseContents', {keyPath: 'courseId'});
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
  