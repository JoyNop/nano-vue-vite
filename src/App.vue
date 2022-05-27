<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
import { Button } from "ant-design-vue"
</script>

<template>
  <header>
    <a-button type="primary">Primary Button</a-button>
    <Button>asdfsdf</Button>
    <div class="hello">
      <div class="world">adsfasf</div>
    </div>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="less">
.hello {
  .world {
    color: red;
  }
}
</style>
