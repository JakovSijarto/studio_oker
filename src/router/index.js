import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Projekti from '../components/projekti.vue'
import Kontakt from '../components/kontakt.vue'
import Cijena from '../components/cijena.vue'
import ProjectDetails from '../components/projekti_detalji.vue'

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
  },
  { path: '/project/:id',
   component: ProjectDetails, 
   name: 'project-details',
   props: true 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top:0 }
  }
})

export default router