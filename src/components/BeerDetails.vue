<script lang="ts" setup>
import type { Beer } from '@/types';
import { computed, defineProps, ref, markRaw } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import TheButton from './TheButton.vue';
import FormTextarea from './FormTextarea.vue';
import { useBeerStore } from '../stores/beer'
import { useModalStore } from '../stores/modal'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { UserIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import FormInput from './FormInput.vue';
import EditBeerForm from './EditBeerForm.vue';
import DeleteBeer from './DeleteBeer.vue';

const props = defineProps<{
  beer: Beer
}>()

const showReviewFields = ref(false);
const rating = ref(5);
const review = ref('');
const name = ref('');

const beerStore = useBeerStore();
const modalStore = useModalStore();

const submitReview = () => {
  beerStore.addReview(props.beer.id, rating.value, review.value, name.value);
  closeReview();
}

const closeReview = () => {
  showReviewFields.value = false;
  rating.value = 5;
  review.value = '';
}

const toggleReview = () => {
  if (showReviewFields.value) {
    closeReview();
  } else {
    showReviewFields.value = true;
  }
}

const averageRating = computed(() => {
  return props.beer.reviews.length > 0
    ? Number((props.beer.reviews.reduce((acc, review) => acc + review.rating, 0) / props.beer.reviews.length).toFixed(1))
    : 0;
});
</script>

<template>
  <div class="flex flex-col gap-2 items-start">
    <div class="mb-3">
      <div class="flex gap-4 items-center">
        <h3 class="text-2xl font-bold mb-1 text-gray-800">{{ beer.name }}</h3>
        <TheButton variant="primary" size="xs" @click="modalStore.open(markRaw(EditBeerForm), {beer})">
          Edit
          <PencilSquareIcon class="w-4 h-4 ml-1" />
        </TheButton>
        <TheButton variant="danger" size="xs" @click="modalStore.open(markRaw(DeleteBeer), {beer})">
          Delete
          <TrashIcon class="w-4 h-4 ml-1" />
        </TheButton>
      </div>
      <h4 class="text-lg font-semibold text-gray-800" v-if="beer.description">{{ beer.description }}</h4>
    </div>
    <div class="grid grid-cols-2 w-full gap-2">
      <p class="text-sm font-semibold text-gray-800">Type: <span class="font-normal">{{ beer.type }}</span></p>
      <p class="text-sm font-semibold text-gray-800">ABV: <span class="font-normal">{{ beer.abv }}%</span></p>
      <p class="text-sm font-semibold text-gray-800">Brewery: <span class="font-normal">{{ beer.brewery }}</span></p>
      <p class="text-sm font-semibold text-gray-800">Year: <span class="font-normal">{{ beer.year }}</span></p>
    </div>

    <template v-if="beer.reviews.length > 0">
      <p class="text-sm font-semibold mt-4 text-gray-800">Reviews: <span class="font-normal">{{ averageRating }}/5</span></p>
      <div class="space-y-2 border p-2 rounded-md w-full">
        <div v-for="(review, index) in beer.reviews" :key="index" class="flex flex-col gap-1 p-2" :class="{'border-b': index !== beer.reviews.length - 1}">
        <p class="text-sm font-semibold text-gray-800 flex items-center gap-1" v-if="review.name">Name: <UserIcon class="w-3 h-3" /> {{review.name}}</p>
        <div class="flex items-center">
          <StarIcon v-for="star in [0, 1, 2, 3, 4]" :key="star" :class="[review.rating >= star ? 'text-amber-500' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
        </div>

        <p class="text-sm font-regular text-gray-800">Review: <span class="font-semibold">{{ review.comment }}</span></p>
        </div>
      </div>
    </template>


    <TheButton class="mt-2" variant="tertiary" size="sm" @click="toggleReview">
      Add Review
    </TheButton>

    <Transition>
      <template v-if="showReviewFields">
        <div class="border p-4 rounded-lg mt-2 w-full">
          <form @submit.prevent="submitReview" class="flex flex-col gap-3 items-start">
            <div>
              <p class="text-sm font-semibold text-gray-800">Rate this beer:</p>
              <div class="flex mt-1">
                <StarIcon v-for="star in [0, 1, 2, 3, 4]" :key="star" :class="[rating >= star ? 'text-amber-500' : 'text-gray-200', 'size-5 shrink-0 cursor-pointer transition-all']" aria-hidden="true" @click="rating = star" />
              </div>
            </div>
              <FormInput class="w-full" type="text" label="Name" v-model="name" placeholder="John Doe" required />
              <FormTextarea class="w-full" label="Comment" v-model="review" placeholder="This beer is amazing!" required />
              <div class="flex gap-2 mt-2">
                <TheButton variant="secondary" type="button" size="sm" @click="closeReview();">
                  Cancel
                </TheButton>
                <TheButton variant="primary" type="submit" size="sm">
                  <PlusIcon class="w-4 h-4" />
                  Add
                </TheButton>
            </div>
          </form>
        </div>
      </template>
    </Transition>



  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
