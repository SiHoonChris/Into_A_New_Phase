import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '@/views/Dashboard.vue'

const routes = [
  { // 첫 화면, 종목 검색
    path: '/', 
    name: 'search', 
    component: MainDashboard
  },
  { // 포트폴리오 플랜 (도넛 차트)
    path: '/portfolios', 
    name: 'portfolios', 
    component: () => import('@/views/Portfolio.vue')
  },
  { // 재무제표 (대차대조표, 손익계산서) 
    path: '/financial-statements',
    name: 'financial-statements',
    component: () => import('@/views/FinancialStatements.vue')
  },
  { // 종목 상세 정보
    path: '/detail/:code', 
    name: 'detail', 
    component: () => import('@/views/AssetChart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
