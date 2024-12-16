<template>
  <form @submit.prevent="submit" class="flex flex-col gap-3 w-full">
    <FormInput
      label="Beer Name"
      type="text"
      v-model="name"
      :required="true"
      placeholder="Heineken"
    />

    <FormSelect
      label="Year"
      :options="
        Array.from({ length: 2025 - 1900 }, (_, i) => ({
          value: i + 1900,
          label: i + 1900,
        }))
      "
      v-model="year"
      :required="true"
    />

    <FormSelect
      label="Type"
      :options="[
        { value: '', label: 'Select a type' },
        { value: 'Ale', label: 'Ale' },
        { value: 'Lager', label: 'Lager' },
        { value: 'Stout', label: 'Stout' },
        { value: 'IPA', label: 'IPA' },
        { value: 'Pilsner', label: 'Pilsner' },
        { value: 'Porter', label: 'Porter' },
        { value: 'Sour', label: 'Sour' },
        { value: 'Wheat', label: 'Wheat' },
        { value: 'Other', label: 'Other' },
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

    <div class="flex mt-2 block">
      <TheButton variant="primary" size="md" type="submit">Save</TheButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useBeerStore } from '../stores/beer'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import TheButton from './TheButton.vue'
import { useModalStore } from '../stores/modal'

const store = useBeerStore()

const name = ref('')
const type = ref('')
const year = ref(2024)
const brewery = ref('')
const abv = ref()

const modalStore = useModalStore()

function submit() {
  store.addBeer({
    name: name.value,
    type: type.value,
    year: year.value,
    brewery: brewery.value,
    abv: abv.value,
  })

  modalStore.close()
}
</script>
