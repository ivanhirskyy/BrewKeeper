<template>
  <div class="sm:col-span-3">
    <label class="block text-sm font-medium text-gray-900" v-if="label" :for="id">{{
      label
    }} <span v-if="required" class="text-red-500">*</span></label>
    <div class="mt-1 grid grid-cols-1">
      <select
        :id
        autocomplete="country-name"
        v-model="value"
        :required
        class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-amber-400 sm:text-sm/6"
      >
        <option v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <svg
        class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fill-rule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useId } from 'vue'

defineProps<{
  label?: string
  options: { value: string | number; label: string | number }[]
  required?: boolean
}>()

const id = useId()

const value = defineModel()
</script>
