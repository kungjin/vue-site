<script setup>
import { ref } from 'vue'

import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';

const pages = { Ex1, Ex2, Ex3, Ex4 }
const activeComp = ref('Ex1')

</script>

<template>
  <!-- <Ex1 />
  <Ex2 />
  <Ex3 />
  <Ex4 /> -->
  <button @click="activeComp = 'Ex1'"> bind_바인드</button>
  <button @click="activeComp = 'Ex2'">if_이프</button>
  <button @click="activeComp = 'Ex3'">show_쇼우</button>
  <button @click="activeComp = 'Ex4'">for_포</button>

  <div id="comp_view">
    <KeepAlive>
      <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>

</template>

<style scoped>
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