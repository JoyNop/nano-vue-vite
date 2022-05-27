<template>
  <a-config-provider :locale="zh_CN">
    <!-- <h1 @click="text">4444</h1> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive> <component :is="Component" :key="route.path" /></keep-alive>
    </router-view>
  </a-config-provider>
</template>

<script lang="ts" setup>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import * as dayjs from "dayjs";
import "dayjs/locale/zh-cn"; // import locale
dayjs.locale("zh-cn"); // use locale
</script>
