<template>

    <ul>
        <li v-for="item in items">{{ item.message }}</li>
        <hr>
        <li v-for="food in manyFoods">{{ food }}</li>
        <hr>
    </ul>

    <div class="food-list">

        <div class="food-style" v-for="foos in foos_assets" :key="foos.name">
            <img :src="foos.src" :alt="foos.name">
            <li> Mr. {{ foos.name }} </li>
        </div>
        <hr>
        <ul>
            <li class="food-style2" v-for="food in foos_public" :key="food.name">
                <img :src="food.src" :alt="food.name" />
                Mr. {{ food.name }}
            </li>
        </ul>
       </div>
       <hr>
       <!-- 인덱스 가져오기 -->
        <li v-for="(food, idx) in manyFoods">{{ idx }} {{ food }}</li>

</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../../assets/img_burrito.svg'
import img_salad from '../../assets/img_salad.svg'
import img_cake from '../../assets/img_cake.svg'
import img_soup from '../../assets/img_soup.svg'
import img_fish from '../../assets/img_fish.svg'
import img_pizza from '../../assets/img_pizza.svg'
import img_rice from '../../assets/img_rice.svg'

// [{key키 : value값},{}]
const items = ref([{ message: 'Foo' }, { message: 'Beer' }, { message: 'Beer' }])

const manyFoods = ref(
    [
        '브리또',
        '샐러드',
        '케이크',
        '스프',
        '생선',
        '피자',
        '밥',
    ]
)

const foos_assets = ref([
    { src: img_burrito, name: '브리또' },
    { src: img_salad, name: '샐러드' },
    { src: img_cake, name: '케이크' },
    { src: img_soup, name: '스프' },
    { src: img_fish, name: '생선' },
    { src: img_pizza, name: '피자' },
    { src: img_rice, name: '밥' }])

const foos_public = ref([
    { src: "/images/img_burrito.svg", name: '브리또' },
    { src: "/images/img_salad.svg", name: '샐러드' },
    { src: "/images/img_cake.svg", name: '케이크' },
    { src: "/images/img_soup.svg", name: '스프' },
    { src: "/images/img_fish.svg", name: '생선' },
    { src: "/images/img_pizza.svg", name: '피자' },
    { src: "/images/img_rice.svg", name: '밥' }
])


</script>




<style scoped>
.food-style {
    display: inline-block;
    width: 100px;
    margin: 7px;
    background-color: #eac119;
}

.food-style>img {
    width: 50%;
}

.food-style>li {
    list-style: none;
    font-weight: 500;
}

ul {
    list-style: none;
}

.food-style2 {
    display: inline-block;
    width: 100px;
    margin: 7px;
    background-color: #eac119;
}
li {
    list-style: none;
    font-weight: 500;
    color: black;
}

</style>