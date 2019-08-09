<template>
  <div class="container">
    <h1>hello from nuxt</h1>
    <a href="/users">users</a>
    <!-- <router-link></router-link> -->
    <nuxt-link to="/users">USERS</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
