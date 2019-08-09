import Vuex from 'vuex';
import axios from 'axios';

// it must be callable by nuxt then we use func form
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPost: {}
    },
    mutations: {
      // payload
      setPosts:(state, posts) => state.loadedPost = posts 
    },
    actions: {
      // for next time after first load up cause we don't refetch again and again
      // it only run on server one time
      nuxtServerInit(vueContext, context /*come from fetch and asyn */){
          //cl context >> we take all info from context not route here because when it load there is no app.
          //asyncData run on sever not on spa
          // if (context.store.state.loadedPost.length > 0) {
          //   // if we had already fill up store.
          //   return null;
          // }
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     // its created before there is a 'this'
        //     vueContext.commit('setPosts', [
        //         {
        //           id: "1",
        //           title: "first",
        //           previewText: "this is first",
        //           thumbnail: "http://www.google.com"
        //         },
        //         {
        //           id: "2",
        //           title: "sec",
        //           previewText: "this is first",
        //           thumbnail: "http://www.google.com"
        //         }
        //       ]
        //     );    
        //     resolve();
        //   }, 1500);
        // })
        return axios.get('firebase url/ posts.json',).then(res => {
          const postArr = [];
          for (const k in res.data) {
            postArr.push({...res.data[key], id: key});
          }
          vueContext.commit('setPosts', postArr);
        }).catch(e => context.error(e));
      },
      // vuexContext
      setPosts:({commit}, posts) => commit('setPosts', posts)
      
    },
    getters: {
      loadedPost:(state) => state.loadedPost
    }
  })
}

export default createStore;
// nuxt auto inject all state and store to comps