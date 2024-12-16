import type { Beer } from '@/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useBeerStore = defineStore('beer', () => {
  const yearList = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => 1900 + i).reverse()

  const typeList = ['Ale', 'Lager', 'Stout', 'IPA', 'Pilsner', 'Porter', 'Sour', 'Wheat', 'Other'];

  const beers = ref<Beer[]>(JSON.parse(localStorage.getItem('beers') || '[]'))
  const search = ref('')
  const sortBy = ref('name') // name, type, year, brewery, abv, rating
  const order = ref('asc') // asc, desc
  const filterYear = ref<number>(0)
  const filterType = ref<string >('')

  const availableYears = computed(() => {
    return Array.from(new Set(beers.value.map((beer) => beer.year)))
  })

  const availableTypes = computed(() => {
    return Array.from(new Set(beers.value.map((beer) => beer.type)))
  });

  const filteredBeers = computed(() => {
    return beers.value
      .filter((beer) => {
        const matchesSearch =
          beer.name.toLowerCase().includes(search.value.toLowerCase()) ||
          beer.type.toLowerCase().includes(search.value.toLowerCase()) ||
          beer.year.toString().includes(search.value) ||
          beer.brewery.toLowerCase().includes(search.value.toLowerCase()) ||
          beer.abv.toString().includes(search.value)

        const matchesYear = filterYear.value ? beer.year === filterYear.value : true
        const matchesType = filterType.value ? beer.type.toLowerCase() === filterType.value.toLowerCase() : true

        return matchesSearch && matchesYear && matchesType
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
        } else if (sortBy.value === 'rating') {
          const aRating = a.reviews.reduce((acc, review) => acc + review.rating, 0) / a.reviews.length
          const bRating = b.reviews.reduce((acc, review) => acc + review.rating, 0) / b.reviews.length
          comparison = aRating - bRating
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
  function addReview(id: string, rating: number, comment: string, name: string) {
    const beer = beers.value.find((beer) => beer.id === id)
    if (beer) {
      beer.reviews.push({
        rating,
        comment,
        name,
      })
      localStorage.setItem('beers', JSON.stringify(beers.value))
    }
  }

  function resetFilters() {
    filterYear.value = 0
    filterType.value = ''
  }

  return {
    yearList,
    typeList,
    availableYears,
    availableTypes,
    filterYear,
    filterType,
    filteredBeers,
    resetFilters,
    beers,
    search,
    sortBy,
    order,
    addBeer,
    addReview,
    deleteBeer,
  }
})
