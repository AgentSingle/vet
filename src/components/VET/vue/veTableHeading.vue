<script setup>
let props = defineProps({
    HeaderItems: Object,
    tableGridStyle: String,
})
</script>

<template>
    <div class="veTableWrapper" 
    :style="{'grid-template-columns': props.tableGridStyle}">
        <div v-for="item in HeaderItems" :key="item.id" class="veTableContent">
            {{ item }}
        </div>
    </div>
</template>

<style scoped>
.veTableWrapper{
    display: grid;
    text-align: left;
}
.veTableContent{
    box-sizing: border-box;
    border: 1px solid blue;
    padding: 5px;
    display: flex;
    align-items: center;
}
</style>