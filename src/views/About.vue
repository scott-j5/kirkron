<template>
  <div class="about w-100 h-100">
    <div class="col-2 flex-y-sm h-100">
      <Branding></Branding>
      <GenericTextContent title="About Us" subheading="About us text"></GenericTextContent>
    </div>
  </div>
</template>

<script>
import Branding from '../components/Branding.vue'
import GenericTextContent from '../components/GenericTextContent.vue'

export default {
  name: 'About',
  components: {
    Branding,
    GenericTextContent,
  }
}
</script>