<script lang="ts">
import LogItem from '../components/LogItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LogItem
  }
})
</script>

<template>
  <ul class="flex flex-col items-center justify-center gap-5 p-10 grow">
    <LogItem
      v-for="i in 5"
      :key="i"
      :year="2023"
      :month="6 - i"
      :day="1 + i"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel."
    />
    <LogItem
      :year="2023"
      :month="7"
      :day="5"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet dui porta, accumsan turpis sed, rhoncus urna. Aliquam porta consectetur sapien, vel sagittis turpis molestie vel."
      :editmode="true"
    />
  </ul>
</template>
