import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from './pages/AboutView.vue'
import AboutView from './pages/AboutView.vue'
import ExamplesView from './pages/ExamplesView.vue'
import WebDesignView from './pages/WebDesignView.vue'
import PortfolioPreview from './pages/RightImagePane.vue'


const routes = [
 

  // 어바웃: 우측 비우기
  {
    path: '/about',
    components: {
      default: AboutView,
      // right 생략하면 빈 공간 (원하면 placeholder 컴포넌트 연결)
    },
  },

  // 예제: 우측에 프리뷰 붙이기 (필요시)
  {
    path: '/example',
    components: {
      default: ExamplesView,
      right: PreviewPane,      // ← 우측 프리뷰
    },
    // children: … (예제 하위 라우트가 있으면 그대로 유지)
  },

  // 웹디자인: 우측에 이미지 혹은 빼기 선택
  {
    path: '/wed-design',
    components: {
      default: WebDesignView,
      right: PortfolioPreview,
    },
  },
]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router