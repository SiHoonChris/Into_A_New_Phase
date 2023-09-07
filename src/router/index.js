import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '@/views/Dashboard.vue'

const routes = [
  { path: '/', name: 'main', component: MainDashboard },
  { path: '/chart', name: 'chart', component: () => import('@/views/AssetChart.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
