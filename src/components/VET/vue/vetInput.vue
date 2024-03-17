<script setup>
import { ref, onMounted, watch } from 'vue';
let props = defineProps({
    inpType: String,
    inpRowId: Number,
    inpCellId: Number,
    inpName: String,
    inpValue: Object
})
let inputValue = ref(props.inpValue[props.inpName]);
let inputName = ref('no_name');
onMounted(()=>{
    if (props.inpValue[props.inpName] != undefined){
        // console.warn(props.inpValue[props.inpName])
        inputName.value = `${props.inpRowId}_${props.inpCellId}_${props.inpName}`;
        inputValue.value = props.inpValue[props.inpName]
    }
})
watch(inputValue, ()=>{
    console.warn(inputValue.value)
})
</script>

<template>
    <input 
    :type="props.inpType" 
    :name="inputName"
    v-model="inputValue"
    class="EditableTableInput">
    <!-- <p>Input Type: {{ props.inpType }}</p>
    <p>Data Input Name: {{ props.inpName }}</p>
    <p>Value: {{ props.inpValue[inpName] }}</p> -->
</template>

<style scoped>
.EditableTableInput{
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transform: translateY(-2px);
    border: none;
}
.EditableTableInput:focus{
    outline: none;
    background-color: #cae1fa;
}
</style>