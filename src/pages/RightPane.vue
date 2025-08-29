<template>
<div class="right-pane">
  <component v-if="activeComp" :is="activeComp" />

  <div v-else class="slider">
    <div class="slide">
      <img :src="images[current]" alt="slide image" />
    </div>

    <div class="dots">
      <button 
      v-for="(img, i) in images"
      :key="i"
      @click="current = i"
      :class="{active: current === i}"
      >
      </button>

    </div>
  </div>
  </div>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { previewState } from './preview'
import VueEx from './Vue_Ex.vue'
import AboutView from './AboutView.vue'

const map = {
  about: AboutView,
  vue: VueEx

}

// key 값에 따라 컴포넌트 선택
const activeComp = computed(() => map[previewState.key] ?? null)

// 기본 이미지 슬라이드
const images = [
  'https://picsum.photos/seed/1/360/240',
  'https://picsum.photos/seed/2/360/240',
  'https://picsum.photos/seed/3/360/240'
]
const current = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 3000)
})

onUnmounted(() =>
  clearInterval(interval)
)


</script>

<style scoped>
.right-pane { display: flex; flex-direction: column; gap: 8px; }

.slider {
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  border-radius: 10px;
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
}

.dots button.active {
  background: #333;
}
</style>
