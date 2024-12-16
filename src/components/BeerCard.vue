<script lang="ts" setup>
import type { Beer } from '@/types'
defineProps<{
  beer: Beer
  index: number
}>()
</script>

<template>
  <div class="p-4 bg-white shadow-lg rounded-xl transform transition duration-500 hover:scale-105">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-gray-800">{{ beer.name }}</h3>
      <span class="text-sm text-gray-500">#{{ index + 1 }}</span>
    </div>
    <div class="bg-gray-100 p-4 rounded-lg shadow-inner">
      <p class="text-sm font-semibold text-gray-800">
        Type: <span class="font-normal">{{ beer.type }}</span>
      </p>
      <p class="text-sm font-semibold text-gray-800">
        ABV: <span class="font-normal">{{ beer.abv }}%</span>
      </p>
      <p class="text-sm font-semibold text-gray-800">
        Brewery: <span class="font-normal">{{ beer.brewery }}</span>
      </p>
      <p class="text-sm font-semibold text-gray-800">
        Year: <span class="font-normal">{{ beer.year }}</span>
      </p>
    </div>
  </div>
</template>
