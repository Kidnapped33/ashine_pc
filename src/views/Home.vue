<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="400px" class="menu">
          menu

            <el-col :span="12">
              <!-- <h5 class="mb-2">Default colors</h5> -->
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                  </template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-menu-item-group>
                  <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                  <el-icon><icon-menu /></el-icon>
                  <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon><setting /></el-icon>
                  <span>Navigator Four</span>
                </el-menu-item>
              </el-menu>
            </el-col>
        </el-aside>
        <el-container class="container">
          <el-header class="nav">Header</el-header>
          <el-main class="main">Main</el-main>
          <el-footer class="footer">Footer</el-footer>
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
.menu {
  // background-color: pink;
}

.container {
  border:10px solid red;
  background-color: #fff;
  display: flex;
}
.nav {
  background-color: rgb(218, 214, 139);
}
.main {
  background-color: rgb(113, 113, 221);
  height: 750px;
}
.footer {
  background-color: blueviolet;
}
</style>
