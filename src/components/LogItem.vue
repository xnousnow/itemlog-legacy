<script lang="ts">
import { TrashIcon, CheckIcon, PencilSquareIcon, XMarkIcon } from '@heroicons/vue/20/solid'
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
    },
    xToDelete: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      editedMonth: 0,
      editedDay: 0,
      editedBody: ''
    }
  },
  mounted() {
    this.editedMonth = this.month
    this.editedDay = this.day
    this.editedBody = this.body
  },
  components: {
    TrashIcon,
    CheckIcon,
    PencilSquareIcon,
    XMarkIcon
  }
})
</script>

<template>
  <li
    class="flex max-w-[50rem] w-full group rounded-lg relative"
    :class="{ 'hover:bg-neutral-50': !editmode }"
  >
    <div class="flex w-full gap-3 p-3">
      <div>
        <div v-if="!editmode" class="flex font-semibold w-14">
          <span class="relative text-right w-7">{{ month }}</span>
          <span class="text-lg">/</span>
          <span class="self-end w-7">{{ day }}</span>
        </div>
        <div v-else class="flex font-semibold w-14">
          <input
            type="number"
            class="relative text-right w-7 grow focus:outline-none"
            v-model="editedMonth"
            :placeholder="(month as unknown as string)"
            inputmode="numeric"
            pattern="[12]?\d"
            minlength="1"
            maxlength="2"
          />
          <span class="text-lg">/</span>
          <input
            type="number"
            class="self-end w-7 grow focus:outline-none"
            v-model="editedDay"
            :placeholder="(day as unknown as string)"
            inputmode="numeric"
            pattern="[123]?\d"
            minlength="1"
            maxlength="2"
          />
        </div>
      </div>
      <p v-if="!editmode" class="grow">{{ body }}</p>
      <div v-else class="flex flex-col w-full gap-3">
        <textarea
          v-model="editedBody"
          class="w-full h-40 p-3 transition duration-200 ease-in-out rounded-lg resize-none min-h-32 grow focus:outline-none bg-neutral-100 scroll-p-3 focus:ring-2 focus:ring-blue-600 focus:bg-neutral-50"
        />
        <div class="flex self-end w-40 gap-2">
          <button
            class="flex items-center justify-center p-2 grow rounded-lg active:filter active:brightness-[0.98] bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            :title="$t('save')"
            @click="$emit('save', index, editedMonth, editedDay, editedBody)"
          >
            <CheckIcon class="w-6" />
          </button>
          <button
            v-if="xToDelete"
            class="flex items-center justify-center p-2 rounded-lg active:filter active:brightness-[0.98] bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-300"
            :title="$t('cancel')"
            @click="$emit('remove', index)"
          >
            <XMarkIcon class="w-6" />
          </button>
          <button
            v-else
            class="flex items-center justify-center p-2 rounded-lg active:filter active:brightness-[0.98] bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-300"
            :title="$t('cancel')"
            @click="$emit('save', index, month, day, body)"
          >
            <XMarkIcon class="w-6" />
          </button>
        </div>
      </div>
    </div>
    <div class="absolute w-2 h-[5.5rem] -right-2 group-hover:block hidden"></div>
    <button
      v-show="!editmode"
      class="absolute flex-col items-center justify-center hidden overflow-hidden rounded-lg -right-14 group-hover:flex text-neutral-400 group-hover:w-auto bg-neutral-50"
    >
      <div
        class="p-3 pb-2 active:bg-neutral-100 hover:text-neutral-500"
        @click="$emit('edit', index)"
      >
        <PencilSquareIcon class="w-6" />
      </div>
      <div
        class="p-3 pt-2 active:bg-neutral-100 hover:text-neutral-500"
        @click="$emit('remove', index)"
      >
        <TrashIcon class="w-6" />
      </div>
    </button>
  </li>
</template>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
