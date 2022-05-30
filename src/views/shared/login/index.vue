<template>
  <div class="login-container">
    3asdfasd
    <input v-model="text" />
    <p>
      {{ text }}
    </p>
    <a-button @click="login">denglu</a-button>
    <div class="login-header"></div>
  </div>
</template>

<script lang="ts" setup>
const text = ref("http://auth.duobanginfo.com:7878?clientId=blast")

const login = () => {
  console.log(123)

  window.location.href = text.value
}
</script>
