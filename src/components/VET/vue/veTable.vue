<script setup>
let props = defineProps({
    dataObj: Object,
    type: String
})
</script>

<template>
    <div v-if="props.type=='Heading'" class="veTableWrapper">
        <div class="veTableContent">
            text
        </div>
        <div class="veTableContent">
            text
        </div>
        <div class="veTableContent">
            text
        </div>
        <div class="veTableContent">
            text
        </div>
        <div class="veTableContent">
            text
        </div>
    </div>
    <div v-if="props.type=='Content'" class="veTableWrapper">
        <div v-if="dataObj" class="veTableContent">
            {{ dataObj.id }}
        </div>
        <div class="veTableContent">
            text
        </div>
        <div class="veTableContent">
            text
        </div>
        <div class="veTableContent">
            text
        </div>
        <div v-if="dataObj" class="veTableContent">
            texts {{ dataObj.num }}
        </div>
    </div>
</template>

<style scoped>
.veTableWrapper{
    display: grid;
    grid-template-columns: 100px 1fr 1fr 1fr 1fr;
    text-align: left;
}
.veTableContent{
    box-sizing: border-box;
    border: 1px solid blue;
    padding: 5px;
}
</style>