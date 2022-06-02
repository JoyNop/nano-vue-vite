<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" @collapse="onCollapse" collapsible :width="246">
      <div class="logo">
        <span v-if="!collapsed">多邦爆破管理</span>
      </div>
      <base-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <div class="layout-r-tool">
          <a-avatar shape="square" class="layout-avatar" :src="useStore.user().userInfo?.avatar">
            {{ useStore.user().userInfo?.nickname }}
          </a-avatar>

          <a-button type="text" title="退出登录" @click="userLogout"> <logout-outlined /></a-button>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <!-- <bread-crumb /> -->
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view v-slot="{ Component }">
            <Transition name="zoom-fade" mode="out-in" appear>
              <component :is="Component" />
            </Transition>
          </router-view>
        </div>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">
        多邦爆破运维管理系统 ©{{ new Date().getFullYear() }} Created by HanRui
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue"
// import BreadCrumb from "@/layout/BreadCrumb.vue";
import BaseMenu from "@/layout/BaseMenu.vue"
import { useAppStore } from "@/store/modules/app"
import { storeToRefs } from "pinia"
import { LogoutOutlined } from "@ant-design/icons-vue"
import { useUserStore } from "@/store/modules/user"
import { useStore } from "@/store"
const appStore = useAppStore()

const { collapsed } = storeToRefs(appStore)

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type)
}

const userLogout = () => {
  console.log("title logout")

  useStore.user().userLogout()
}
</script>

<style lang="less" scoped>
.layout-avatar {
  // background-color: @primary-color!important;
}
.layout-r-tool {
  display: flex;
  align-items: center;
}
.layout-header {
  background: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.5s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}
</style>
<style>
.logo {
  height: 32px;
  margin: 16px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.site-layout .site-layout-background {
  background: #fff;
}
.site-layout .site-layout-background {
  background: #141414;
}
</style>
