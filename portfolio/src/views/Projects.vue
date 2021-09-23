<template>
  <div>
    <Header />
    <About />

    <Projects />
  </div>
</template>


<script>

import Header from '@/components/Header'
import Projects from '@/components/Projects/Projects'
import About from '@/components/MainPage/About'


export default {
  components: {
    About, 
    Header,
    Projects
  }
}
</script>