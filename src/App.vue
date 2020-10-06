<template>
  <div>
      <Nav></Nav>
      <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style lang="scss">
@import '@/static/styles/scss/style.scss';
</style>
