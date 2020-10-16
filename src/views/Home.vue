<template>
  <div class="home w-100 h-100">
    <div class="col-2 flex-y-sm h-100">
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
