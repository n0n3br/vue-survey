<template>
  <Menu></Menu>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Menu from "./components/Menu.vue";
</script>

<style scoped>
.container {
  height: calc(100vh - 72px);
  margin-top: 64px;
}
</style>