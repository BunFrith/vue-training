<template>
  <section class="main">
    <div class="container">
        <div class="main__title">
          <h1>Hi, I'm Serge Solomko</h1>
          <p>a Front-End Developer</p>
        </div>
    
      <a href="#about" class="main__scroll animate__animated animate__bounce animate__infinite" id="main__scroll">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>  
      </a>
    </div>
  </section>
</template>


<script>
export default {
}
</script>

<style scoped lang="sass">
  .main
    position: relative
    background-blend-mode: darken
    background-color: rgba(0,0,0,.5)
    min-height: 100vh
    background-image: url('../../assets/img/main-bg.jpg')
    background-size: cover
    background-repeat: no-repeat
    display: flex
    align-items: center
    justify-content: center
    &__title
      color: #fff
      font-family: 'Qwigley', cursive
      text-align: center
      & h1 
        font-weight: 900
        font-size: 100px
        text-shadow: -5px 6px 1px rgba(0, 0, 0, 0.8)
        margin-bottom: 1%
      & p
        text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5)
        font-size: 50px
    &__scroll
      text-decoration: none
      color: #fff
      position: absolute
      bottom: 20px
      left: calc(50% - 20px)
      padding: 10px
      & svg
        width: 20px
        height: 20px
</style>