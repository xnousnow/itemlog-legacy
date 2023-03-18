<script lang="ts">
import { PlusIcon, CheckIcon } from '@heroicons/vue/24/solid'
import { TrashIcon } from '@heroicons/vue/20/solid'
import { defineComponent } from 'vue'

interface Log {
  year: number
  month: number
  day: number
  text: string
  editmode?: boolean
  xToDelete?: boolean
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
      showNewItemInput: false,
      newItemName: '',
      isItemNameDuplicate: false
    }
  },
  methods: {
    createItem() {
      if (this.isItemNameDuplicate) return
      if (this.newItemName.replace(/[\u200B-\u200D\uFEFF ]/g, '') != '')
        this.$emit('createItem', this.newItemName)
      this.newItemName = ''
      this.showNewItemInput = false
    }
  },
  watch: {
    newItemName() {
      const items = this.items
      const name = this.newItemName.toLowerCase().replace(/[\u200B-\u200D\uFEFF ]/g, '')
      let isItemNameDuplicate = false
      Object.keys(items).forEach((key: string | number) => {
        if (items[key].name.toLowerCase().replace(/[\u200B-\u200D\uFEFF ]/g, '') == name) {
          isItemNameDuplicate = true
          return
        }
      })
      this.isItemNameDuplicate = isItemNameDuplicate
    }
  },
  components: {
    PlusIcon,
    TrashIcon,
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
        v-for="(item, key) in items"
        :key="key"
        class="relative flex p-2 pl-4 rounded-lg hover:bg-neutral-100"
        :class="{ active: $route.query.hash == key }"
        @click="$router.push({ query: { hash: key } })"
      >
        <span class="grow">
          {{ item.name }}
        </span>
        <button class="absolute hover:text-neutral-500 text-neutral-400 right-2">
          <TrashIcon class="w-5" />
        </button>
      </li>
      <li v-show="showNewItemInput">
        <div class="flex gap-2">
          <input
            class="p-2 pl-4 transition duration-200 ease-in-out rounded-lg grow bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            :class="{ 'ring-2 ring-red-500 focus:ring-red-500': isItemNameDuplicate }"
            placeholder="New item"
            v-model="newItemName"
            @keyup.enter="createItem"
          />
          <button class="p-2 rounded-lg hover:bg-blue-50" @click="createItem">
            <CheckIcon class="w-6 text-blue-600 cursor-pointer" />
          </button>
        </div>
        <span class="ml-2 text-xs text-red-600 cursor-default" v-show="isItemNameDuplicate">
          Item name must be unique
        </span>
      </li>
    </ul>
  </aside>
</template>

<style>
a.active {
  @apply bg-neutral-100 hover:bg-neutral-100;
}
</style>
