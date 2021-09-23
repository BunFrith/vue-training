<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="logo col-2">
          <img src="../assets/img/logo.png" alt="" />
        </div>

        <ul class="navigation col-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>

        <ul class="socials col-2">
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="sass">
header
  background-color: rgba(0,0,0,.2)
  position: fixed
  width: 100%
  left: 0
  top: 0
  box-shadow: 0px 0px 5px #000

.header
  height: 65px
  display: flex
  align-items: center
  & ul
    margin: 0

  & .logo
    & img
      height: 50px
      object-fit: cover

  & ul.navigation
    height: 100%
    display: flex
    align-items: center
    & li
      list-style: none
      margin: 0 10px
      & a
        color: #fff
        text-decoration: none
        padding: 10px
  & ul.socials
    height: 100%
    display: flex
    align-items: center
</style>
