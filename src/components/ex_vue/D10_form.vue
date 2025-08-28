<template>
    <div class="contents">
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r1" value="HTML" name="radio6"/> HTML
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r2" value="CSS" name="radio6"/> CSS
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r3" value="React" name="radio6"/> React
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r4" value="Vue" name="radio6"/> Vue
        </label>
        <p>선택: {{ selected }} / ID: {{ selectedID }}</p>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref('HTML')
const selectedID = ref('')

const handleChange = (e) => {
    selectedID.value = e.target.id
}
</script>

<style scoped>
.contents{
    margin: 20px;
}

</style>