<script lang="ts">
import LogItem from '../components/LogItem.vue'
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
  props: {
    items: {
      type: Object as () => Record<string, Item>,
      required: true
    }
  },
  data() {
    return {
      item: this.items[this.$route.query.hash as string],
      body: this.items[this.$route.query.hash as string].body
    }
  },
  watch: {
    $route() {
      this.item = this.items[this.$route.query.hash as string]
      this.body = this.items[this.$route.query.hash as string].body
    }
  },
  components: {
    LogItem
  }
})
</script>

<template>
  <ul class="flex flex-col items-center justify-center gap-5 p-10 grow">
    <LogItem
      v-for="(log, hash) in body"
      :key="hash"
      :year="log.year"
      :month="log.month"
      :day="log.day"
      :body="log.text"
    />
  </ul>
</template>
