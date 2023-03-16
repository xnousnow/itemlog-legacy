<script lang="ts">
import { TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogItem',
  props: {
    index: {
      type: Number,
      required: true
    },
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
    },
    editmode: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      editedBody: ''
    }
  },
  mounted() {
    this.editedBody = this.body
  },
  components: {
    TrashIcon,
    CheckIcon,
    XMarkIcon
  }
})
</script>

<template>
  <li class="flex max-w-[50rem] w-full gap-3 group">
    <div>
      <div class="flex font-semibold">
        <span class="relative">{{ month }}</span>
        <span class="text-lg">/</span>
        <span class="self-end">{{ day }}</span>
      </div>
    </div>
    <p v-if="!editmode" class="grow">{{ body }}</p>
    <div v-else class="flex flex-col w-full gap-2">
      <textarea
        v-model="editedBody"
        class="w-full h-40 p-3 transition duration-200 ease-in-out rounded-lg resize-none min-h-32 grow focus:outline-none bg-neutral-100 scroll-p-3 focus:ring-2 focus:ring-blue-600 focus:bg-neutral-50"
      />
      <div class="flex self-end w-40 gap-2">
        <button
          class="flex items-center justify-center p-2 grow rounded-lg active:filter active:brightness-[0.98] bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          title="Save"
          @click="$emit('save', index, editedBody)"
        >
          <CheckIcon class="w-6" />
        </button>
        <button
          class="flex items-center justify-center p-2 rounded-lg active:filter active:brightness-[0.98] bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-300"
          title="Cancel"
          @click="$emit('remove', index)"
        >
          <XMarkIcon class="w-6" />
        </button>
      </div>
    </div>
    <button
      v-show="!editmode"
      class="flex items-center justify-center invisible w-10 h-10 p-2 rounded-lg -right-5 group-hover:visible bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-100 text-neutral-400 hover:text-neutral-500"
      @click="$emit('remove', index)"
    >
      <TrashIcon class="w-6" />
    </button>
  </li>
</template>
