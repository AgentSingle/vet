<script setup>
import { ref, onMounted  } from 'vue';
import veTable from './veTable.vue';
import { generateRandomData } from '../javascript/randomDataGenerator';
let dataList = ref([])
onMounted(()=>{
    let resp = generateRandomData(50);
    dataList.value = resp;
    console.warn(resp)
})
</script>

<template>
    <div class="vetDataDisplayContainer">
        <div class="vetHeading">
            <veTable type="Heading"></veTable>
        </div>
        <div class="vetBody">
            <div v-for="data in dataList"  v-bind:key="data.id" class="vetBodyContent">
                <veTable :dataObj="data" type="Content"></veTable>
            </div>
        </div>
    </div>
</template>

<style scoped>
.vetDataDisplayContainer{
    max-height: calc(100vh - 50px);
    overflow-x: scroll;
    overflow-y: hidden;
}
.vetHeading{
    height: 50px;
    /* background-color: blue; */
    display: grid;
    overflow-y: scroll;
    overflow-x: hidden;
    min-width: 800px;
}
.vetBody{
    max-height: calc(100vh - 120px);
    /* background-color: yellow; */
    display: grid;
    overflow-y: scroll;
    overflow-x: hidden;
    min-width: 800px;
}
</style>