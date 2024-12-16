<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-900" v-if="label">
      {{label}}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="mt-1 relative flex items-center">
      <textarea :id rows="2" :name v-model="value" :required :placeholder autocomplete="given-name" class="block min-h-16 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-amber-600 sm:text-sm/6" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useId, type Component } from 'vue'

defineProps<{
  label?: string
  name: string
  placeholder?: string
  required?: boolean
}>()

const id = useId()

const value = defineModel<string | number>()
</script>
