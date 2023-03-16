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
      body: this.items[this.$route.query.hash as string]?.body
    }
  },
  methods: {
    createLog() {
      const date = new Date()
      const index =
        Object.keys(this.body).length == 0
          ? 0
          : Math.max(...Object.keys(this.body).map((key) => Number(key))) + 1
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
    },
    editLog(index: number) {
      this.$emit('edit', index)
    },
    removeLog(index: number) {
      this.$emit('remove', index)
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
  <ul v-if="body" class="flex flex-col items-center justify-center gap-5 p-10 grow">
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
      @edit="editLog"
      @remove="removeLog"
    />
    <button
      class="p-2 rounded-lg hover:bg-neutral-50 active:bg-neutral-100 text-neutral-400 hover:text-neutral-500"
      @click="createLog"
    >
      <PlusIcon class="w-6" />
    </button>
  </ul>
  <div v-else class="flex items-center justify-center h-screen grow">
    <div class="flex flex-col items-center gap-2" v-if="$route.query.hash">
      <img src="speech_bubble_error.svg" alt="Speech bubble that has error." class="w-64" />
      <h3 class="text-2xl font-semibold">There is no such item as...</h3>
      <p>We can't find that item. Sorry!</p>
    </div>
    <div class="flex flex-col items-center gap-2" v-else>
      <img src="plus_speech_bubble.svg" alt="Speech bubble that says plus icon." class="w-64" />
      <h3 class="text-2xl font-semibold">Nothing here...</h3>
      <p>Your logs will be here after creating some items.</p>
    </div>
  </div>
</template>
