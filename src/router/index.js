import { createRouter, createWebHistory } from 'vue-router'
import { useLoading } from '../useLoading';

const { startLoading, endLoading } = useLoading();

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

router.beforeEach(async (to, from, next) => {
  try {
    startLoading();

    // Fetch data for the current route's components
    const componentDataPromises = to.matched.map(async (routeRecord) => {
      // Assuming each route record has a fetchData function
      if (routeRecord.components.default.fetchData) {
        await routeRecord.components.default.fetchData();
      }
    });

    // Wait for all component data promises to resolve
    await Promise.all(componentDataPromises);

    // Proceed to the next route
    next();
  } catch (error) {
    console.error('Error during component data loading: yes', error);
    endLoading();
    // Optionally redirect to an error page or handle the error as needed
    next('/error');
  } finally {
    // Mark loading as complete, even in case of an error
    endLoading();
  }
});


export default router