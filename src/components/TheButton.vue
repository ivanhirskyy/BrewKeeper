<template>
  <button
    :type
    class="rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 transition-all focus-visible:outline-offset-2 flex items-center justify-center gap-1"
    :class="[variants[variant], sizes[size]]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant: 'primary' | 'secondary' | 'tertiary' | 'danger'
  size: 'xs' | 'sm' | 'md' | 'lg'
}>()

const variants = {
  primary: 'bg-amber-300 hover:bg-amber-200 text-amber-900 focus-visible:outline-amber-400',
  secondary: 'bg-gray-100 hover:bg-gray-300 text-gray-950 focus-visible:outline-gray-600 border border-gray-300',
  tertiary: 'bg-white hover:bg-amber-100 text-amber-800 focus-visible:outline-amber-600 border border-amber-300',
  danger: 'bg-red-100 hover:bg-red-200 text-red-800 focus-visible:outline-red-400 border border-red-200',
}

const sizes = {
  xs: 'px-[.8rem] py-[.4rem] text-xs',
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
</script>
