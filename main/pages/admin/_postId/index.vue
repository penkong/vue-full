<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostFrom :post="loadedPost" />
    </section>
  </div>
</template>



<script>
import AdminPostFrom from "~/components/Admin/AdminPostFrom";
export default {
  components: {
    AdminPostFrom
  },
  data() {
    return {
      loadedPost: {
        author: ",kz",
        title: "my",
        content: "amaze",
        thumbnialLink: "https://www.google.com"
      }
    };
  }
};
</script>

<style scoped>
</style>