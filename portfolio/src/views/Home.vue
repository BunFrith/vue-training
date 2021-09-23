<template>
  <div>
    <Header />
    <MainDisplay />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header';
import MainDisplay from '@/components/MainPage/MainDisplay';
import About from '@/components/MainPage/About'
import Skills from '@/components/MainPage/Skills'
import Projects from '@/components/MainPage/Projects'
import Contact from '@/components/MainPage/Contact'


export default {
  name: 'Home',
  components: {
    Header,
    MainDisplay,
    About,
    Skills,
    Projects,
    Contact
  }
}
</script>
