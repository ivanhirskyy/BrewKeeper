import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeerDetailView from '../views/BeerDetailView.vue'
import AddBeerView from '../views/AddBeerView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/beer/:id', name: 'beer-detail', component: BeerDetailView, props: true },
  { path: '/add', name: 'add-beer', component: AddBeerView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
