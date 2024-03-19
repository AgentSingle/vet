<script setup>
import { ref, watch } from "vue";
import IconDelete from "../../VET/icon/IconDelete.vue";
import IconAdd from "../../VET/icon/IconAdd.vue";
let props = defineProps({
  HeaderItems: Object,
  tableGridStyle: String,
});
let isChecked = ref(false);
watch(isChecked, () => {
  console.warn(isChecked.value);
});
</script>

<template>
  <div class="veTableWrapper" :style="{ 'grid-template-columns': props.tableGridStyle }">
    <!-- CHECKBOX -->
    <div class="veTableContent" style="justify-content: center">
      <input type="checkbox" name="myCheckbox" v-model="isChecked" />
    </div>

    <!-- ACTION -->
    <div class="veTableContent" style="justify-content: center">
      <button>
        <IconAdd :dimension="20" iconColor="green"></IconAdd>
      </button>
    </div>
    <!-- <div class="veTableContent" style="justify-content: center">
      <button>
        <IconDelete :dimension="20" iconColor="red"></IconDelete>
      </button>
    </div> -->

    <!-- DYANMIC CONTENT -->
    <div v-for="item in HeaderItems" :key="item.id" class="veTableContent">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
button {
  height: 40px;
  width: auto;
  display: grid;
  align-content: center;
  background-color: transparent;
  border: none;
  outline: 0;
}
button :focus {
  border: none;
  outline: 0;
  -webkit-user-select: none;
  user-select: none;
}

.veTableWrapper {
  display: grid;
  text-align: left;
  overflow: hidden;
}

.veTableContent {
  box-sizing: border-box;
  border: 1px solid blue;
  padding: 5px;
  display: flex;
  align-items: center;
}
</style>
