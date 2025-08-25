<template>
    <button id="button_01" @click="toggleShow">
        {{ showDiv ? '숨기기' : '보이기' }}
    </button>

    <!-- 요소존재, 보이고/감추고 -->
    <div class="box_" v-show="showDiv">
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

    <div class="box_" v-show="showDiv">div 태그를 보이게 /감추게 하다</div>
    <div class="box_" v-if="showDiv">div 태그를 요소 생성/ 비생성 하다</div>

    <hr>

    <div style="display:flex; justify-content:center; align-items:center; margin-top: 20px;">
        <button @click="emit('close')">닫기</button>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(false)

const toggleShow = () => {
    showDiv.value = !showDiv.value
}
const emit = defineEmits(['close'])

</script>

<style scoped>
p {
    background-color: #399385
}

.box_ {
    padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: solid black 2px ;
    border-radius: 40px;
}

#button_01 {
    display: flex;
    padding: 6px 12px;
    margin-bottom: 10px;
    background: #4ab7a7;
    color: #fff;
    border: 3px solid #fff;
    cursor: pointer;
    filter: drop-shadow(0 0 15.5px);
}

#button_01:hover {
    background: #2b675e;
}
</style>