<template>
  <div class="w-100 content-center-xy" id="branding-logo-container">
    <img class="w-66" src="../assets/images/kirkron.svg">
  </div>
</template>

<script>
export default {
  name: 'Branding',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#branding-logo-container{
  display:flex;
  @media(max-width: $screen-sm){
    display:none;
  }
}
</style>