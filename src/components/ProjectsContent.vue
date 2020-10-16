<template>
    <div class="fill flex-y" id="projects-container">
      <div class="carousel fill">
        
        <div v-for="(proj, key) in projects" :key="key" :class="'slide content-center-x ' + ((currentIndex == key) ? 'active' : '')" :id="'slide-' + key">
          <div class="slide-text h-100 w-66 flex-y content-center-x">
            <h1 class="no-m-t">{{proj.name}}</h1>
            <p v-if="proj['desc']" class="no-m-t">{{proj.desc}}</p>
            <router-link v-if="proj['linkTo']" :to="proj.linkTo">{{proj.linkText}}</router-link>
          </div>
          <img class="object-cover" :src="proj.img.startsWith('http') ? proj.img : require('@/assets/images/' + proj.img)"/>
        </div>
        
        <div class="fill" id="carousel-bg"></div>

        <div class="carousel-indicators w-100 content-center-x">
          <ul>
            <li v-for="(proj, key) in projects" :key="key" :class="(currentIndex == key) ? 'active' : ''" @click="toIndex(key)">{{ key + 1 }}</li>
          </ul>
        </div>
      
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectsContent',
  props: {
    projects: JSON,
  },
  data() {
    return {
      timer: null,
      interval: 10000,
      currentIndex: 0,
    }
  },
  mounted: function(){
    this.startCarousel();
  },
  methods: {
    startCarousel: function(){
      clearInterval(this.timer);
      this.timer = setInterval(this.next, this.interval);
    },
    toIndex: function(i){
      this.startCarousel();
      this.currentIndex = i;
    },
    next: function(){
      this.currentIndex = ((this.currentIndex + 1) % this.$props.projects.length);
    },
    previous: function(){
      this.currentIndex = ((this.currentIndex - 1) % this.$props.projects.length);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#projects-container{
  color: $white;
  @include linear-gradient-bg(bottom right);
  box-shadow:0px 0px 30px rgba(0,0,0,0.5);
}

.carousel{
    position: relative;
    overflow: hidden;
}

.slide{
  display:none;
}

.slide.active{
  display:flex;
}

.slide-text, .carousel-indicators{
  position:absolute;
  z-index: 10;
}

.carousel img{
  position:absolute;
  top:0px;
  left:0px;
}

#carousel-bg{
  position:absolute;
  top:0px;
  left:0px;
  opacity: 0.7;
  @include linear-gradient-bg(bottom right);
}

.carousel-indicators{
  color: $light-grey;
  left:0px;
  bottom:0px;
}

.carousel-indicators li{
  cursor: pointer;
}

.carousel-indicators li.active{
  color: $white;
  font-size: 115%;
}
</style>