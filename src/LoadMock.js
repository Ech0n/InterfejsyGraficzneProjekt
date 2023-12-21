
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

  import { openDB } from 'idb';
  export default async function initalizeDatabaseData() {
      const db = await openDB("db_",1,{  upgrade(db){
        let store = db.createObjectStore('users', {keyPath: 'id',autoIncrement: true,});
        store.createIndex("auth",["username","password"])
        store = db.createObjectStore('courses', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('author','authorId')
        store = db.createObjectStore('tutors', {keyPath: 'id',autoIncrement: true,});
        store.createIndex('tutorId','tutorId')
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
    db.close()
  }
  