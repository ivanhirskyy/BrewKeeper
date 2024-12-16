<template>
  <div class="sm:col-span-3">
    <label :for="id" class="block text-sm font-medium text-gray-900">{{ label }}</label>
    <div class="mt-1">
      <input
        :type
        :placeholder
        :id
        v-model="value"
        :required
        autocomplete="given-name"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useId } from 'vue'

defineProps<{
  label: string
  type: string
  placeholder?: string
  required?: boolean
}>()

const id = useId()

const value = defineModel()
</script>
