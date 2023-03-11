<script lang="ts">
import { RouterView } from 'vue-router'
import ItemMenu from './components/ItemMenu.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RouterView,
    ItemMenu
  }
})
</script>

<template>
  <ItemMenu />
  <RouterView />
</template>
