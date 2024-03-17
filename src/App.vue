<script setup>
import Home from '@/components/Home.vue';
</script>

<template>
  <header>VET (vue editable table)</header>
  <section>
    <Home></Home>
  </section>
</template>

<style scoped>
header{
  position: fixed;
  left: 0;
  top: 0;
  height: 50px;
  width: 100vw;
  background-color: #430C9D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
}
section{
  height: calc(100vh - 50px);
  top: 50px;
  left: 0;
  width: 100vw;
  position: fixed;
  background-color: white;
}
</style>
