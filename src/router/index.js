import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '@/views/Dashboard.vue'

const routes = [
  { path: '/', name: 'main', component: MainDashboard },
  { path: '/chartB', name: 'Bollinger', component: () => import('@/views/ChartDetail_Bollinger.vue') },
  { path: '/chartI', name: 'Ichimoku', component: () => import('@/views/ChartDetail_Ichimoku.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
