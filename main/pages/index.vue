<template>
  <div class="home-page">
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
import PostPreivew from "~/components/PostPreivew.vue";

export default {
  components: {
    PostPreivew
  }
};
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  /* url('~assets/images/main-page.jpg' */
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>