<template>
  <form @submit.prevent="submit" class="flex flex-col gap-3 w-full">
    <h2 class="text-2xl font-bold mb-2">Add Beer</h2>
    <FormInput
      label="Beer Name"
      name="name"
      type="text"
      v-model="name"
      :required="true"
      placeholder="Heineken"
    />

    <FormTextarea
      label="Description"
      name="description"
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
      name="brewery"
      type="text"
      v-model="brewery"
      placeholder="The Haystack Brewery"
      :required="true"
    />

    <FormInput label="ABV" name="abv" type="text" v-model="abv" placeholder="5.5" :required="true" />

    <div class="mt-2 block">
      <TheButton variant="primary" size="md" type="submit">
        <PlusIcon class="w-4 h-4" />
        Add</TheButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref, useId } from 'vue'
import { useBeerStore } from '../stores/beer'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import TheButton from './TheButton.vue'
import { useModalStore } from '../stores/modal'
import { PlusIcon } from '@heroicons/vue/24/outline'
import FormTextarea from './FormTextarea.vue'

const beerStore = useBeerStore()

const name = ref('')
const description = ref('')
const type = ref('')
const year = ref(2024)
const brewery = ref('')
const abv = ref()

const modalStore = useModalStore()

function submit() {
  beerStore.addBeer({
    id: useId(),
    name: name.value,
    description: description.value,
    type: type.value,
    year: year.value,
    brewery: brewery.value,
    abv: abv.value,
    reviews: [],
  })

  modalStore.close()
}
</script>
