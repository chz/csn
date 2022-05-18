<template>
  <section v-if="$fetchState.pending">
    <LazyLoading />
  </section>
  <section v-else-if="$fetchState.error">
    Oops, something went wrong.
  </section>
  <section id="about" class="general-section" v-else>
    <div class="about-cover">
      <h1 class="h1">{{ home?.header_title }}</h1>
      <div class="abt-itms">
        <ul class="list-unstyled d-flex">
          <li v-for="(item,i) in home?.header_listing" :key="i">
            <div class="abt-itm d-flex align-items-center">
              <img :src="item?.icon_dark" alt="" class="itm-dark">
              <img :src="item?.icon_light" alt="" class="itm-lght">
              <span>{{ item?.label }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-txt" v-html="home?.content" />
    </div>
  </section>
</template>
<script>
import {useStore} from "@/store/store"
import {mapActions, mapWritableState} from "pinia"
export default {
  name: 'About',
  async fetch(){
    await this.GET_PAGE('about')
  },
  computed:{
    ...mapWritableState(useStore,['home'])
  },
  methods:{
    ...mapActions(useStore,['GET_PAGE'])
  }
}
</script>
