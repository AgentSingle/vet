<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="dimension"
    :height="dimension"
    x="0"
    y="0"
    viewBox="0 0 43.349 43.349"
    style="enable-background: new 0 0 512 512"
    xml:space="preserve"
    fill-rule="evenodd"
  >
    <g>
      <path
        fill="#545454"
        d="M18.795 40.467C8.429 40.467.003 32.04.003 21.675S8.429 2.883 18.795 2.883c5.218 0 10.083 2.08 13.68 5.887a.465.465 0 0 1 .045.602l1.103 1.442c.21-.108.484-.085.65.178 2.186 3.137 3.314 6.84 3.314 10.682 0 10.366-8.426 18.793-18.792 18.793zm0-3.879c-8.215 0-14.914-6.699-14.914-14.913S10.58 6.76 18.795 6.76c3.913 0 7.615 1.516 10.4 4.23a.468.468 0 0 1 .044.663l1.396 1.733c.213-.125.508-.113.676.143 6.338 9.646-.54 23.058-12.516 23.058z"
        opacity="1"
        data-original="#545454"
      ></path>
      <path
        :fill="iconColor"
        d="M19.289 31.335a.502.502 0 0 1-.459-.317c-.035-.07-3.067-7.898-7.756-10.86-.917-.564-1.622-1.163-1.34-2.503.282-1.304 1.163-2.045 2.75-2.397 2.82-.6 5.853 3.772 6.98 5.57 3.95-5.746 11.847-14.772 23.341-15.83.554-.065.76.757.247.987-.176.07-16.606 7.58-23.27 25.068a.563.563 0 0 1-.493.282z"
        opacity="1"
        data-original="#00b42c"
      ></path>
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
let props = defineProps({
  iconColor: String,
  dimension: Number,
});
let dimension = ref(30);
onMounted(() => {
  if (props.dimension != undefined) {
    dimension.value = props.dimension;
  }
});
</script>
