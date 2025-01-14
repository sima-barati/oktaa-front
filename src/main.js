import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import repositoryFactory from "./repositories/RepositoryFactory.js";
import {createVuetify} from 'vuetify'

const vuetify = new createVuetify({})

const app = createApp(App)
app.provide("repositories", repositoryFactory)
app.use(router)
app.use(vuetify)
app.mount('#app')
