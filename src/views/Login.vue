<template>
  <div class="login_wrapper">
    <div class="contain">
      <el-form :model="form" label-width="120px">
        <el-form-item label="账号：">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });

    const onSubmit = () => {
      console.log("submit!");
    };

    return { form, onSubmit };
  },
});
</script>

<style scoped lang="scss">
.login_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
  
  > .contain {
    border: 1px solid rgb(223, 216, 216);
    border-radius: 10px;
    width: 20%;
    padding: 45px 70px 20px 0;
  }
}
</style>
