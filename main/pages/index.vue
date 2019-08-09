<template>
  <div class="home-page">
    <PostList :posts="loadedPost" />
  </div>
</template>

<script>
import PostList from "~/components/PostList.vue";

export default {
  components: {
    PostList
  },
  // data() {
  //   return {

  //   };
  // },
  // executed on server => wait task finish
  // we only use this methods on pages.
  // cant use normal data flow it override it.
  // instead of created , it come by nuxt for first load page in server ssr
  // exec callback when fechdata done
  asyncData(context, callback) {
    //cl context >> we take all info from context not route here because when it load there is no app.
    //asyncData run on sever not on spa
    setTimeout(() => {
      // its created before there is a 'this'
      callback(null, {
        loadedPost: [
          {
            id: "1",
            title: "first",
            previewText: "this is first",
            thumbnail: "http://www.google.com"
          },
          {
            id: "2",
            title: "sec",
            previewText: "this is first",
            thumbnail: "http://www.google.com"
          }
        ]
      });
    }, 1500);
  },
  created() {}
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