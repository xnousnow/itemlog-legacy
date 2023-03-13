<script lang="ts">
import LogItem from '../components/LogItem.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
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
  methods: {
    createLog() {
      const date = new Date()
      const index = Math.max(...Object.keys(this.body).map((key) => Number(key))) + 1
      this.body[index] = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        text: '',
        editmode: true
      }
    },
    saveLog(index: number, text: string) {
      this.$emit('save', index, text)
    }
  },
  watch: {
    $route() {
      this.item = this.items[this.$route.query.hash as string]
      this.body = this.items[this.$route.query.hash as string].body
    }
  },
  components: {
    LogItem,
    PlusIcon
  }
})
</script>

<template>
  <ul class="flex flex-col items-center justify-center gap-5 p-10 grow">
    <LogItem
      v-for="(log, index) in body"
      :index="parseInt(index)"
      :key="index"
      :year="log.year"
      :month="log.month"
      :day="log.day"
      :body="log.text"
      :editmode="log.editmode"
      @save="saveLog"
    />
    <button
      class="p-2 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 text-neutral-400 hover:text-neutral-500"
      @click="createLog"
    >
      <PlusIcon class="w-6" />
    </button>
  </ul>
</template>
