import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

/* FONT AWESOME ICONS */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faUser, faHome, faMessage } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faUser, faHome, faMessage)

// Import mdi for more icons
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

createApp(App).use(router, bootstrap).component('font-awesome-icon', FontAwesomeIcon).use(mdiVue, { icons: mdijs}).mount('#app')
