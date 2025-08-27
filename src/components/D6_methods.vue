<template>
    <div class="bg">
        <div class="b1" @click="changeText">
            <p>{{ txt }}</p>
        </div>
    </div>
    <div class="bg">
        <div class="b2" @mousemove="mousePos">
            <span>xPos : {{ xPos }} <br> yPos : {{ yPos }}</span>
        </div>
    </div>
    <div class="bg">
        <div class="b3">
            <p>{{ count }}</p>
            <button v-on:click="addCount(1)">++1 증가</button><br>
            <button v-on:click="addCount(5)">++5 증가</button><br>
            <button v-on:click="addCount(-1)">--1 감소</button>

        </div>
    </div>

    <div class="bg">
        <div class="b4">
            <img id="라이거" 
            @click="swapOnce"
            :src="imgSrc" alt="tiger">
            <p>{{ msgAndId }}</p>
        </div>
    </div>
</template>

<script setup>
import img_tiger_square_ch from '../assets/img_tiger_square_ch.png'
import img_tiger_square from '../assets/img_tiger_square.jpeg'
import { ref } from 'vue';
const txt = ref(`txt`)
// const changeText = () => {
//     txt.value ='안녕~'
// }

function changeText() {
    txt.value = '안녕~'
}
const xPos = ref(0)
const yPos = ref(0)
const mousePos = (e) => {
    xPos.value = e.offsetX
    yPos.value = e.offsetY
}

const count = ref(0)
const addCount = (num) => {
    count.value += num
}

const imgSrc = ref(img_tiger_square)
const msgAndId = ref(``)
// const myMethod = (e, msg) => {
//     // msgAndId.value = msg
//     // msgAndId.value += e.target.id

//     msgAndId.value = `${e.target.id}야 ${msg} 헵어 Nice day! Broooo~!!`
// }

const swapOnce = (e) => {
  imgSrc.value = img_tiger_square_ch
  msgAndId.value = `${e.currentTarget .id}야 와썹~ 헵어 Nice day! Broooo~!!`
}

</script>

<style scoped>
button {
    width: 100px;
    margin-top: 10px;
    font-size: small;
}

.bg {
    margin-top: 0px;
    margin: 20px;
    padding: 10px;
    border-bottom: 3px double greenyellow;
}

.b1 {
    width: 200px;
    height: 100px;
    background-color: greenyellow;
    display: inline-block;
}

.b2 {
    width: 200px;
    height: 200px;
    background-color: greenyellow;
    display: inline-block;
}

.b4>img {
    width: 200px;
    height: 200px;
}
</style>