<template>
    <div>
     <label>
        <input type="checkbox" v-model="checkVal">
        {{ isImportant }}
     </label>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';



const checkVal = ref(false)
const isImportant = computed(
    () => {
        if(checkVal.value){
            return "아주~ 특별해"
        } else{
            return "평범해"
        }
    }
)
</script>

<style scoped>

</style>