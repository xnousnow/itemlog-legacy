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
}
interface Item {
  name: string
  body?: Array<Log>
}

export default defineComponent({
  data() {
    return {
      items: {
        ab8cfd: {
          name: 'Item 1',
          body: [
            {
              year: 2023,
              month: 1,
              day: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            }
          ]
        },
        fdbe97: {
          name: 'Item 2',
          body: [
            {
              year: 2023,
              month: 1,
              day: 2,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            }
          ]
        },
        ab472c: {
          name: 'Item 3',
          body: [
            {
              year: 2023,
              month: 1,
              day: 3,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            }
          ]
        }
      } as Record<string, Item>
    }
  },
  methods: {
    createItem(name: string) {
      const id: string = sha256(name + new Date().toISOString()).toString()
      this.items[id] = { name }
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
    <SidebarMenu :items="items" @createItem="createItem" />
    <RouterView :items="items" />
  </div>
</template>
