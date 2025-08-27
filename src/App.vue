<script setup>
import { KeepAlive, ref } from 'vue';
import D1_bind from './components/D1_bind.vue';
import D2_if from './components/D2_if.vue';
import D3_show from './components/D3_show.vue';
import D4_for from './components/D4_for.vue';
import D5_event from './components/D5_event.vue';
import D4_for_Ex from './components/D4_for_Ex.vue';
import D1_bindUp from './components/D1_bindUp.vue';
import D6_methods from './components/D6_methods.vue';
import D7_model from './components/D7_model.vue';


// 컴포넌트맵
const pages = { D1_bind, D1_bindUp, D2_if, D3_show, D4_for, D4_for_Ex, D5_event, D6_methods, D7_model }
const activeComp = ref('D1_bind')

</script>

<template>

  <!-- <D1_bind />
  <D2_if />
  <D3_show />
  <D4_for /> -->
  <!-- 버튼클릭시 보여줄 컴포넌트 -->

  <button @click="activeComp = `D1_bind`"><b>V-bind</b> <br>
    <hr>변수 사용
  </button>
  <button @click="activeComp = `D1_bindUp`"><b>V-bind_up</b> <br>
    <hr>변수 응용
  </button>

  <button @click="activeComp = `D2_if`"><b>V-if</b> <br>
    <hr>조건 분기
  </button>
  <button @click="activeComp = `D3_show`"><b>V-show</b> <br>
    <hr>보이다/감추다
  </button>
  <button @click="activeComp = `D4_for`"><b>V-for</b> <br>
    <hr>~동안 실행
  
  </button>

   <button @click="activeComp = `D4_for_Ex`"><b>V-forEx</b> <br>
    <hr>~동안 응용
  </button>

  <button @click="activeComp = `D5_event`"><b>V-event</b> <br>
    <hr>이벤트 발생
  </button>

 <button @click="activeComp = `D6_method`"><b>V-method</b> <br>
    <hr>메소드 구현
  </button>

    <button @click="activeComp = `D7_model`"><b>V-model</b> <br>
    <hr>양방향 바인딩
  </button>
 
<hr>

  <div class="pageView">

    <KeepAlive>
      <component :is="pages[activeComp]"> </component>
    </KeepAlive>
  </div>

</template>

<style scoped>
button > hr{
  margin-top: 5px;
}

button {
  display: inline-block;
  margin: 10px;
  width: 150px;
  filter: drop-shadow(2px 0 1.5px);

}

.pageView {

  margin: 20px;
  background-color: #d6d4d4;
  border: 3px dotted greenyellow;
}
</style>