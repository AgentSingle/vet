<script setup>
import { ref, onMounted } from 'vue';
import { generateRandomData } from '@/components/VET/temp/randomDataGenerator';
let dataList = ref([])
onMounted(()=>{   
    // TEMPORARY DATA GENERATOR
    let resp = generateRandomData(100);
    dataList.value = resp;
})

import vet from './VET/vue/vet.vue';
let tableDefaultItems = ref(
    [
        {
            "name": "Index",
            "dataName": "id",
            "inpType": "text",
            "isEditable": false,
            "dimension": "100px",
            "minDimension": 100
        },
        {
            "name": "Description",
            "dataName": "description",
            "inpType": "text",
            "isEditable": true,
            "dimension": "2fr",
            "minDimension": 200
        },
        {
            "name": "Paternity Leave",
            "dataName": "PL",
            "inpType": "number",
            "isEditable": true,
            "dimension": "1fr",
            "minDimension": 150
        },
        {
            "name": "Sick Leave",
            "dataName": "SL",
            "inpType": "number",
            "isEditable": true,
            "dimension": "1fr",
            "minDimension": 150
        },
        {
            "name": "Date",
            "dataName": "date_of_create",
            "inpType": "Date",
            "isEditable": false,
            "dimension": "120px",
            "minDimension": 120
        }
    ]
)
</script>

<template>
    <vet
    :vetDefaultItems="tableDefaultItems"
    :vetData="dataList"
    ></vet>
</template>

<style scoped></style>