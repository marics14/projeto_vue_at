import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: import('../components/PaginaPrincipal.vue')
  },
  {
    path:'/videos',
    name:'videos',
    component: import('../components/VideoUnico.vue')
  },
  {
    path:'/imagens',
    name:'imagens',
    component: import('../components/ImagemDiversas.vue')
  },
  {
    path:'/tabela',
    name:'tabela',
    component:import('../components/TabelaUnica.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
