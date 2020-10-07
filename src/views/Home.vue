<template>
  <div class="home">
    <div class="col-2 row-2-sm full-height">
      <Branding></Branding>
      <GenericTextContent title="Kirkron" subheading="Subheading"></GenericTextContent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Branding from '@/components/Branding.vue'
import GenericTextContent from '@/components/GenericTextContent.vue'

export default {
  name: 'Home',
  components: {
    Branding,
    GenericTextContent,
  }
}
</script>
