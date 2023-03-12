<script lang="ts">
import sha256 from 'crypto-js/sha256'

import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: {
        ab8cfd: {
          name: 'Item 1'
        },
        fdbe97: {
          name: 'Item 2'
        },
        ab472c: {
          name: 'Item 3'
        }
      } as Record<string, { name: string }>
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
    <RouterView />
  </div>
</template>
