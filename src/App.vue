<script setup lang="ts">
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
</script>

<template>
  <div>
    <router-link to="/Home">Home</router-link>
    |
    <router-link to="/">Login</router-link>

    <router-view></router-view>

  </div>
  
</template>

<style scoped lang="scss">
.menu {
  background-color: pink;
}
.nav {
  background-color: rgb(218, 214, 139);
}
.main {
  background-color: rgb(113, 113, 221);
}
.footer {
  background-color: blueviolet;
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
