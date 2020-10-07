<template>
  <div class="contact">
    <div class="col-2 row-2-sm full-height">
      <Branding></Branding>
      <ContactForm title="Contact Us" subheading=""></ContactForm>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Branding from '@/components/Branding.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    Branding,
    ContactForm,
  }
}
</script>
