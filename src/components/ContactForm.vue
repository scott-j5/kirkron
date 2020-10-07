<template>
    <div class="fill flex-y content-center-xy" id="contact-form-container">
      <div class="w-66">
        <form id="contact-us-form" action="" method="POST" autocomplete="chrome-off">
          <h1 class="no-m-t">{{title}}</h1>
          <p>{{subheading}}</p>
          <div class="input-container border-right">
            <input class="input-field" type="text" placeholder="Name" name="name" autocomplete="chrome-off"/>
            <i class="fa fa-user-o fa-input-icon"></i>
          </div>
          <div class="input-container border-right">
            <input class="input-field" type="text" placeholder="Email" name="email" autocomplete="chrome-off"/>
            <i class="fa fa-envelope-o fa-input-icon"></i>
          </div>
          <div class="input-container border-right">
            <input class="input-field" type="text" placeholder="Phone" name="phone" autocomplete="chrome-off"/>
            <i class="fa fa-mobile fa-input-icon"></i>
          </div>
          <div class="input-container border-right">
            <textarea class="input-field" placeholder="Message" name="message" rows="5"></textarea>
            <!--<input class="input-field" type="text" placeholder="Message" name="message"/>-->
            <i class="fa fa-comments-o fa-input-icon self-center-y"></i>
          </div>
          <div class="input-container">
            <input class="btn w-100" type="submit" title="Submit" name="contact-submit"/>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    title: String,
    subheading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.w-70{
  width: 70%;
}

#contact-form-container{
  color: $white;
  @include linear-gradient-bg(bottom right);
  box-shadow:0px 0px 30px rgba(0,0,0,0.5);
}
</style>