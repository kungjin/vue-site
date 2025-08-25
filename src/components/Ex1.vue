<template>
    <div class="blog" >
        <!-- 이미지 import 사용 -->
        <img v-bind:src="img_beach3" alt="태양광">
        <div v-bind:style="{ fontSize: size }">
            너는 v-bind: 글자크기 속성이야
        </div>
        <div v-bind:style="{ fontSize: size2 + 'px' }">
            너는 v-bind:글자값 속성이야
        </div>

        <div v-bind:style="{ 'font-size': size3 + 'px' }">
            너는 v-bind:css 글자 속성이야
        </div>

        <!-- v-bind:style 색상값 -->
        <div v-bind:style="{ backgroundColor: `rgb(${bgVal},100,100)` }">
            백그라운 색상 값을 변수로 적용
        </div>
        <div v-bind:style="{ backgroundColor: isImportent ? `lightcoral` : 'lightgray' }">
            백그라운드의 색상 값을 조건에 따라 다르게
        </div>
        <!-- v-bind:class 클래스 -->
        <div v-bind:class="className">
            클래스 바인드
        </div>
        <div v-bind:class="{ myClass: true }">
            클래스 true false 바인드
        </div>

        <div v-bind:class="{ myClass: isImportent }">
            클래스 Importent속성 여부
        </div>
    
     <div style="display:flex;justify-content:center;align-items:center">
   
    <button @click="emit('close')" style="margin-top: 20px;">닫기</button>
  </div>

    </div>

</template>

<script setup>
import { ref } from "vue";
import img_beach3 from "../assets/img_beach3.jpg";

const size = ref("20px")
const size2 = ref(30)
const size3 = ref(40)
const bgVal = ref(180)
const isImportent = ref(false)
const className = ref("impClass")

const emit = defineEmits(['close'])

</script>

<style scoped>
.blog{
    text-align: left;
}

.myClass {
    background-color: #eac119;
}

.impClass {
    background-color: #9ed6df;
    border: 3px dashed #808bc5;
}

img {
    width: 250px;
    height: 100px;
}
</style>