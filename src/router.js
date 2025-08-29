import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from './pages/AboutView.vue'
import Vue_Ex from './pages/Vue_Ex.vue'
import WebDesignView from './pages/WebDesignView.vue'


import RightPane from './pages/RightPane.vue'


const routes = [


  // 어바웃: 우측 비우기
  {
    path: '/about', components: {
      default: AboutView,
      right: RightPane 
    },
  },

  // 예제: 우측에 프리뷰 붙이기 (필요시)

  { path: '/example/vue', components: { default: Vue_Ex, right: RightPane } },


  {
    path: '/wed-design',
    components: {
      default: WebDesignView,
      right: RightPane
    },
  },
]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router