<template>
  <form @submit.prevent="submit" class="flex flex-col gap-3 w-full">
    <h2 class="text-2xl font-bold mb-2">Edit Beer</h2>
    <FormInput
      label="Beer Name"
      type="text"
      v-model="name"
      :required="true"
      placeholder="Heineken"
    />

    <FormTextarea
      label="Description"
      v-model="description"
      placeholder="A light, crisp, and refreshing beer."
    />

    <FormSelect
      label="Year"
      :options="
        beerStore.yearList.map((year) => ({
          value: year,
          label: year
        }))
        "
      v-model="year"
      :required="true"
    />

    <FormSelect
      label="Type"
      :options="[
        { value: '', label: 'Select a type' },
        ...beerStore.typeList.map((type) => ({
          value: type,
          label: type
        })),
      ]"
      :required="true"
      v-model="type"
    />
    <FormInput
      label="Brewery"
      type="text"
      v-model="brewery"
      placeholder="The Haystack Brewery"
      :required="true"
    />

    <FormInput label="ABV" type="text" v-model="abv" placeholder="5.5" :required="true" />

    <div class="mt-2 flex gap-2">
      <TheButton variant="secondary" type="button" size="md" @click="cancel">
        Cancel
      </TheButton>
      <TheButton variant="primary" size="md" type="submit">
        Edit
        <PencilSquareIcon class="w-4 h-4 ml-1" />
      </TheButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref, useId, markRaw, nextTick } from 'vue'
import { useBeerStore } from '../stores/beer'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import TheButton from './TheButton.vue'
import { useModalStore } from '../stores/modal'
import { PencilSquareIcon } from '@heroicons/vue/24/solid'
import FormTextarea from './FormTextarea.vue'
import type { Beer } from '@/types'
import BeerDetails from './BeerDetails.vue'

const props = defineProps<{
  beer: Beer
}>()

const beerStore = useBeerStore()

const name = ref(props.beer.name)
const description = ref(props.beer.description || '')
const type = ref(props.beer.type)
const year = ref(props.beer.year)
const brewery = ref(props.beer.brewery)
const abv = ref(props.beer.abv)

const modalStore = useModalStore()

async function submit() {
  const newBeer = {
    name: name.value,
    description: description.value,
    type: type.value,
    year: year.value,
    brewery: brewery.value,
    abv: abv.value,
  }
  beerStore.updateBeer(props.beer.id, {...newBeer})
  modalStore.open(markRaw(BeerDetails), { beer: Object.assign({}, props.beer, newBeer) })
}

function cancel() {
  modalStore.open(markRaw(BeerDetails), { beer: props.beer })
}
</script>
