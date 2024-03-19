<script setup>
import { ref, onMounted, defineEmits } from "vue";
const emit = defineEmits(["tableDataChangeResponse"]);
import veTableHeading from "./veTableHeading.vue";
import vetInput from "./vetInput.vue";
import IconDelete from "../../VET/icon/IconDelete.vue";
import { modifyObjectById, addOrReplaceObject } from "../js/algorithm.js";
let tableGridStyle = ref("100px 1fr 1fr 1fr 1fr");
let tableMinWidth = ref("800px");
let vetTableHeaderItems = ref([]);
let chckBoxWidth = ref(40);
let defaultActionWidth = ref(40);
let isSaveButtonVisable = ref(false);

let props = defineProps({
  VetHederItems: Object,
  vetDefaultItems: Object,
  vetData: Object,
});

onMounted(() => {
  let cbWidth = chckBoxWidth.value;
  let daWidth = defaultActionWidth.value;

  if (props.vetDefaultItems) {
    let dD = props.vetDefaultItems; // default data

    // MINIMUM WIDHT-SETUP OF THE SCROLLABLE TABLE
    let sumMinDimensions = dD.reduce((acc, obj) => acc + obj.minDimension, 0);
    tableMinWidth.value = `${cbWidth + daWidth + sumMinDimensions}px`;

    // GIVING DIMENSION TO EACH INDIVIDUAL TABLE ROW
    let gridStyle = dD.map((value) => `${value.dimension}`).join(" ");
    tableGridStyle.value = `${cbWidth}px ${daWidth}px ${gridStyle}`;
    console.warn(tableGridStyle.value);

    // CREATE HEADER TABLE NAME
    vetTableHeaderItems.value = dD.map((obj) => obj.name);
    // headerItems.unshift("checkbox");
  }
});

/*
UPDATE DATA ACCORDING TO INPUT AND RETURN AN ARRAY OBJECT
1) Check if this data already present inside newly-created
array [ modifiedData ]
2) If not find anything in new-array then Find out perticular object from data-list (data array)
3) Change its value using KEY-Name
4) Store this this object inside a new array
*/
let modifiedData = ref([]);
const setChangeValue = async (e) => {
  isSaveButtonVisable.value = true; // Display Save All Button

  const idToUpdate = e.id;
  const keyToUpdate = e.key;
  const valueToUpdate = e.value;
  let previousData = props.vetData;
  let newData = modifiedData.value;

  // console.warn(props.vetData);
  // console.warn(idToUpdate, keyToUpdate, valueToUpdate);

  let respOne = await modifyObjectById(newData, idToUpdate, keyToUpdate, valueToUpdate);

  if (respOne == undefined) {
    let respTwo = await modifyObjectById(
      previousData,
      idToUpdate,
      keyToUpdate,
      valueToUpdate
    );
    modifiedData.value.push(respTwo);
  } else {
    let arrResp = await addOrReplaceObject(newData, respOne);
    modifiedData.value = arrResp;
    // console.warn(arrResp);
  }
  // console.warn(modifiedData.value);
  // emit("tableDataChangeResponse", modifiedData.value);
};

// =====================[ Handel table header response ]=====================
const tableHeaderResponse = (e) => {
  console.warn(e);
  switch (e) {
    case "SaveALL":
      isSaveButtonVisable.value = false;
      emit("tableDataChangeResponse", modifiedData.value);
      modifiedData.value = [];
      break;
    case "SelectAll":
      break;
    case "UnSelectAll":
      break;
    default:
      message = "Invalid Action!";
  }
};
</script>

<template>
  <div class="vetDataDisplayContainer">
    <!-- TABEL HEADING CONTAINER -->
    <div class="vetHeading" :style="{ 'min-width': tableMinWidth }">
      <veTableHeading
        :HeaderItems="vetTableHeaderItems"
        :tableGridStyle="tableGridStyle"
        :isSaveButtonVisable="isSaveButtonVisable"
        @tableActionResponse="tableHeaderResponse"
      ></veTableHeading>
    </div>

    <!-- ================[ TABEL BODY CONTAINER ]================ -->
    <div class="vetBody" :style="{ 'min-width': tableMinWidth }">
      <!-- TABLE INDIVIDUAL ROW -->
      <div v-for="data in props.vetData" v-bind:key="data.id" class="vetBodyContent">
        <div class="vetTableWrapper" :style="{ 'grid-template-columns': tableGridStyle }">
          <!-- STYLING INDIVIDUAL CHECKBOX -->
          <div
            class="vetTableContent"
            style="display: flex; align-items: center; justify-content: center"
          >
            <input type="checkbox" name="myCheckbox" value="yes" />
          </div>

          <!-- STYLING INDIVIDUAL DELETE ACTION BUTTON -->
          <div
            class="vetTableContent"
            style="display: flex; align-items: center; justify-content: center"
          >
            <button>
              <IconDelete :dimension="20" iconColor="#fc038c"></IconDelete>
            </button>
          </div>

          <!-- TABLE INDIVIDUAL CELL -->
          <div
            v-for="(item, index) in vetTableHeaderItems"
            :key="index"
            class="vetTableContent"
          >
            <!-- INPUT WRAPPER CONTAINER WITH INPUT COMPONENT -->
            <span v-if="props.vetDefaultItems[index].isEditable">
              <vetInput
                :inpRowId="data.id"
                :inpCellId="index"
                :inpType="props.vetDefaultItems[index].inpType"
                :inpName="vetDefaultItems[index].dataName"
                :inpValue="data"
                @retunInputValue="setChangeValue"
              >
              </vetInput>
            </span>

            <span v-else style="padding: 5px">
              {{ data[vetDefaultItems[index].dataName] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vetDataDisplayContainer {
  max-height: calc(100vh - 50px);
  overflow-x: scroll;
  overflow-y: hidden;
}

.vetHeading {
  height: 50px;
  /* background-color: blue; */
  display: grid;
  overflow-y: scroll;
  overflow-x: hidden;
  /* min-width: 800px; */
}

.vetBody {
  max-height: calc(100vh - 120px);
  /* background-color: yellow; */
  display: grid;
  overflow-y: scroll;
  overflow-x: hidden;
  /* min-width: 800px; */
}
</style>

<style scoped>
.vetTableWrapper {
  display: grid;
  text-align: left;
}

.vetTableContent {
  box-sizing: border-box;
  border: 1px solid blue;
  box-sizing: border-box;
  overflow: hidden;
}
</style>

<style scoped>
button {
  height: 30px;
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
</style>
