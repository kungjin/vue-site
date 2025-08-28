<template>
     <hr>
    <div :style="{ fontSize: size }">
        {{size}} PrEtendard
    </div>
    <hr>
    <div :style="{ fontSize: size1 }">
        {{size1}} PrEtendard
    </div>
    <hr>
    <div :style="{ fontSize: size2 }">
        {{size2}} PrEtendard
    </div>
    <hr>
    <div :style="{ fontSize: size3 }">
        {{size3}} PrEtendard
    </div>
    <hr>
    <div :style="{ fontSize: size4 }">
        {{size4}} PrEtendard
    </div>
    <hr>
</template>

<script setup>
import { ref } from 'vue';

const size = ref(`28px`)

const size1 = ref(`32px`)

const size2 = ref(`36px`)

const size3 = ref(`40px`)

const size4 = ref(`44px`)

</script>

<style scoped>


</style>