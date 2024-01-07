import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import { createPinia } from 'pinia'
import BadgeDirective from 'primevue/badgedirective';
import "primeflex/primeflex.css";

/* FONT AWESOME ICONS */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faUser, faHome, faMessage,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faUser, faHome, faMessage,faShoppingCart)

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

import ToastService from 'primevue/toastservice';
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';
import VTooltip from 'v-tooltip';

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
    // .use(bootstrap)
    .use(router)
    .use(createPinia())
    .use(mdiVue, { icons: mdijs})
    .use(PrimeVue, {locale: prime_vue_locale, ripple: true}).directive('styleclass', StyleClass).directive('ripple', Ripple)
    .use(ToastService)
    .directive('badge', BadgeDirective)
    .use(VTooltip)
    .mount('#app');
