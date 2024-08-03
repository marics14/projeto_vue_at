import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/PaginaPrincipal.vue'
import VideoUnico from '@/components/VideoUnico.vue'
import ImagemDiversas from '@/components/ImagemDiversas.vue'
import TabelaUnica from '@/components/TabelaUnica.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/videos',
    name:'videos',
    component: VideoUnico
  },
  {
    path:'/imagens',
    name:'imagens',
    component: ImagemDiversas
  },
  {
    path:'/tabela',
    name:'tabela',
    component:TabelaUnica
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
