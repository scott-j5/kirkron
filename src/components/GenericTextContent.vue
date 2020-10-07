<template>
  <div class="fill content-center-xy" id="generic-text-container">
    <div class="w-66">
      <h1 class="no-m-t">{{title}}</h1>
      <p>{{subheading}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenericTextContent',
  props: {
    title: String,
    subheading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#generic-text-container{
  color:$white;
  background-color:$dark-grey;
  @include linear-gradient-bg(bottom right);
  box-shadow:0px 0px 10px rgba(0,0,0,0.5);
}
</style>