<template>
  <div class="login-container">
    <div class="login-header"></div>

    <div class="login-card">
      <div class="login-l">
        <img
          src="../../../assets/login-bg.png"
          alt=""
          srcset=""
          style="width: 60%"
        />
      </div>
      <div class="login-r">
        <div class="login-form">
          <div class="login-title">多邦爆破运营管理</div>
          <a-form
            :model="formState"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
          >
            <a-form-item
              name="phone"
              :rules="[{ required: true, message: '请输入用户名' }]"
            >
              <a-input v-model:value="formState.phone">
                <template #prefix>
                  <UserOutlined />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
              name="password"
              :rules="[{ required: true, message: '请输入密码' }]"
            >
              <a-input-password v-model:value="formState.password">
                <template #prefix>
                  <LockOutlined />
                </template>
              </a-input-password>
            </a-form-item>

            <a-button
              style="width: 100%; border-radius: 6px"
              type="primary"
              html-type="submit"
              >登录</a-button
            >
          </a-form>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div>版权所有 Copyright ©山东大学 山东多邦汇德信息技术有限公司</div>
      <div>
        <a
          style="color: #999999"
          href="http://beian.miit.gov.cn/"
          target="_blank"
          >鲁ICP备19028873号-4</a
        >
      </div>
      <div>core: {{ core }}</div>
    </div>
  </div>
</template>
<script lang="ts">
interface FormState {
  phone: string;
  password: string;
  remember: boolean;
}
</script>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRaw } from "vue";
import * as api from "@/api/account";
import { useUserStore } from "@/store/modules/user";
import { LockOutlined, BugOutlined, UserOutlined } from "@ant-design/icons-vue";
const userStore = useUserStore();
const core = ref();
const formState = reactive<FormState>({
  phone: "",
  password: "",
  remember: true,
});

console.log(import.meta.env);

const onFinish = async (values: any) => {
  console.log("Success:", values);

  console.log(import.meta.env);
  userStore.loginByUserName(toRaw(values));
  const a = userStore.getToken;
  console.log(a, 2222);

  // console.log(import.meta.glob());
  // await api.userLoginByName(toRaw(values));
  // console.log(import.meta.glob);
};

onMounted(() => {
  core.value = import.meta.env.VUE_APP_BUILD_TIME || "测试版本";
});
</script>

<style lang="less">
.login-footer {
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  color: #999999;
}
.login-container {
  // width: 100%;
  background-color: #f7faff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-form {
  // height: 500px;
  width: 350px;
}
.login-card {
  // background-color: rgb(127, 130, 134);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.login-title {
  font-size: 28px;
  font-weight: 500;
  color: #e6aa52;
  text-align: center;
  padding: 0 0 15px 0;
}
.login-l {
  width: 636px;
  height: 550px;
  box-shadow: -2px 2px 5px 0px rgba(47, 63, 86, 0.69);
  border-radius: 20px;
  transform: translateX(7.5px);
  background: linear-gradient(90deg, #496fa3 0%, #2f3f56 100%);
  // background-image: url(../../../assets/login-bg.png);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-r {
  width: 568px;
  height: 568px;
  background: #ffffff;
  box-shadow: -7px 2px 10px 0px rgba(47, 63, 86, 0.37);
  border-radius: 20px;
  transform: translateX(-7.5px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
