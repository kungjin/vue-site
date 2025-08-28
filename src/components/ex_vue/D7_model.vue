<template>
    <div class="bg">
        <div class="b1">
            <input type="text" v-model="inpText">
            <p>{{ inpText }}</p>
        </div>
    </div>


    <div class="bg">
        <div class="b2">

            <p> 중요한가여?
                <br>
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </p>

        </div>
    </div>
    <div class="bg">
        <div class="b3">


            <!-- 입력 담당 -->
            <form @submit.prevent="addItem">
                <p>
                <legend>구매목록?</legend>
                <input type="text" v-model="itemName" placeholder="목록 이름을 입력하세요">
                </p>
                <p>
                <legend>구매 갯수?</legend>
                <input type="number" v-model="itemNumber" placeholder="구매 갯수를 입력하세요">

                </p>
                <p>
                    얼마나 중요한가요? 
                    <label>
                        
                        <input type="checkbox" v-model="itemImportant">
                        {{ itemImportant }}
                    </label>
                    
                </p>
                <button type="submit">목록 추가하기</button>
            </form>

            <hr>
            <!-- 출력 담당 -->
            <p> <strong>---- 구매 목록 ----</strong></p>
            <ol>
                <li v-for="list in shoppingList">
                    구매 목록 : {{ list.name }} -
                    구매 갯수 : {{ list.number }} -
                    중요도 : {{ list.important }} -
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';



const inpText = ref('Initial text')

const important = ref(false)
// 쇼핑 목록 --------------------- 

const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)
const addItem = () => {
    let item ={
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value
    }
    shoppingList.value.push(item)

    // 목록 init
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
}

const shoppingList = ref(
    [
        { name: '토마토', number: 5, important: false },
        { name: '바나나', number: 5, important: true },
        { name: '딸기', number: 5, important: false }
    ]
)


</script>

<style scoped>
.bg {
    margin: 10px;
    border-bottom: 3px double rgb(158, 158, 158);
}

.b1 {
    width: 200px;
    height: 100px;
    background-color: rgb(192, 192, 192);
    box-shadow:
        inset 0 0 10px rgba(0, 0, 0, 0.7),
        0 0 5px rgba(255, 255, 255, 0.3);
    display: inline-block;
    margin: 20px;
}

.b2 {
    width: 200px;
    height: 100px;
    background-color: rgb(173, 173, 105);
    display: inline-block;
    margin: 20px;
    filter: drop-shadow(2px 0 1.5px);
}

.b3 {
    width: 500px;
    background-color: rgb(165, 165, 165);
    box-shadow:
        inset 2px 0 10px rgba(0, 0, 0, 0.7),
        0 0 5px rgba(255, 255, 255, 0.3);
    display: inline-block;
    margin: 20px;
}

.b3 li {
    list-style: none;
    border-bottom: 1px dotted rgb(255, 255, 255);
}
.b3 ol {
  padding-left: 0;         /* 기본 들여쓰기 제거 */
  margin-left: 0;
}
label{
    margin-left: 10px;
}


</style>