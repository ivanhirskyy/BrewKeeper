<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-900" v-if="label">{{
      label
    }} <span v-if="required" class="text-red-500">*</span></label>
    <div class="mt-1 relative flex items-center">
      <input
        :type
        :placeholder
        :id
        :name
        v-model="value"
        :required
        autocomplete="off"
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
  name: string
  type: string
  placeholder?: string
  required?: boolean
  icon?: Component
}>()

const id = useId()

const value = defineModel()
</script>
