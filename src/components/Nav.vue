<template>
  <div class="col-2 full-width" id="header-container">
    <div class="content-center-y">
      <img id="header-logo" src="../assets/images/kirkron-logo-narrow.svg"/>
    </div>
    <div id="nav-toggle">
      <div class="hamburger content-center-y content-flex-end">
        <div class="menu" id="hamburger">
          <div class="menu_line menu_line-q"></div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5 -5 110 110">
            <path class="path-a" d="M 100 100 h -100 l -50 -50 l 50 -50 l 100 100" />
            <path class="path-a" d="M 0 0 h 100 l 50 50 l -50 50 l -100 -100" />
          </svg>
        </div>
      </div>
    </div>
    <div id="nav-container">
      <nav id="site-nav" class="site-nav content-center-y w-100">
        <ul class="content-space-around content-space-between-sm w-100">
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/about"><li>About Us</li></router-link>
          <router-link to="/projects"><li>Projects</li></router-link>
          <router-link to="/contact"><li>Contact Us</li></router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  },
  mounted: function(){
    this.init();
  },
  methods: {
    init: function(){
        document.querySelector('#hamburger').addEventListener('click', this.toggleMenu);
        document.querySelectorAll('#site-nav ul li').forEach(item => {
            item.addEventListener('click', function(){
                //Toggle menu away if link is clicked that doesnt redirect page
                if (document.querySelector("#site-nav").classList.contains("site-nav--open")){
                    this.toggleMenu
                }
            });
        })
    },
    toggleMenu: function(){
        document.querySelector('#hamburger').classList.toggle('on');
        document.querySelector("#site-nav").classList.toggle('site-nav--open');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header-container{
  position: fixed;
  z-index: 50;
  top:0px;
  left:0px;
  @media(max-width: $screen-sm){
    position:sticky;
    background-color: $white;
  }
}

#header-logo{
  display: none;
  @media(max-width: $screen-sm){
    display: block;
    height: 2.5rem;
    max-width: calc(100% - (#{$space-sm} * 2));
    padding: $space-md;
  }
}

#nav-container{
  grid-row: 1/ span 1;
  grid-column: 2/ span 1;
  @media(max-width: $screen-sm){
    grid-column: 1/ span 2;
    grid-row: 2/ span 1;
  }
}

.site-nav{
  @media (max-width: $screen-sm){
    position:relative;
    z-index:50;
    max-height: 0px;
    overflow:hidden;
    transition: max-height ease-in-out 500ms;
    transition-timing-function: cubic-bezier(.32,.13,.2,1.00);
  }
}

.site-nav--open{
  max-height: 500px;
}

#site-nav ul{
  position:relative;
  z-index:51;
}

#site-nav ul li{
  color: $white;
  padding: $space-md;
  @media(max-width: $screen-sm){
    color: $primary;
    margin:0px;
  }
}


//Hamburger
#nav-toggle{
  @media (min-width: $screen-md){
    display:none;
  }
}

.hamburger{
  width: 100%;
  width: calc(100% - (#{$space-md} * 2));
  padding: $space-md;
  z-index:51;
}

.menu {
  position:relative;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 52;
  cursor: pointer;
  transition: all 0.25s;
  
  &:nth-child(1) &_line { background-color: $primary-accent }

  &_line {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 5px;
    //border-radius: 2.5px;
    
    &-q {
      transition: all calc(.3s * 2);

      .on & {
        background-color: $primary !important;
        transform: translate(-0%, -50%) rotate(-45deg);
      }
    }
  }
}
 
svg {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: visible;
  height: 100%;
  width: 100%;
  
  path {
    fill: none;
    stroke: $primary;
    stroke-width: 20px;
    stroke-linejoin: bevel;
  }
  
  .path {
    &-a {
      stroke: $primary;
      stroke-dasharray: 100 500;
      transition: all calc(.3s * 2);
      
      .on & {
        stroke-dasharray: 50 500;
        stroke-dashoffset:-250;    
      }
    }
  }
}

</style>