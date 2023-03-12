<script lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    createItem(name: string) {
      this.items.push(name)
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
