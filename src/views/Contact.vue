<template>
  <div class="contact w-100 h-100">
    <div class="col-2 flex-y-sm h-100">
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
