import type { Beer } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const beerListRandom = [
  {
    name: 'Beer #1',
    type: 'IPA',
    year: 2021,
    brewery: 'Pinia Brewery',
    abv: 6.5,
  },
  {
    name: 'Beer #2',
    type: 'Stout',
    year: 2021,
    brewery: 'Pinia Brewery',
    abv: 5.5,
  },
  {
    name: 'Beer #3',
    type: 'Lager',
    year: 2021,
    brewery: 'Pinia Brewery',
    abv: 4.5,
  },
  {
    name: 'Beer #4',
    type: 'Wheat',
    year: 2024,
    brewery: 'Pinia Brewery',
    abv: 4.5,
  },
  {
    name: 'Beer #5',
    type: 'IPA',
    year: 2021,
    brewery: 'Pinia Brewery',
    abv: 6.5,
  },
  {
    name: 'Beer #6',
    type: 'Stout',
    year: 2021,
    brewery: 'Pinia Brewery',
    abv: 5.5,
  },
  {
    name: 'Beer #7',
    type: 'Lager',
    year: 2021,
    brewery: 'Pinia Brewery',
    abv: 4.5,
  },
  {
    name: 'Beer #8',
    type: 'Wheat',
    year: 2024,
    brewery: 'Pinia Brewery',
    abv: 4.5,
  },
]

export const useBeerStore = defineStore('beer', () => {
  const beers = ref<Beer[]>(JSON.parse(localStorage.getItem('beers') || '[]'))

  /* export interface Beer {
    name: string
    type: string
    year: number
    brewery: string
    abv: number
    notes?: string
  } */

  function addBeer(beer: Beer) {
    beers.value.push(beer)
    localStorage.setItem('beers', JSON.stringify(beers.value))
  }
  function deleteBeer(index: number) {
    beers.value.splice(index, 1)
    localStorage.setItem('beers', JSON.stringify(beers.value))
  }
  function addRandomBeer() {
    const randomBeer = beerListRandom[Math.floor(Math.random() * beerListRandom.length)]
    beers.value.push(randomBeer)
    localStorage.setItem('beers', JSON.stringify(beers.value))
  }

  return {
    beers,
    addBeer,
    deleteBeer,
    addRandomBeer,
  }
})
