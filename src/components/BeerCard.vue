<script lang="ts" setup>
import { computed, markRaw } from 'vue'
import type { Beer } from '@/types'
import { useModalStore } from '../stores/modal'
import TheButton from './TheButton.vue';
import BeerDetails from './BeerDetails.vue';
import { StarIcon } from '@heroicons/vue/20/solid'

const modalStore = useModalStore()

const props = defineProps<{
  beer: Beer
  index: number
}>()

const averageRating = computed(() => {
  return props.beer.reviews.length > 0
    ? Number((props.beer.reviews.reduce((acc, review) => acc + review.rating, 0) / props.beer.reviews.length).toFixed(1))
    : 0;
});
</script>

<template>
  <div class="p-4 bg-white shadow-lg rounded-xl transform transition duration-500 hover:scale-[1.02] space-y-2">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-gray-800">{{ beer.name }}</h3>
      <span class="text-sm text-gray-500">#{{ index + 1 }}</span>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg shadow-inner">
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
    <div class="flex justify-between">
      <TheButton variant="tertiary" size="md" @click="modalStore.open(markRaw(BeerDetails), {beer})">
        View Details
      </TheButton>
      <div v-if="beer.reviews.length > 0" class="flex items-center">
        <div class="flex items-center" :title="averageRating.toString() + '/5'">
          <StarIcon v-for="star in [0, 1, 2, 3, 4]" :key="star" :class="[averageRating >= star ? 'text-amber-500' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
        </div>
      </div>
    </div>

  </div>
</template>
