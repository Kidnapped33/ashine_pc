<template>
  <div class="login_wrapper">
    <div class="contain">
      <el-form
        :model="form"
        label-width="120px"
        :rules="rules"
        ref="ruleFormRef"
      >
        <el-form-item label="账号：" prop="name">
          <el-input v-model="form.name" clearable placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="form.password"
            clearable
            type="password"
            placeholder="请输入密码"
            show-password
            maxlength="6"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { FormInstance, FormRules } from "element-plus";
import form from "element-plus/es/components/form";
import { defineComponent, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const form = reactive({
      name: "",
      password: "",
    });

    const ruleFormRef = ref<FormInstance>();

    const rules = reactive<FormRules>({
      name: [
        { required: true, message: "请输入账号rules", trigger: "blur" },
        { min: 3, max: 5, message: "账号需要3-5个字", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码rules", trigger: "blur" },
        { min: 6, max: 6, message: "密码是6位数", trigger: "blur" },
      ],
    });

    /**登录验证 */
    const loginToken = () => {
      return "ashineToken";
    };

    const onSubmit = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!=====true=", valid);
          //存储token
          window.localStorage.setItem("token", loginToken());
          const xxx = window.localStorage.getItem("token");
          console.log("ttttttt", xxx);
          //跳转到主页
          console.log("useRoute", route);
          console.log("useRouter", router);
          console.log("111");
          router.push("/Home");
          console.log("222");
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    return { form, onSubmit, rules, ruleFormRef };
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
