import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/brands.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@fortawesome/fontawesome-free/scss/v4-shims.scss'

import '@/assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
