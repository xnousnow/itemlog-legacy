import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = createI18n({
  fallbackLocale: 'en'
})

const lang = navigator.language.split('-')[0]
i18n.global.locale = lang

app.use(i18n)

app.mount('#app')
