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

import PrimeVue from 'primevue/config';
// theme
import 'primevue/resources/themes/lara-light-green/theme.css';
let prime_vue_locale = {
    dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    dayNamesShort: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sob"],
    dayNamesMin: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sob"],
    monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
    today: 'Dziś',
    weekHeader: 'Tydz',
    firstDayOfWeek: 1,
    dateFormat: 'mm/dd/yy',
}
createApp(App).use(router, bootstrap).component('font-awesome-icon', FontAwesomeIcon)
    .use(mdiVue, { icons: mdijs}).use(PrimeVue, {locale: prime_vue_locale}).mount('#app');
