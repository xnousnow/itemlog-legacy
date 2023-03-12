<script lang="ts">
import { PlusIcon, CheckIcon } from '@heroicons/vue/24/solid'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array<string>,
      required: true
    }
  },
  data() {
    return {
      showNewItemInput: false,
      newItemName: ''
    }
  },
  methods: {
    createItem() {
      if (this.newItemName === '') return
      this.$emit('createItem', this.newItemName)
      this.newItemName = ''
      this.showNewItemInput = false
    }
  },
  components: {
    PlusIcon,
    CheckIcon
  }
})
</script>

<template>
  <aside class="flex flex-col h-screen gap-2 pt-8 pb-5 border-r select-none w-72">
    <div class="flex items-center justify-between ml-5 mr-3">
      <h1 class="text-3xl font-bold">ItemLog</h1>
      <button class="p-1 rounded-lg hover:bg-neutral-100 active:filter active:bg-neutral-200">
        <PlusIcon class="w-6 text-blue-600 cursor-pointer" @click="showNewItemInput = true" />
      </button>
    </div>
    <ul class="mx-3 cursor-pointer select-none">
      <li
        v-for="item in items"
        :key="item"
        class="p-2 pl-4 rounded-lg hover:bg-neutral-100 active:filter active:bg-neutral-200"
      >
        {{ item }}
      </li>
      <li class="flex gap-2" v-show="showNewItemInput">
        <input
          class="p-2 pl-4 transition duration-200 ease-in-out rounded-lg grow bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="New item"
          v-model="newItemName"
          @keyup.enter="createItem"
        />
        <button class="p-2 rounded-lg hover:bg-blue-50" @click="createItem">
          <CheckIcon class="w-6 text-blue-600 cursor-pointer" />
        </button>
      </li>
    </ul>
  </aside>
</template>

<style>
li.active {
  @apply bg-neutral-100 hover:bg-neutral-100;
}
</style>
