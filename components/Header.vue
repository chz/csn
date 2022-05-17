<template>
  <header class="main-header">
    <div class="container">
      <div class="header-content d-flex justify-content-between align-items-center">
        <button type="button" class="mobile-menu" @click.prevent="openMobileMenu">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 23C3.44772 23 3 23.4477 3 24C3 24.5523 3.44772 25 4 25V23ZM28 25C28.5523 25 29 24.5523 29 24C29 23.4477 28.5523 23 28 23V25ZM4 15.5C3.44772 15.5 3 15.9477 3 16.5C3 17.0523 3.44772 17.5 4 17.5V15.5ZM28 17.5C28.5523 17.5 29 17.0523 29 16.5C29 15.9477 28.5523 15.5 28 15.5V17.5ZM4 8C3.44772 8 3 8.44772 3 9C3 9.55228 3.44772 10 4 10V8ZM28 10C28.5523 10 29 9.55228 29 9C29 8.44772 28.5523 8 28 8V10ZM4 25H28V23H4V25ZM4 17.5H28V15.5H4V17.5ZM4 10H28V8H4V10Z" fill="white"/>
          </svg>
        </button>
        <NuxtLink to="/" class="header-logo">
          <img src="@/assets/img/logo.svg" alt="" class="dark-logo">
          <img src="@/assets/img/Logo-light.svg" alt="" class="light-logo">
        </NuxtLink>
        <div class="header-right d-flex align-items-center justify-content-end">
          <nav class="header-nav" :class="mobileMenuVisible ? 'transform00':''">
            <button type="button" class="mobile-close" @click.prevent="closeMobileMenu">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0606 7.06066C27.6464 6.47487 27.6464 5.52513 27.0606 4.93934C26.4749 4.35355 25.5251 4.35355 24.9393 4.93934L27.0606 7.06066ZM4.93934 24.9393C4.35355 25.5251 4.35355 26.4749 4.93934 27.0606C5.52513 27.6464 6.47487 27.6464 7.06066 27.0606L4.93934 24.9393ZM7.06068 4.93934C6.47489 4.35355 5.52515 4.35355 4.93936 4.93934C4.35357 5.52513 4.35357 6.47487 4.93936 7.06066L7.06068 4.93934ZM24.9393 27.0606C25.5251 27.6464 26.4749 27.6464 27.0607 27.0606C27.6464 26.4749 27.6464 25.5251 27.0607 24.9393L24.9393 27.0606ZM24.9393 4.93934L4.93934 24.9393L7.06066 27.0606L27.0606 7.06066L24.9393 4.93934ZM4.93936 7.06066L24.9393 27.0606L27.0607 24.9393L7.06068 4.93934L4.93936 7.06066Z" fill="white"/>
              </svg>
            </button>
            <ul class="list-unstyled">
              <li><NuxtLink to="/about">About us</NuxtLink></li>
              <li><NuxtLink to="/slots">Slots</NuxtLink></li>
              <li><NuxtLink to="/live-casinos">Live Casinos</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import{useUiStore} from "@/store/ui"
import {mapWritableState} from 'pinia'
export default {
  name: 'Header',
  computed:{
    ...mapWritableState(useUiStore, ['mobileMenuVisible'])
  },
  methods: {
    openMobileMenu(){
      this.mobileMenuVisible = true
    },
    closeMobileMenu(){
      this.mobileMenuVisible = false
    }
  }
}
</script>
<style lang="scss">
.main-header{
  background:#000;
  padding-top:26px;
  padding-bottom:26px;
}
.header-logo img{
  height:28px;
}
.header-nav ul{
  margin-bottom:0;
}
.header-nav ul li{
  display:inline-block;
}
.header-nav ul li a{
  color:var(--white);
  font:16px 'WorkSans-Medium';
  text-decoration:none;
  transition:all .4s ease;
}
.header-nav ul li:not(:first-child){
  margin-left:40px;
}
.header-nav ul li a.router-link-exact-active,.header-nav ul li:hover a{
  background: linear-gradient(138.57deg, #F1E4B7 0%, #F5F1CE 45.63%, #F7C67D 103.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-image: linear-gradient(138.57deg, #F1E4B7 0%, #F5F1CE 45.63%, #F7C67D 103.06%);
  border-image-slice: 1;
}
/* light mode header */
.light-mode .main-header{
  background:var(--white);
}
.light-mode .header-nav ul li a{
  color:var(--dark-bg);
}
.light-mode .header-nav ul li a.router-link-exact-active,.light-mode .header-nav ul li:hover a{
  background: linear-gradient(138.57deg, #D0B35D 0%, #D0B35D 45.63%, #D0B35D 103.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-image: linear-gradient(138.57deg, #D0B35D 0%, #D0B35D 45.63%, #D0B35D 103.06%);
  border-image-slice: 1;
}
.mobile-close,.mobile-menu{
  display:none;
}
@media screen and (max-width:992px){
  .header-nav ul li:not(:first-child){
    margin-left:32px;
  }
}
@media screen and (max-width:767px){
  .header-nav{
    position:fixed;
    width:100%;
    left:0;
    top:0;
    height:100vh;
    overflow:auto;
    background-color:var(--dark-bg);
    padding-top:22px;
    z-index:9999;
    transition:all .6s ease;
    transform: translate(100%);
  }
  .transform00{
    transform:translate(0) !important;
  }
  .header-nav ul{
    padding-top:40px;
  }
  .header-nav ul li{
    display:block;
    margin-top:20px;
    text-align:center;
  }
  .header-nav ul li:not(:first-child){
    margin-left:0;
  }
  .mobile-close{
    margin-left: auto;
    margin-right: 22px;
  }
  .mobile-close,.mobile-menu{
    display:block;
    border:0;
    padding:0;
    background:transparent;
  }
  .header-content{
    justify-content:center !important;
    position:relative;
  }
  .mobile-menu{
    position:absolute;
    position: absolute;
    left: 0;
    top: -3px;
  }
  .light-mode .header-nav{
    background-color:var(--light-bg);
  }
  .light-mode .mobile-close svg path,.light-mode .mobile-menu svg path{
    fill:var(--dark-bg);
  }
}

</style>

