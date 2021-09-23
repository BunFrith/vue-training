<template>
  <ul>
    <li @click="changepage(Number(this.$route.params.page) - 1)"><router-link :to="'/projects/' + (Number(this.$route.params.page) - 1)"> &lt;-</router-link></li>
    <li v-for="(page, index) of new Array(Number(totalPages))" :key="index" @click="changepage(index + 1)"> <router-link :to="'/projects/' + (index+1)">{{index+1}}</router-link> </li>
    <li @click="changepage(Number(this.$route.params.page) + 1)"><router-link :to="'/projects/' + (Number(this.$route.params.page) + 1)"> -&gt;</router-link></li>
  </ul>

  
</template>

<script>
export default {
  data(){
    return {


    }
  },
  props: ['page_num', 'totalPages'],
  methods: {
    changepage(pageClicked){
      this.$emit('newpage', pageClicked)
    }
  }
  
}
</script>

<style lang="sass" scoped>
ul
  display: flex
  list-style: none
  justify-content: center
  & li
    font-size: 2rem
    padding: 5px
    margin: 10px 0
</style>