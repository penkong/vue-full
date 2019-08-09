<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostFrom @submit="onSumbittd" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostFrom from "~/components/Admin/AdminPostFrom";
import AppButton from "~/components/UI/AppButton";
export default {
  components: {
    AdminPostFrom
  },
  methods: {
    onSumbittd(postData) {
      axios
        .post("firebase url/posts.json", {
          ...postData,
          updatedDate: new Date()
        })
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
  }
};
</script>

<style scoped>
</style>