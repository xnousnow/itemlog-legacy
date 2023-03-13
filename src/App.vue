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
}
interface Item {
  name: string
  body: Record<string, Log>
}

export default defineComponent({
  data() {
    return {
      items: {
        ab8cfd: {
          name: 'Item 1',
          body: {
            0: {
              year: 2023,
              month: 1,
              day: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            },
            1: {
              year: 2023,
              month: 2,
              day: 13,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            },
            3: {
              year: 2023,
              month: 2,
              day: 15,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            },
            4: {
              year: 2023,
              month: 2,
              day: 27,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            }
          }
        },
        fdbe97: {
          name: 'Item 2',
          body: {
            0: {
              year: 2023,
              month: 1,
              day: 3,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            },
            1: {
              year: 2023,
              month: 3,
              day: 9,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            }
          }
        },
        ab472c: {
          name: 'Item 3',
          body: {
            1: {
              year: 2023,
              month: 1,
              day: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            },
            3: {
              year: 2023,
              month: 1,
              day: 24,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            },
            4: {
              year: 2023,
              month: 2,
              day: 3,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel.'
            }
          }
        }
      } as Record<string, Item>
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
    changeItem(index: number, text: string) {
      this.items[this.$route.query.hash as string].body[index].text = text
      this.items[this.$route.query.hash as string].body[index].editmode = false
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
    <RouterView :items="items" @save="changeItem" />
  </div>
</template>
