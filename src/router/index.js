import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '@/views/Dashboard.vue'

const routes = [
  { path: '/',            name: 'main',          component: MainDashboard                            },
  { path: '/pf',          name: 'portfolio',     component: () => import('@/views/Portfolio.vue')    },
  { path: '/bs',          name: 'balance_sheet', component: () => import('@/views/BalanceSheet.vue') },
  { path: '/incm',        name: 'income_stat',   component: () => import('@/views/IncomeStat.vue')   },
  { path: '/trsc',        name: 'transaction',   component: () => import('@/views/Transaction.vue')  },
  { path: '/chart/:code', name: 'chart',         component: () => import('@/views/AssetChart.vue')   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
