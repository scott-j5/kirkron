<template>
  <div class="col-2 col-1-sm full-width" id="nav-container">
    <div>
    </div>
    <nav>
      <ul class="content-space-around">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About Us</li></router-link>
        <router-link to="/projects"><li>Projects</li></router-link>
        <router-link to="/contact"><li>Contact Us</li></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav-container{
  position: fixed;
  z-index: 50;
  top:0px;
  left:0px;
}

#nav-container ul li{
  color: $white;
}
</style>
