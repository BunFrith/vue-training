
export default {
  actions: {
    async fetchPosts({commit}, pageInfo = {perPage: Number, curPage: Number}){
      var allPages;
      const posts = await fetch(`http://www.bun-frith.pp.ua/wp-json/wp/v2/works?per_page=${pageInfo.perPage || 3}&page=${pageInfo.curPage || 1}`)
      .then( response => {
        allPages = response.headers['x-wp-totalpages'];
        return response.json()
      } )
      .catch( error => {
        this.dispatch('SHOW_GLOBAL_ERROR_MESSAGE', error.responce.data.message);
      });
      commit('updatePosts', posts.map(post => (
        {
          id: post.id,
          title: post.title.rendered, 
          whatUsed: post.acf.what_used,
          thumbnail_url: post.better_featured_image.source_url,
          demo_link: post.acf.demo_link,
        })),
        allPages
      )
      
    }
  },
  mutations: {
    updatePosts(state, posts, totalPages){
      state.posts = posts
      state.totalPages = totalPages
    }
  },
  state: {
    posts: [],
    totalPages: null
  },
  getters: {
    allPosts(state){
      return state.posts
    },
    totalPages(state){
      return state.totalPages
    }
  }
}