<script lang="ts" setup>
import type { Beer } from '@/types'
defineProps<{
  beer: Beer
  index: number
}>()
</script>

<template>
  <div class="p-4 bg-white shadow-md rounded-lg">
    <h3>{{ beer.name }}</h3>
    <p>Type: {{ beer.type }}</p>
    <p>ABV: {{ beer.abv }}%</p>
  </div>
</template>
