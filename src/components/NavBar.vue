<template>
  <div class="sticky top-0 bg-white py-2 shadow-md z-10">
    <div class="container px-4 mx-auto flex items-center justify-between">
      <router-link to="/"
        ><img src="/logo.webp" alt="BrewKeeper" class="object-cover w-[150px] block" />
      </router-link>
      <div class="flex gap-4 items-center">
        <TheButton variant="primary" size="md" @click="modalStore.open(markRaw(AddBeerForm))"
          >Add Beer</TheButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '../stores/modal'
import { markRaw } from 'vue'

import AddBeerForm from './AddBeerForm.vue'
import TheButton from './TheButton.vue'
const modalStore = useModalStore()
</script>
