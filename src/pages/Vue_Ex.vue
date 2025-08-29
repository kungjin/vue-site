<script setup>
import { KeepAlive, ref } from 'vue';


import D1_bind from '../components/ex_vue/D1_bind.vue';
import D1_bindUp from '../components/ex_vue/D1_bindUp.vue';
import D2_if from '../components/ex_vue/D2_if.vue';
import D3_show from '../components/ex_vue/D3_show.vue';
import D4_for from '../components/ex_vue/D4_for.vue';
import D4_for_Ex from '../components/ex_vue/D4_for_Ex.vue';
import D5_event from '../components/ex_vue/D5_event.vue';
import D6_methods from '../components/ex_vue/D6_methods.vue';
import D7_model from '../components/ex_vue/D7_model.vue';
import D8_computed from '../components/ex_vue/D8_computed.vue';
import D9_watchers from '../components/ex_vue/D9_watchers.vue';
import D10_form from '../components/ex_vue/D10_form.vue';


// 컴포넌트맵
const pages = 
{ D1_bind, D1_bindUp, D2_if, D3_show, 
  D4_for, D4_for_Ex, D5_event, 
  D6_methods, D7_model, D8_computed, 
  D9_watchers, D10_form }
const activeComp = ref('D1_bind')

</script>

<template>
<div class="container">
  <!-- <D1_bind />
  <D2_if />
  <D3_show />
  <D4_for /> -->
  <!-- 버튼클릭시 보여줄 컴포넌트 -->

  <button @click="activeComp = `D1_bind`" 
  :class="{ active: activeComp === 'D1_bind' }">
  <b>V-bind</b> <br>
    <hr>변수 사용
  </button>

  <button @click="activeComp = `D2_if`"
  :class="{ active: activeComp === 'D2_if' }">
    <b>V-if</b> <br>
    <hr>조건 분기
  </button>
  <button @click="activeComp = `D3_show`"
  :class="{ active: activeComp === 'D3_show' }">
    <b>V-show</b> <br>
    <hr>보이다/감추다
  </button>
  <button @click="activeComp = `D4_for`"
  :class="{ active: activeComp === 'D4_for' }">
    <b>V-for</b> <br>
    <hr>~동안 실행
  </button>

 
  <button @click="activeComp = `D5_event`"
  :class="{ active: activeComp === 'D5_event' }">
    <b>V-event</b> <br>
    <hr>이벤트 발생
  </button>

  <button @click="activeComp = `D6_methods`"
  :class="{ active: activeComp === 'D6_methods' }">
    <b>V-method</b> <br>
    <hr>메소드 구현
  </button>

  <button @click="activeComp = `D7_model`"
  :class="{ active: activeComp === 'D7_model' }">
    <b>V-model</b> <br>
    <hr>양방향 바인딩
  </button>

    <button @click="activeComp = `D8_computed`"
  :class="{ active: activeComp === 'D8_computed' }">
    <b>V-computed</b> <br>
    <hr>계산된 코드
  </button>

    <button @click="activeComp = `D9_watchers`"
  :class="{ active: activeComp === 'D9_watchers' }">
    <b>V-watchers</b> <br>
    <hr>변경 감시 실행
  </button>

   <button @click="activeComp = `D10_form`"
  :class="{ active: activeComp === 'D10_form' }">
    <b>V-form</b> <br>
    <hr>변경 감시 실행
  </button>


  <hr>

   <button @click="activeComp = `D4_for_Ex`"
  :class="{ active: activeComp === 'D4_for_Ex' }">
    <b>스마트 영수증</b> <br>
    <hr>V-forEx
  </button>

    <button @click="activeComp = `D1_bindUp`"
  :class="{ active: activeComp === 'D1_bindUp' }">
    <b>웹 폰트 가이드 </b> <br>
    <hr>V-bind_up
  </button>

  <hr>

  <div class="pageView">

    <KeepAlive>
      <component :is="pages[activeComp]"> </component>
    </KeepAlive>
  </div>
</div>
</template>

<style scoped>


button.active {
  background-color: rgb(184, 236, 79);
  color:rgb(255, 255, 255);
  border: 2px solid #7d7e7d;
  box-shadow:
    inset 1.5px 0 1.5px rgba(0, 0, 0, 0.7),
    0 0 5px rgba(255, 255, 255, 0.3);
}

button>hr {
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
  border: 3px double greenyellow;
}
</style>