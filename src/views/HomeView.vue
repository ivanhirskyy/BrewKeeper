<script lang="ts" setup>
import { useBeerStore } from '../stores/beer'
import BeerCard from '../components/BeerCard.vue'
import { ref, markRaw } from 'vue'
import AddBeerForm from '@/components/AddBeerForm.vue'
import TheButton from '@/components/TheButton.vue'
import FormInput from '@/components/FormInput.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { useModalStore } from '../stores/modal'
import FormSelect from '@/components/FormSelect.vue'

const store = useBeerStore()
const modalStore = useModalStore()
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-end" v-if="store.beers.length > 0">
      <FormInput
        type="text"
        v-model="store.search"
        :required="true"
        placeholder="Heineken"
        :icon="markRaw(MagnifyingGlassIcon)"
      />
      <div class="flex gap-2 items-end">
        <FormSelect
          label="Sort by"
          :options="[
            { value: 'name', label: 'Name' },
            { value: 'year', label: 'Year' },
            { value: 'type', label: 'Type' },
            { value: 'brewery', label: 'Brewery' },
            { value: 'abv', label: 'ABV' },
          ]"
          v-model="store.sortBy"
        />
        <FormSelect
          :options="[
            { value: 'asc', label: 'Asc' },
            { value: 'desc', label: 'Desc' },
          ]"
          v-model="store.order"
        />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <template v-if="store.beers.length === 0">
        <div class="flex flex-col items-center justify-center col-span-3">
          <p class="text-center text-lg font-semibold mb-4">No beers found.</p>
          <TheButton variant="primary" size="lg" @click="modalStore.open(markRaw(AddBeerForm))">
            Add Your First Beer
          </TheButton>
        </div>
      </template>

      <template v-if="store.filteredBeers.length === 0 && store.search.length > 0">
        <div class="flex flex-col items-center justify-center col-span-3">
          <p class="text-center text-lg font-semibold mb-4">
            No beers found, try a different filter.
          </p>
        </div>
      </template>

      <BeerCard
        v-for="(beer, index) in store.filteredBeers"
        :key="index"
        :beer="beer"
        :index="index"
      />
    </div>
  </div>
</template>
