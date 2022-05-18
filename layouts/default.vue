<template>
  <section>
    <LazyHeader />
    <nuxt/>
    <LazyFooter />
  </section>
</template>
<script>
import {useStore} from "@/store/store"
import {useUiStore} from "@/store/ui"
export default {
  name: 'DefaultLayout',
  mounted() {
    const uiStore = useUiStore()
    const store = useStore()
    if(this.$device.isMobile){
      if(localStorage.getItem('popup') !== 'shown'){
        setTimeout(async() => {
          await store.GET_POPUP()
          uiStore.showPopup = true
          localStorage.setItem('popup', 'shown')
        }, 8000);
      }
    } else {
      document.documentElement.addEventListener('mouseleave', () => {
        setTimeout(async() => {
         if(localStorage.getItem('popup') !== 'shown'){
           await store.GET_POPUP()
           uiStore.showPopup = true
           localStorage.setItem('popup', 'shown')
         }
        }, 1000);
      })
    }
  }
}
</script>
