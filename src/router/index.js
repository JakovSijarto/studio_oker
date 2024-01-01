import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Projekti from '../components/projekti.vue'
import Cijena from '../components/kontakt.vue'
import Kontakt from '../components/cijena.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projekti',
    name: 'Projekti',
    component: Projekti
  },
  {
    path: '/cijena',
    name: 'Cijena',
    component: Cijena
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router