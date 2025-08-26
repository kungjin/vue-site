<template>
    <p v-if="cnt >3">재고 있음: {{ cnt }} </p>
    <p v-else-if="cnt >0">제고가 조금 남음: {{ cnt }}</p>
    <p v-else-if="cnt == 0">재고 없음: {{ cnt }}</p>
    <p v-else>선불 및 예약 {{ cnt }}</p>
    <hr>
</template>

<script setup>
import { ref } from 'vue';


const cnt = ref(10)
</script>

<style scoped>

</style>