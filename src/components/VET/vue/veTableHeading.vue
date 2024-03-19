<script setup>
import { ref, watch, defineEmits } from "vue";
const emit = defineEmits(["tableActionResponse"]);
import IconDeleteAll from "../../VET/icon/IconDeleteAll.vue";
import IconAdd from "../../VET/icon/IconAdd.vue";
import IconSave from "../../VET/icon/IconSave.vue";
let props = defineProps({
  HeaderItems: Object,
  tableGridStyle: String,
  isSaveButtonVisable: Boolean,
});

/*
  ON CLICK GLOBAL SELCTOR BUTTON 
  hide add button & display delete all button
*/
let isChecked = ref(false);
let isAddItemButtom = ref(true);
let isDeleteAllButtom = ref(false);
watch(isChecked, () => {
  if (isChecked.value) {
    isAddItemButtom.value = false;
    isDeleteAllButtom = true;
    emit("tableActionResponse", "SelectAll");
  } else {
    isAddItemButtom.value = true;
    isDeleteAllButtom = false;
    emit("tableActionResponse", "UnSelectAll");
  }
});

const saveAll = () => {
  emit("tableActionResponse", "SaveALL");
};
</script>

<template>
  <div class="veTableWrapper" :style="{ 'grid-template-columns': props.tableGridStyle }">
    <!-- CHECKBOX -->
    <div class="veTableContent" style="justify-content: center">
      <input type="checkbox" name="myCheckbox" v-model="isChecked" />
    </div>

    <!-- ==============[ ACTION BUTTON SECTION ]============== -->
    <!-- Add Button -->
    <div
      v-if="isAddItemButtom & !props.isSaveButtonVisable"
      class="veTableContent"
      style="justify-content: center"
    >
      <button>
        <IconAdd :dimension="20" iconColor="green"></IconAdd>
      </button>
    </div>

    <!-- Save Button -->
    <div
      v-if="props.isSaveButtonVisable"
      class="veTableContent"
      style="justify-content: center"
    >
      <button @click="saveAll">
        <IconSave :dimension="25" iconColor="green"></IconSave>
      </button>
    </div>

    <!-- Delete Button -->
    <div
      v-if="isDeleteAllButtom & !props.isSaveButtonVisable"
      class="veTableContent"
      style="justify-content: center"
    >
      <button>
        <IconDeleteAll :dimension="22" iconColor="#fc038c"></IconDeleteAll>
      </button>
    </div>

    <!-- DYANMIC CONTENT -->
    <div v-for="item in props.HeaderItems" :key="item.id" class="veTableContent">
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
