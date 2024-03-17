<script setup>
import { ref, onMounted } from 'vue';
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
            "minDimension": 200
        },
        {
            "name": "Sick Leave",
            "dataName": "SL",
            "inpType": "number",
            "isEditable": true,
            "dimension": "1fr",
            "minDimension": 200
        },
        {
            "name": "Date",
            "dataName": "date_of_create",
            "inpType": "Date",
            "isEditable": true,
            "dimension": "200px",
            "minDimension": 200
        }
    ]
)
// let HeaderItems = ref([
//     "Index",
//     "action name", 
//     "action 3", 
//     "action 4", 
//     "action 5", 
//     "action 6"
// ])
// let Dimensions = ref([
//     80,
//     200,
//     200,
//     200,
//     200,
//     200,
// ])
</script>

<template>
    <!-- <vet :VetHederItems="HeaderItems" :VetDimensions="Dimensions"></vet> -->
    <vet
    :vetDefaultItems="tableDefaultItems"
    ></vet>
</template>

<style scoped></style>