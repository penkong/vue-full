<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostFrom />
    </section>
  </div>
</template>

<script>
import AdminPostFrom from "~/components/Admin/AdminPostFrom";
import AppButton from "~/components/UI/AppButton";
export default {
  components: {
    AdminPostFrom
  }
};
</script>

<style scoped>
</style>