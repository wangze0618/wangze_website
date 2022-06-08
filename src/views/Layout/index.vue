<template>
  <div class="layout">
    <div class="pattern">
      <div class="pattern pattern-diagonal-stripes-md"></div>
    </div>
    <!-- 顶栏 -->
    <Navbar></Navbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/libary/app-navbar.vue";
</script>

<style scoped lang="scss">
@keyframes move {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
.pattern {
  height: calc(5vw + 40px);
  div {
    color: rgb(102, 203, 236);
    background-color: pink;
    // animation: move 6s infinite;
  }
}
.layout {
  height: 100vh;
  background-color: #fff;
}
</style>
