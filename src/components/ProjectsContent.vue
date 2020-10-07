<template>
    <div class="fill flex-y content-center-xy" id="about-container">
      <div class="w-70">
        <h1>Projects</h1>
        <p>Project Text</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectsContent',
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
#about-container{
  color: $white;
  @include linear-gradient-bg(bottom right);
}
</style>