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
          <div v-if="fieldErrors.name" class="form-alert form-error">{{fieldErrors.name}}</div>
          <div class="input-container border-right">
            <input class="input-field" type="text" placeholder="Email" name="email" autocomplete="chrome-off"/>
            <i class="fa fa-envelope-o fa-input-icon"></i>
          </div>
          <div v-if="fieldErrors.email" class="form-alert form-error">{{fieldErrors.email}}</div>
          <div class="input-container border-right">
            <input class="input-field" type="text" placeholder="Phone" name="phone" autocomplete="chrome-off"/>
            <i class="fa fa-mobile fa-input-icon"></i>
          </div>
          <div v-if="fieldErrors.phone" class="form-alert form-error">{{fieldErrors.phone}}</div>
          <div class="input-container border-right">
            <textarea class="input-field" placeholder="Message" name="message" rows="5"></textarea>
            <i class="fa fa-comments-o fa-input-icon self-center-y"></i>
          </div>
          <div v-if="fieldErrors.message" class="form-alert form-error">{{fieldErrors.message}}</div>
          <div class="input-container">
            <input class="btn w-100" type="submit" title="Submit" name="contact-submit" @click="processForm"/>
          </div>
          <div v-for="(msg, key) in formMessage" :key="key" :class="key">{{msg}}</div>
        </form>
      </div>
    </div>
</template>

<script>
import {sendMail} from '../assets/js/mailHandler.js';
//import {useAsync} from "vue-async-function";

export default {
  name: 'ContactForm',
  props: {
    title: String,
    subheading: String
  },
  data() {
    return{
      fieldErrors: {},
      formMessage: {},
    }
  },
  methods: {
    processForm: function(e){
      e.target.closest('form').classList.add("loading");
      e.preventDefault();
      sendMail(e.target.closest('form')).then((response) => {
        this.processResponse(response);
        console.log(JSON.stringify(response));
        e.target.closest('form').classList.remove("loading");
      }).catch((response) => {
        this.processResponse(response);
        console.log("Error: " + JSON.stringify(response));
      });
    },
    processResponse: function(response){
      if (response.statusCode != 200){
        if ("field_errors" in response){
          this.fieldErrors = response.field_errors;
        }
        if ("error" in response){
          this.formMessage = {"error": response.error};
        }
        if ("message" in response && response.statusCode != 1001){
          this.formMessage = {"info": response.message};
        }
      }else{
        this.fieldErrors = {};
        this.formMessage = {"success": response.body};
      }
    },
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