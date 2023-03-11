<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogItem',
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <ul class="flex max-w-[50rem] gap-3">
    <div>
      <div class="flex font-semibold">
        <span class="relative">{{ month }}</span>
        <span class="text-lg">/</span>
        <span class="self-end">{{ day }}</span>
      </div>
    </div>
    <p>{{ body }}</p>
  </ul>
</template>
