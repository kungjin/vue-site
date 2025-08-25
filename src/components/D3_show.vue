<template>
    <!-- 요소존재, 보이고/감추고 -->
    <div v-show="showDiv">
    이 앨리먼트는 감출 수 있어요.
    </div>
    <hr>
    <!-- if와 show 비교 -->
    <p>Display the two elements only if the showDiv 
        property is set to 'true'. If the showDiv property is 
        set to 'false' and we inspect the example page with the 
        browser we can see that the element with v-if is destroyed, 
        but the element with v-show has 
        just CSS display property set to 'none'.</p>

    <div v-show="showDiv">div 태그를 보이게 /감추게 하다</div>
    <div v-if="showDiv">div 태그를 요소 생성/ 비생성 하다</div>

</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(false)
</script>

<style scoped>
div{
      padding: 20px;
      margin: 10px;
      display: inline-block;
      font-weight: bold;
      border: solid black
}
</style>