<template>
    <hr>
    <div class="event_01">
        <button class="btn-retro" @click="cnt++">
            ++1 증가버튼 <span class="badge">[{{ cnt }}]</span>
        </button>

        <hr>
        <img :src="lightOn ? pic_bulbon : pic_bulboff" alt="pic_bulboff">

        <hr>
        <button @click="lightOn = !lightOn">
            ON/OFF 버튼
            {{ lightOn }}
        </button>

        <hr>

        <div>
            <input type="text" @input="inpCount++">
            <p>{{ inpCount }} 번째 키를 Down하고 있습니다.</p>
        </div>

        <hr>
        <div class="bg" @mousemove="colorVal = Math.floor(Math.random() * 360)"
            :style="{ backgroundColor: `hsl(${colorVal}, 60%, 60%)` }">
            {{ colorVal }}
        </div>

        <hr>

        <!--  메뉴판 -->
        <div class="menu">
            <ol>
                <li v-for="food in food_assets" @click="imgUrl = food.src">
                    {{ food.name }}
                </li>
            </ol>
            <img :src="imgUrl" alt="test">
        </div>
        <hr>


    </div>
</template>

<script setup>
import { ref } from 'vue'
import pic_bulboff from '../../assets/pic_bulboff.gif'
import pic_bulbon from '../../assets/pic_bulbon.gif'
import img_burrito from '../../assets/img_burrito.svg'
import img_salad from '../../assets/img_salad.svg'
import img_cake from '../../assets/img_cake.svg'
import img_soup from '../../assets/img_soup.svg'
import img_fish from '../../assets/img_fish.svg'
import img_pizza from '../../assets/img_pizza.svg'
import img_rice from '../../assets/img_rice.svg'


const lightOn = ref(false)
const cnt = ref(0)

const inpCount = ref(0)

// 색상값
const colorVal = ref(50)

const food_assets = ref([
    { src: img_burrito, name: '브리또' },
    { src: img_salad, name: '샐러드' },
    { src: img_cake, name: '케이크' },
    { src: img_soup, name: '스프' },
    { src: img_fish, name: '생선' },
    { src: img_pizza, name: '피자' },
    { src: img_rice, name: '밥' }])

const imgUrl = ref(img_burrito)

</script>












<style scoped>
.menu>ol {
    float: left;
    list-style: none;

}

.menu li:hover {
    filter: drop-shadow(0 0 11.5px);
    color: #ffffff;
    border: none;
    background-color: #9c9c9c;
    cursor: pointer;
    border-radius: 10px;
   
}

.menu>img {
    width: 100px;
    height: 200px;
}

.bg {
    display: inline-block;
    width: 200px;
    height: 50px;
    background-color: #eaa62a;

}




.btn-retro {
    /* 레트로 느낌 기본 */
    font-family: Pretendard, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-weight: 800;
    letter-spacing: .02em;
    font-variant-numeric: tabular-nums;

    /* 크기/레이아웃 */
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 18px;
    cursor: pointer;

    /* 픽셀 프레임 */
    border: 4px solid #111;
    border-radius: 0;
    /* 각진 느낌 */
    box-shadow:
        0 6px 0 #111,
        /* 바닥 그림자 (돌출) */
        inset -4px -4px 0 #d28f00,
        /* 아래/오른쪽 안쪽 하이라이트 */
        inset 4px 4px 0 #ffe8a3;
    /* 위/왼쪽 안쪽 하이라이트 */

    /* 8비트 배경(체커보드+그라디언트 오버레이) */
    background:
        linear-gradient(180deg, #ffd36b 0%, #f6b942 100%),
        repeating-linear-gradient(45deg, rgba(255, 255, 255, .22) 0 6px, transparent 6px 12px);
    background-blend-mode: overlay;

    color: #111;
    text-shadow: 1px 1px 0 #fff;
    /* 살짝 떠보이게 */
    transform: translateY(0);
    transition: transform .06s ease, box-shadow .06s ease, filter .12s ease;
    position: relative;
}

/* CRT 스캔라인 느낌 (아주 은은) */
.btn-retro::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(180deg, rgba(0, 0, 0, .06) 0 2px, transparent 2px 4px);
    mix-blend-mode: multiply;
    opacity: .25;
}

/* 숫자 배지(대괄호 강조) */
.badge {
    padding: 2px 6px;
    border: 2px solid #111;
    background: #fffce1;
    box-shadow:
        2px 2px 0 #111,
        inset -2px -2px 0 #ffdb85,
        inset 2px 2px 0 #fff;
    font-weight: 900;
}

/* 인터랙션 */
.btn-retro:hover {
    filter: saturate(1.1);
    transform: translateY(-2px);
    box-shadow:
        0 8px 0 #111,
        inset -4px -4px 0 #c88200,
        inset 4px 4px 0 #fff0b5;
}

.btn-retro:active {
    transform: translateY(0);
    box-shadow:
        0 2px 0 #111,
        inset -2px -2px 0 #b87400,
        inset 2px 2px 0 #ffe593;
    background:
        linear-gradient(180deg, #f6b942 0%, #eaa62a 100%),
        repeating-linear-gradient(45deg, rgba(255, 255, 255, .18) 0 6px, transparent 6px 12px);
}

.btn-retro:focus-visible {
    outline: 3px solid #5b9dff;
    outline-offset: 3px;
}
</style>