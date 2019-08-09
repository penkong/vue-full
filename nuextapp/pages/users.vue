
  <!-- we can render partial files and pages inside each other
  by using folder users and users.vue-->
<template>
  <div>
    <!-- this is users folder/index means as child -->
    <nuxt-child />
    <input type="text" v-model="userId" />
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push(`/users/${this.userId}`)
    }
  },
  // it by nuxt it look out at layout folder and use users layout
  layout: 'users'
}
</script>
