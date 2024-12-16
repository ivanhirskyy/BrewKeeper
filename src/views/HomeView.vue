<script lang="ts" setup>
import { useBeerStore } from '../stores/beer'
import BeerCard from '../components/BeerCard.vue'
import TheModal from '../components/TheModal.vue'
import { ref } from 'vue'
import AddBeerForm from '@/components/AddBeerForm.vue'
import TheButton from '@/components/TheButton.vue'
import { useModalStore } from '../stores/modal'
const store = useBeerStore()
const modalStore = useModalStore()
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <template v-if="store.beers.length === 0">
      <p class="text-center col-span-3">
        No beers found.
        <TheButton variant="secondary" size="sm" @click="modalStore.open(AddBeerForm)"
          >Add One</TheButton
        >
      </p>
    </template>
    <template v-else>
      <BeerCard v-for="(beer, index) in store.beers" :key="index" :beer="beer" :index="index" />
    </template>
  </div>
</template>
