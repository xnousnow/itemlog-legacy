<script lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PlusIcon
  }
})
</script>

<template>
  <aside class="flex flex-col h-screen gap-2 pt-8 pb-5 border-r select-none w-72">
    <div class="flex items-center justify-between ml-5 mr-3">
      <h1 class="text-3xl font-bold">ItemLog</h1>
      <button class="p-1 rounded-lg hover:bg-neutral-100 active:filter active:brightness-[0.98]">
        <PlusIcon class="w-6 text-blue-600 cursor-pointer" />
      </button>
    </div>
    <ul class="mx-3 cursor-pointer select-none">
      <li
        v-for="i in 10"
        :key="i"
        class="p-2 pl-4 rounded-lg hover:bg-neutral-100 active:filter active:brightness-[0.98]"
        :class="{ active: i === 3 }"
      >
        Item {{ i }}
      </li>
    </ul>
  </aside>
</template>

<style>
li.active {
  @apply bg-neutral-100 hover:bg-neutral-100 brightness-[0.98];
}
</style>
