<template>
  <div class="col-2 row-2-sm full-height">
    <div class="fill content-center-xy" id="landing-logo-container">
      <img class="w-75" src="../assets/images/kirkron.svg">
    </div>
    <div class="fill flex-y content-center-xy" id="landing-text-container">
      <h1 class="no-m-t">{{title}}</h1>
      <p>{{subheading}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    title: String,
    subheading: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#landing-logo-container{
  
}
#landing-text-container{
  color:$white;
  background-color:$dark-grey;
  box-shadow:0px 0px 10px rgba(0,0,0,0.5);
}
</style>