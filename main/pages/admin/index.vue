<template>
  <div class="admin-page">
    <section class="new-post">
      <button>create post</button>
    </section>
    <section class="existing-post">
      <button @click="$router.push('/admin/new-post')">existing-post</button>
      <PostList isAdmin />
    </section>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList";
export default {
  layout: "admin",
  components: {
    PostList,
    AppButton
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>