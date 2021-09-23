<template>
  <section id="contact">
    <div class="section__headers">
      <h2>Contacts</h2>
      <p>Let's make something special together!</p>
    </div>
    <div class="container">
      <div class="contact">
        <form class="col-md-6 contact-form">
          <input type="text" name="name">
          <input type="email" name="mail">
          <textarea name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <div class="col-md-6 contact-socials">
          <ul>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
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
  .section__headers p 
    color: #fff

  #contact
    height: 100vh
    background: url('../../assets/img/contacts-bg.jpg') rgba(0, 0, 0, .5) no-repeat top/cover
    background-blend-mode: darken
    padding: 30px 0

  .contact
    display: flex
    background-color: #333
    border-radius: 20px 
    padding: 50px
    &-form
      display: flex
      flex-direction: column
    
</style>