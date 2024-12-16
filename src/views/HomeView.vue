<script lang="ts" setup>
import { useBeerStore } from '../stores/beer'
import BeerCard from '../components/BeerCard.vue'
import { ref, markRaw, useTemplateRef, onMounted, onBeforeUnmount } from 'vue'
import AddBeerForm from '@/components/AddBeerForm.vue'
import TheButton from '@/components/TheButton.vue'
import FormInput from '@/components/FormInput.vue'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { useModalStore } from '../stores/modal'
import FormSelect from '@/components/FormSelect.vue'

const store = useBeerStore()
const modalStore = useModalStore()

const showFilters = ref(false)
const filterBox = useTemplateRef('filterBox')

const handleClick = (e: MouseEvent) => {
  if (filterBox.value && !filterBox.value.contains(e.target as Node)) {
    showFilters.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClick)
})

</script>

<template>
  <div class="space-y-6">
    <div class="flex  gap-4 justify-between items-end" v-if="store.beers.length > 0">
      <FormInput
        type="text"
        v-model="store.search"
        name="search"
        :required="true"
        placeholder="Heineken"
        :icon="markRaw(MagnifyingGlassIcon)"
      />
      <div class="relative flex gap-2">
        <TheButton variant="secondary" size="md" @click="store.filterType = ''; store.filterYear = 0" v-if="store.filterType || store.filterYear">
          Reset Filters
        </TheButton>
        <TheButton variant="tertiary" size="md" @click.stop="showFilters = !showFilters">
          Filters
          <ChevronDownIcon class="w-4 h-4" />
        </TheButton>
        <Transition>
        <div v-show="showFilters" ref="filterBox" class="grid grid-cols-2 items-end gap-4 absolute top-full mt-2 right-0 bg-white z-10 sm:min-w-[300px] filter-box p-4 rounded-lg shadow-lg">
          <FormSelect label="Year" :options="[
            { value: 0, label: 'All' },
            ...store.availableYears.map((year) => ({
            value: year,
            label: year
          }))]"
          v-model="store.filterYear" />

          <FormSelect label="Type" :options="[
            { value: '', label: 'All' },
            ...store.availableTypes.map((type) => ({
            value: type,
            label: type
          }))]"
          v-model="store.filterType" />

          <FormSelect
          label="Sort by"
          :options="[
            { value: 'name', label: 'Name' },
            { value: 'year', label: 'Year' },
            { value: 'type', label: 'Type' },
            { value: 'brewery', label: 'Brewery' },
            { value: 'abv', label: 'ABV' },
            { value: 'rating', label: 'Rating' },
          ]"
          v-model="store.sortBy"
        />
        <FormSelect
          :options="[
            { value: 'asc', label: 'Ascending' },
            { value: 'desc', label: 'Descending' },
          ]"
          v-model="store.order"
        />
        </div>
      </Transition>
      </div>
    </div>
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <TransitionGroup name="list" >
        <BeerCard
          v-for="(beer, index) in store.filteredBeers"
          :key="index"
          :beer="beer"
          :index="index"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .filter-box{
    max-width: calc(100vw - 2rem);
    min-width: calc(100vw - 2rem);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
