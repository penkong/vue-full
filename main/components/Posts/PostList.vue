<template>
  <div>
    <section class="intro">
      <h1>Get the Latest tech news</h1>
    </section>
    <section class="featured-posts">
      <PostPreview id="1" thumbnial="link" title="hello" previewText="sth" />
      <PostPreview id="2" thumbnial="link" title="helld" previewText="sth2" />
      <PostPreview id="3" thumbnial="link" title="he" previewText="sth3" />
      <PostPreview id="4" thumbnial="link" title="hell" previewText="sth4" />
    </section>
  </div>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

