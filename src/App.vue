<script lang="ts">
import sha256 from 'crypto-js/sha256'

import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
import { defineComponent } from 'vue'

interface Log {
  year: number
  month: number
  day: number
  text: string
  editmode?: boolean
  xToDelete?: boolean
}
interface Item {
  name: string
  body: Record<string, Log>
}

export default defineComponent({
  data() {
    return {
      items: {} as Record<string, Item>
    }
  },
  methods: {
    createItem(name: string) {
      const id: string = sha256(name + new Date().toISOString()).toString()
      this.items[id] = {
        name,
        body: {}
      }
    },
    deleteItem(id: string) {
      console.log('it pushed')
      this.$router.push({ query: { hash: 'deleted' } })
      delete this.items[id]
    },
    changeLog(index: number, text: string) {
      this.items[this.$route.query.hash as string].body[index].text = text
      this.items[this.$route.query.hash as string].body[index].editmode = false
      this.items[this.$route.query.hash as string].body[index].xToDelete = false
    },
    editLog(index: number) {
      this.items[this.$route.query.hash as string].body[index].editmode = true
    },
    removeLog(index: number) {
      delete this.items[this.$route.query.hash as string].body[index]
    }
  },
  components: {
    RouterView,
    SidebarMenu
  }
})
</script>

<template>
  <div class="flex items-start w-screen">
    <SidebarMenu :items="items" @createItem="createItem" @delete="deleteItem" />
    <RouterView :items="items" @save="changeLog" @edit="editLog" @remove="removeLog" />
  </div>
</template>
