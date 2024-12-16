<template>
  <button
    :type
    class="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
}>()

const variants = {
  primary: 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
  secondary: 'bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600',
}

const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
</script>
