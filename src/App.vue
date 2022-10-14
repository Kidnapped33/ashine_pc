<script setup lang="ts">
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
</script>

<template>
  <div class="xxx">
    <!-- <router-link to="/Home">主页</router-link> -->
    <!-- | -->
    <!-- <router-link to="/">退出登录</router-link> -->
    <router-view></router-view>
  </div>
  
</template>

<style scoped lang="scss">
.xxx{
  // border: 1px solid red;
  // height: 100vh
}

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
