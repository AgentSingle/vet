<template>
  <div class="detail__editor__icon-holder icon-holder">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="dimension"
      :height="dimension"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
      class=""
    >
      <g>
        <path
          d="M414.59 152H97.41c-.327 3.899-1.505-16.923 21.46 327.57 1.21 18.18 16.44 32.43 34.67 32.43h204.92c18.23 0 33.46-14.25 34.67-32.43 22.985-344.79 21.78-323.75 21.46-327.57zm-221.2 295.94c-8.882.756-16.564-5.803-17.33-14.55l-16-184c-.77-8.81 5.75-16.56 14.55-17.33 8.8-.76 16.56 5.75 17.33 14.55l16 184c.77 8.81-5.75 16.56-14.55 17.33zM272 432c0 8.84-7.16 16-16 16s-16-7.16-16-16V248c0-8.84 7.16-16 16-16s16 7.16 16 16zm79.94-182.61-16 184c-.72 8.33-7.71 14.61-15.92 14.61-9.455 0-16.773-8.083-15.96-17.39l16-184c.77-8.8 8.52-15.31 17.33-14.55 8.8.77 15.32 8.52 14.55 17.33zM421.25 56h-77.37c.162-2.105.12-.532.12-21.25C344 15.59 328.41 0 309.25 0h-106.5C183.59 0 168 15.59 168 34.75c0 20.318-.043 19.137.12 21.25H90.75C71.59 56 56 71.59 56 90.75c0 28.583-.045 27.228.11 29.25h399.78c.157-2.053.11-.832.11-29.25C456 71.59 440.41 56 421.25 56zM312 53.25c0 1.52-1.23 2.75-2.75 2.75h-106.5c-1.52 0-2.75-1.23-2.75-2.75v-18.5c0-1.52 1.23-2.75 2.75-2.75h106.5c1.52 0 2.75 1.23 2.75 2.75z"
          :fill="iconColor"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  </div>
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
