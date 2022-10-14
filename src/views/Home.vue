<template>
  <div class="yyy">
    <div class="common-layout">
      <el-container>
        <el-aside class="menu">
          <!-- <h5 class="mb-2">Default colors</h5> -->
          <el-menu
            active-text-color="#a018ac"
            background-color="#ecdff0"
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>menu 1</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">menu 1-1</el-menu-item>
                <el-menu-item index="1-2">menu 1-2</el-menu-item>
                <el-menu-item index="1-3">menu 1-3</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>menu 2</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>menu 3</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container class="container">
          <el-header class="nav">
            <router-link to="/" style="color: #a018ac">
              <el-button
                style="
                  color: aliceblue;
                  background-color: #a018ac;
                  border: none;
                "
                >退出登录</el-button>
            </router-link>
          </el-header>
          <el-main class="main">Main</el-main>
          <!-- <el-footer class="footer">Footer</el-footer> -->
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.yyy {
  height: 100vh;
}
.menu {
  background-color: #ecdff0;
  // color: #a018ac;
  border: 1px solid #ecdff0;
}

.container {
  // border: 1px solid red;
  background-color: #ecdff0;
  display: flex;
  height: 100vh;
}
.nav {
  // background-color: rgb(218, 214, 139);
  display: flex;
  justify-content: end;
  align-items: center;
}
.main {
  background-color: #a018ac;
  color:#ecdff0
  // height: 750px;
  // flex-grow: 1;
}
// .footer {
//   background-color: blueviolet;
// }
</style>
