import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const messages = {
  en: {
    sidebar: {
      duplicateItemName: 'Item name should be unique'
    }
  },
  ko: {
    sidebar: {
      duplicateItemName: '아이템 이름이 중복되었습니다'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

const lang = navigator.language.split('-')[0]
i18n.global.locale = lang as 'en' | 'ko'

app.use(i18n)

app.mount('#app')
