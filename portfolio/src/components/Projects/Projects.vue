<template>
  <section id="projects">
    <div class="section__headers">
      <h2>Projects</h2>
      <p>Take a look at my projects</p>
    </div>
    <div class="container">
      <div class="projects">
        <div class="projects__item" v-for="(post, index) in posts" :key="index">
          <a :href="post.demo_link" target="_blank"></a>
          <div class="projects__item-img" :style="{background: post.thumbnail_url}">
          </div>
          <div class="projects__item-content">
            <h4>{{ post.title }}</h4>
            <span>({{ post.whatUsed }})</span>
            
            
          </div>
        </div>
      </div>
      <Pagination :totalPages='totalPages' @newpage="gotopage"/>
      {{ page }}
    </div>
  </section>
</template>

<script>
// import server from '@/server'
import axios from '@/server'
import Pagination from './Pagination'



export default {
  data(){
    return {
      posts: [],
      page: this.$route.params.page || 1,
      perPage: 3,
      totalPages: null
    }
  },
  components: {
    Pagination
  },
  computed: {
    changePage(){
      return this.page
    }
  },
  methods: {
    appendTech: ( arr ) => {
      let technologies = arr.map(tech => tech.value);
      return technologies.join(', ');
    },
    inlineBg: (media_link) => {
      return 'url(' + media_link + ') no-repeat top/cover'
    }, 
    gotopage(index){
      this.page = index
    },
    async getPosts(per, page){
      this.posts = await axios.get(`/wp/v2/works?per_page=${per}&page=${page}`)
      .then( response => {
          this.totalPages = response.headers['x-wp-totalpages'];
          return response.data
        } )
      .then( response => response.map( post => ({
        id: post.id,
        title: post.title.rendered, 
        whatUsed: this.appendTech(post.acf.what_used),
        thumbnail_url: this.inlineBg(post.better_featured_image.source_url),
        demo_link: post.acf.demo_link,
      })))
      .catch( response => console.log(response) )
    }
  },
  mounted(){
    this.getPosts( this.perPage, this.page )
  },  
  created() {
    
  },

  watch: {
    page: function(){
      this.getPosts( this.perPage, this.page )
    }
  }
  
}

</script>

<style lang="sass" scoped>
#projects
  padding: 30px 0
  background-color: #fff
.projects
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  &__item
    width: 340px
    margin: 30px
    cursor: pointer
    position: relative

    &:hover 
      & .projects__item-img
        background-position: bottom center !important
    & a 
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 1
    &-img
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3)
      transition: 3s all ease-in-out
      position: relative
      width: 340px
      height: 500px
    &-content
      text-align: center
      & h4
        font-size: 2rem
        text-transform: uppercase
        font-family: 'Raleway', sans-serif
        letter-spacing: 2px
        margin: 0
        margin-top: 1.5rem
        font-weight: 600
        color: #a18b72
      & span 
        font-size: 1.2rem
        color: #555
        font-family: 'Raleway', sans-serif
</style>