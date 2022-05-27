<template>
  <a-menu
    theme="dark"
    mode="inline"
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
  >
    <a-sub-menu v-for="item1 in baseLayoutMenu" :key="item1.path">
      <template #icon>
        <component :is="getIcon(item1.meta?.icon)" />
      </template>
      <template #title>
        <!-- <component :is="item1.meta?.icon" /> -->
        {{ item1.meta?.title }}
      </template>
      <a-menu-item
        v-for="item2 in item1.children"
        :key="item1.path + '/' + item2.path"
        @click="clickMenu(item1.path + '/' + item2.path)"
      >
        <template #icon>
          <component :is="getIcon(item2.meta?.icon)" />
        </template>
        {{ item2.meta?.title }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
import { baseLayoutMenu } from "./menu";
import {
  BlockOutlined,
  BuildOutlined,
  UserOutlined,
  TeamOutlined,
  BarsOutlined,
  BugOutlined,
  AndroidOutlined,
} from "@ant-design/icons-vue";
import { computed, onMounted, ref } from "vue";

import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
// const selectedKeys = ref<string[]>([]);
const openKeys = computed(() => baseLayoutMenu.map((i:any) => i.path));
// const openKeys = ref<string[]>([]);
const selectedKeys = computed(() => [route.path]);
const getIcon = (icon: any) => {
  switch (icon) {
    case "user-outlined":
      return UserOutlined;
    case "team-outlined":
      return TeamOutlined;
    case "bars-outlined":
      return BarsOutlined;
    case "block-outlined":
      return BlockOutlined;
    case "build-outlined":
      return BuildOutlined;
    case "bug-outlined":
      return BugOutlined;
    case "android-outlined":
      return AndroidOutlined;
    default:
      return UserOutlined;
  }
};

const clickMenu = (url: string) => {
  console.log(url);
  router.push(url);
};
// onMounted(() => {
//   const keys = [];
//   for (const biz of bizRouter) {
//     keys.push(biz.path);
//   }
//   openKeys.value = keys;

//   console.log(openKeys.value, selectedKeys.value);
// });
</script>
