import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import './assets/styles/main.css'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: require('./locale/en.json'),
        es: require('./locale/es.json'),
    }
})

createApp(App)
    .use(VueSweetalert2)
    .use(i18n)
    .mount('#app')
