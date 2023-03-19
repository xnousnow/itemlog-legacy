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
      newItemPlaceholder: 'New item',
      duplicateItemName: 'Item name should be unique'
    },
    itemnotice: {
      deleted: {
        title: 'Item successfully deleted!',
        message: 'You will see an error when you try to access this item later.'
      },
      notFound: {
        title: 'There is no such item as...',
        message: "We can't find that item. Sorry!"
      },
      noData: {
        title: 'Nothing here...',
        message: 'Your logs will be here after creating some items.'
      }
    },
    save: 'Save',
    cancel: 'Cancel'
  },
  ko: {
    sidebar: {
      newItemPlaceholder: '새 아이템',
      duplicateItemName: '아이템 이름이 중복되었습니다'
    },
    itemnotice: {
      deleted: {
        title: '삭제 완료!',
        message: '나중에 다시 와도 삭제 전의 내용을 볼 수는 없답니다.'
      },
      notFound: {
        title: '그런 아이템은 찾을 수 없네요...',
        message: '존재하지 않는 아이템이에요. 죄송합니다!'
      },
      noData: {
        title: '아직 아무것도 없어요',
        message: '아이템을 만들어 시작하세요!'
      }
    },
    save: '저장',
    cancel: '취소'
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
