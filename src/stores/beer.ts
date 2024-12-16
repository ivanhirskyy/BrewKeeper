import type { Beer } from '@/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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
  const search = ref('')
  const sortBy = ref('name') // name, type, year, brewery, abv
  const order = ref('asc') // asc, desc

  /* export interface Beer {
    name: string
    type: string
    year: number
    brewery: string
    abv: number
    notes?: string
  } */

  const filteredBeers = computed(() => {
    return beers.value
      .filter((beer) => {
        return (
          beer.name.toLowerCase().includes(search.value.toLowerCase()) ||
          beer.type.toLowerCase().includes(search.value.toLowerCase()) ||
          beer.year.toString().includes(search.value) ||
          beer.brewery.toLowerCase().includes(search.value.toLowerCase()) ||
          beer.abv.toString().includes(search.value)
        )
      })
      .sort((a, b) => {
        let comparison = 0
        if (sortBy.value === 'name') {
          comparison = a.name.localeCompare(b.name)
        } else if (sortBy.value === 'type') {
          comparison = a.type.localeCompare(b.type)
        } else if (sortBy.value === 'year') {
          comparison = a.year - b.year
        } else if (sortBy.value === 'brewery') {
          comparison = a.brewery.localeCompare(b.brewery)
        } else if (sortBy.value === 'abv') {
          comparison = a.abv - b.abv
        }
        return order.value === 'asc' ? comparison : -comparison
      })
  })

  function addBeer(beer: Beer) {
    beers.value.push(beer)
    localStorage.setItem('beers', JSON.stringify(beers.value))
  }
  function deleteBeer(index: number) {
    beers.value.splice(index, 1)
    localStorage.setItem('beers', JSON.stringify(beers.value))
  }
  function addReview(id: string, rating: number, comment: string) {
    const beer = beers.value.find((beer) => beer.id === id)
    if (beer) {
      beer.reviews.push({
        rating,
        comment,
      })
      localStorage.setItem('beers', JSON.stringify(beers.value))
    }
  }

  function getAverageRating(id: string) {
    const beer = beers.value.find((beer) => beer.id === id)
    console.log(beer)
    if (beer) {
      console.log(beer.reviews)
      const sum = beer.reviews.reduce((acc, review) => acc + review.rating, 0)
      return sum / beer.reviews.length
    }
    return 0
  }
  function addRandomBeer() {
    const randomBeer = beerListRandom[Math.floor(Math.random() * beerListRandom.length)]
    beers.value.push(randomBeer)
    localStorage.setItem('beers', JSON.stringify(beers.value))
  }

  return {
    filteredBeers,
    beers,
    search,
    sortBy,
    order,
    addBeer,
    addReview,
    getAverageRating,
    deleteBeer,
    addRandomBeer,
  }
})
