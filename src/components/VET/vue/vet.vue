<script setup>
import { ref, onMounted } from "vue";
import veTableHeading from "./veTableHeading.vue";
import vetInput from "./vetInput.vue";
let tableGridStyle = ref("100px 1fr 1fr 1fr 1fr");
let tableMinWidth = ref("800px");
let vetTableHeaderItems = ref([]);

let props = defineProps({
  VetHederItems: Object,
  VetDimensions: Object,
  vetDefaultItems: Object,
  vetData: Object,
});

onMounted(() => {
  if (props.vetDefaultItems) {
    let dD = props.vetDefaultItems; // default data

    // MINIMUM WIDHT-SETUP OF THE SCROLLABLE TABLE
    let sumMinDimensions = dD.reduce((acc, obj) => acc + obj.minDimension, 0);
    tableMinWidth.value = `${sumMinDimensions}px`;

    // GIVING DIMENSION TO EACH INDIVIDUAL TABLE ROW
    tableGridStyle.value = dD.map((value) => `${value.dimension}`).join(" ");

    // CREATE HEADER TABLE NAME
    vetTableHeaderItems.value = dD.map((obj) => obj.name);
  }
});
</script>

<template>
  <div class="vetDataDisplayContainer">
    <!-- TABEL HEADING CONTAINER -->
    <div class="vetHeading" :style="{ 'min-width': tableMinWidth }">
      <veTableHeading
        :HeaderItems="vetTableHeaderItems"
        :tableGridStyle="tableGridStyle"
      ></veTableHeading>
    </div>

    <!-- TABEL BODY CONTAINER -->
    <div class="vetBody" :style="{ 'min-width': tableMinWidth }">
      <!-- TABLE INDIVIDUAL ROW -->
      <div v-for="data in props.vetData" v-bind:key="data.id" class="vetBodyContent">
        <div class="vetTableWrapper" :style="{ 'grid-template-columns': tableGridStyle }">
          <!-- TABLE INDIVIDUAL CELL -->
          <div
            v-for="(item, index) in vetTableHeaderItems"
            :key="index"
            class="vetTableContent"
          >
            <!-- {{ data[vetDefaultItems[index].dataName] }} -->
            <!-- {{ props.vetDefaultItems[index].dataName}} -->
            <!-- {{ props.vetDefaultItems[index].isEditable}} -->
            <span v-if="props.vetDefaultItems[index].isEditable">
              <vetInput
                :inpRowId="data.id"
                :inpCellId="index"
                :inpType="props.vetDefaultItems[index].inpType"
                :inpName="vetDefaultItems[index].dataName"
                :inpValue="data"
              ></vetInput>
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
  padding: 1px;
}
</style>
