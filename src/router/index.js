import { createRouter, createWebHistory } from 'vue-router'
import ExibirCadastros from '@/views/ExibirCadastros.vue'
import AddUsuario from '@/views/AddUsuario.vue'
import CadastroUpdate from '@/views/CadastroUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'ExibirCadastros',
    component: ExibirCadastros
  },
  {
    path: '/AddUsuario',
    name: 'AddUsuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddUsuario,
  },
  {
    path:'/CadastroUpdate',
    name:'CadastroUpdate',
    component: CadastroUpdate,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
