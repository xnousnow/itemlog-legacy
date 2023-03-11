<script lang="ts">
import { RouterView } from 'vue-router'
import ItemMenu from './components/SidebarMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RouterView,
    ItemMenu
  }
})
</script>

<template>
  <div class="flex w-screen">
    <ItemMenu />
    <RouterView />
  </div>
</template>
