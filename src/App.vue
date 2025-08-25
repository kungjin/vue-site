<script setup>
import { ref } from 'vue'

import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';

const pages = { Ex1, Ex2, Ex3, Ex4 }
const activeComp = ref(null)

const viewerVisible = ref(false)

const handleOpen = (name) => {
  if (activeComp.value === name) {
   
    viewerVisible.value = !viewerVisible.value
  } else {
    activeComp.value = name
    viewerVisible.value = true
  }
}
const handleClose = () => {
  viewerVisible.value = false   
}

</script>

<template>
  <!-- <Ex1 />
  <Ex2 />
  <Ex3 />
  <Ex4 /> -->
  <div class="toolBar">
    <button @click="handleOpen('Ex1')">bind_바인드</button>
    <button @click="handleOpen('Ex2')">if_이프</button>
    <button @click="handleOpen('Ex3')">show_쇼우</button>
    <button @click="handleOpen('Ex4')">for_포</button>
</div>
 <Transition name="fade">
 <div v-if="activeComp" id="comp_view" v-show="viewerVisible">
    <KeepAlive>
      <component :is="pages[activeComp]" @close="handleClose" />
    </KeepAlive>
  </div>
  </Transition>

</template>

<style scoped>
.toolBar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  justify-content: center;
}
button {
  margin: 5px;
  padding: 6px 10px;
  filter: drop-shadow(0 0 1.5px #123);
}

button:hover {
  background: #245e55;
  border-color: #245e55;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
  transform: translateY(-1px)
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0,0,0,.08);
}

#comp_view {
  width: 720px;
  height: 70vh;
  border: 1px solid #303030;
  padding: 16px;
  box-sizing: border-box;
  overflow: auto;
  filter: drop-shadow(0 0 1.5px);
  background-color: #eae4d4;
}




</style>