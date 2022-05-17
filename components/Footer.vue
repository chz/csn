<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-content d-flex justify-content-between align-items-center">
        <NuxtLink to="/" class="footer-logo">
          <img src="@/assets/img/footer-logo.svg" alt="">
        </NuxtLink>
        <nav class="footer-nav">
          <ul class="list-unstyled">
            <li><NuxtLink to="/about">About us</NuxtLink></li>
            <li><NuxtLink to="/slots">Slots</NuxtLink></li>
            <li><NuxtLink to="/live-casinos">Live Casinos</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <ul class="footer-list list-unstyled text-end">
        <li><img src="@/assets/img/fcompany1.png" alt=""></li>
        <li><img src="@/assets/img/fcompany2.png" alt=""></li>
        <li><img src="@/assets/img/fcompany3.png" alt=""></li>
        <li><img src="@/assets/img/fcompany4.png" alt=""></li>
        <li><img src="@/assets/img/fcompany5.png" alt=""></li>
      </ul>
      <p class="copyright text-end mb-0">All rights reserved. 2022.</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
.main-footer{
  background: #13172F;
  padding-top:68px;
  padding-bottom:68px;
}
.footer-logo img{
  height:40px;
}
.footer-nav ul{
  margin-bottom:0;
}
.footer-nav ul li{
  display:inline-block;
}
.footer-nav ul li a{
  color:var(--white);
  font:16px 'WorkSans-Medium';
  text-decoration:none;
  transition:all .4s ease;
}
.footer-nav ul li:not(:first-child){
  margin-left:40px;
}
.footer-nav ul li a.router-link-exact-active,.footer-nav ul li:hover a{
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
.footer-list{
  margin-top:40px;
  margin-bottom:0;
}
.footer-list li{
  display:inline-block;
}
.footer-list li:not(:first-child){
  margin-left:40px;
}
.footer-list li img{
  height:auto;
  object-fit:contain;
}
.copyright{
  margin-top:42px;
  color: #C8C8DC;
  font:16px 'WorkSans-Regular';
}
@media screen and (max-width:992px){
  .footer-content{
    flex-direction: column;
  }
  .main-footer{
    padding-top:39px;
    padding-bottom:33px;
  }
  .footer-logo img{
    height:32px;
  }
  .footer-nav{
    margin-top:43px;
  }
  .footer-list li:not(:first-child),.footer-nav ul li:not(:first-child){
    margin-left:0;
  }
  .footer-nav ul li{
    display:block;
    text-align:center;
    margin-bottom:12px;
  }
  .footer-list{
    margin-top:28px;
    text-align:center !important;
  }
  .footer-list li{
    display:block;
  }
  .footer-list li:not(:first-child){
    margin-top:52px;
  }
  .copyright{
    text-align:center !important;
    font-size:14px;
    margin-top:27px;
  }
}
</style>
