<template>
  <section id="about">
    <div class="section__headers">
      <h2>About Me</h2>
      <p>Get to know me better!</p>
    </div>
    <div class="container">
      <div class="about">
        <div class="col-12 col-md-3">
          <div class="photo">
            <img src="../../assets/img/my_photo.jpg" alt="">
          </div>
        </div>
        <div class="col-12 col-md-7">
          <div class="info">
            <h3>I'm a Front End Developer based in Zhovti Vody. Ukraine.</h3>
            <p>I focused on crafting clean & user-friendly experiences.</p>
            <p>My major focus is on designing web, mobile & tablet interfaces.</p>
            <p>I use Flexbox, Grid, Bootstrap 3/4, SASS, jQuery and VSCode editor.</p>
            <p>Also have an experience in creating web designs in Photoshop & Figma.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
  #about
    background-color: #fff
    padding: 50px
  .about
    margin-top: 30px
    display: flex
    align-items: center
    justify-content: center
    & .info
      & h3
        font-family: "Montserrat", sans-serif
        font-size: 2.2rem
        font-weight: 700
        color: #333
        margin-bottom: 1rem
      & p
        padding: .5rem 0
        margin: 0
        font-family: "Montserrat", sans-serif
        font-size: 1.6rem
        font-weight: 400
        color: #555555
    & .photo
      
      display: flex
      justify-content: center 
      align-items: center
      overflow: hidden
      & img
        object-fit: cover
        width: 220px
        height: 220px
        border-radius: 50%
</style>