<template>
  <div class="sm:col-span-3">
    <label :for="id" class="block text-sm font-medium text-gray-900" v-if="label">{{
      label
    }}</label>
    <div class="mt-1 relative flex items-center">
      <input
        :type
        :placeholder
        :id
        v-model="value"
        :required
        autocomplete="given-name"
        :class="icon ? 'pr-8' : ''"
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-amber-400 sm:text-sm/6"
      />
      <component :is="icon" class="w-[16px] absolute right-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useId, type Component } from 'vue'

defineProps<{
  label?: string
  type: string
  placeholder?: string
  required?: boolean
  icon?: Component
}>()

const id = useId()

const value = defineModel()
</script>
