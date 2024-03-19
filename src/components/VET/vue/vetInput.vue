<script setup>
import { ref, onMounted, watch, defineEmits } from "vue";
import { debounce } from "../js/algorithm.js";
const emit = defineEmits(["retunInputValue"]);

let props = defineProps({
  inpType: String,
  inpRowId: Number,
  inpCellId: Number,
  inpName: String,
  inpValue: Object,
});
let inputValue = ref(props.inpValue[props.inpName]);
let inputName = ref("no_name");
onMounted(() => {
  if (props.inpValue[props.inpName] != undefined) {
    // console.warn(props.inpValue[props.inpName])
    inputName.value = `${props.inpRowId}_${props.inpCellId}_${props.inpName}`;
    inputValue.value = props.inpValue[props.inpName];
  }
});

const debouncedFunction = debounce(() => {
  let dataObj = {
    id: props.inpRowId,
    key: props.inpName,
    value: inputValue.value,
  };
  emit("retunInputValue", dataObj);
}, 300);

watch(inputValue, () => {
  debouncedFunction();
  //   console.warn(inputValue.value);
});
</script>

<template>
  <input
    :type="props.inpType"
    :name="inputName"
    v-model="inputValue"
    class="EditableTableInput"
  />
  <!-- <p>Input Type: {{ props.inpType }}</p>
    <p>Data Input Name: {{ props.inpName }}</p>
    <p>Value: {{ props.inpValue[inpName] }}</p> -->
</template>

<style scoped>
.EditableTableInput {
  width: calc(100%);
  height: calc(100%);
  transform: translateY(-1px);
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
}

.EditableTableInput:focus {
  outline: none;
  border: none;
  background-color: #cae1fa;
}
</style>
