<template>
  <section id="projects">
    <div class="section__headers">
      <h2>Projects</h2>
      <p>Take a look at my projects</p>
    </div>
    <div class="container">
      <div class="projects">
        <div class="projects__item" v-for="post in allPosts" :key="post.id">
          <a :href="post.demo_link" target="_blank"></a>
          <div class="projects__item-img" :style="{background: inlineBg(post.thumbnail_url)}">
          </div>
          <div class="projects__item-content">
            <h4>{{ post.title }}</h4>
            <span>({{ appendTech(post.whatUsed) }})</span>
            
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
// import server from '@/server'
import { mapGetters, mapActions } from 'vuex'


export default {
  data(){
    return {
      posts: null,
      page: 2,
      totalPages: this.totalPages
    }
  },

  computed: {
    ...mapGetters(["allPosts", "totalPages"]),
    loading(){
        return this.posts === null;
    }
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    appendTech: ( arr ) => {
      let technologies = arr.map(tech => tech.value);
      return technologies.join(', ');
    },
    inlineBg: (media_link) => {
      return 'url(' + media_link + ') no-repeat top/cover'
    },

  },
  mounted(){
    this.fetchPosts({curPage: 1, perPage: 3})
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