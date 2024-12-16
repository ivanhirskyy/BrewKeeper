<template>
  <form @submit.prevent="submit" class="flex flex-col gap-3 w-full">
    <h2 class="text-xl font-bold mb-2">Are you sure you want to delete this beer ?</h2>

    <div class="flex flex-col gap-1 mb-1">
      <h3 class="text-2xl font-bold mb-1 text-gray-800">{{ beer.name }}</h3>
      <h4 class="text-lg font-semibold text-gray-800" v-if="beer.description">{{ beer.description }}</h4>
    </div>

    <div class="grid grid-cols-2 w-full gap-2">
      <p class="text-sm font-semibold text-gray-800">Type: <span class="font-normal">{{ beer.type }}</span></p>
      <p class="text-sm font-semibold text-gray-800">ABV: <span class="font-normal">{{ beer.abv }}%</span></p>
      <p class="text-sm font-semibold text-gray-800">Brewery: <span class="font-normal">{{ beer.brewery }}</span></p>
      <p class="text-sm font-semibold text-gray-800">Year: <span class="font-normal">{{ beer.year }}</span></p>
    </div>

    <div class="mt-2 flex gap-2">
      <TheButton variant="secondary" type="button" size="md" @click="cancel">
        Cancel
      </TheButton>
      <TheButton variant="danger" size="md" type="submit">
        Delete
        <TrashIcon class="w-4 h-4 ml-1" />
      </TheButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { useBeerStore } from '../stores/beer'
import TheButton from './TheButton.vue'
import { useModalStore } from '../stores/modal'
import { TrashIcon } from '@heroicons/vue/24/solid'
import type { Beer } from '@/types'
import BeerDetails from './BeerDetails.vue'

const props = defineProps<{
  beer: Beer
}>()

const beerStore = useBeerStore()
const modalStore = useModalStore()

async function submit() {
  beerStore.deleteBeer(props.beer.id)
  modalStore.close()
}

function cancel() {
  modalStore.open(markRaw(BeerDetails), { beer: props.beer })
}
</script>
