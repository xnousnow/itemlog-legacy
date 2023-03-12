<script lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RouterView,
    SidebarMenu
  }
})
</script>

<template>
  <div class="flex items-start w-screen">
    <SidebarMenu />
    <RouterView />
  </div>
</template>
