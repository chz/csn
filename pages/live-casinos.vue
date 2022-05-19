<template>
  <section v-if="$fetchState.pending">
    <LazyLoading />
  </section>
  <section v-else-if="$fetchState.error">
    Oops, something went wrong.
  </section>
  <section class="general-section home-page" v-else>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="live-left">
            <h1 class="h1">{{ home?.header_title }}</h1>
            <div class="content-txt grey-lght pt-36">
              {{home?.header_description}}
            </div>
            <div class="abt-itms">
              <ul class="list-unstyled d-flex">
                <li v-for="(item,i) in home?.header_listing" :key="i">
                  <div class="abt-itm d-flex align-items-center">
                    <img :src="item.icon_dark" alt="" class="itm-dark">
                    <img :src="item.icon_light" alt="" class="itm-lght">
                    <span>{{ item?.label }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="live-right">
            <img :src="home?.header_image_dark" alt="" class="csn-top-img img-dark">
            <img :src="home?.header_image_light" alt="" class="img-light">
          </div>
        </div>
      </div>
      <section id="last-updated">
        <p class="updated-date text-end">{{ home?.last_updated }}</p>
        <component :is="items?.meta?.card_type" :items="items?.data"></component>
      </section>
      <div class="live-content">
        <div class="live-block">
          <div class="content-txt">
            {{home?.footer_text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapActions, mapWritableState} from "pinia"
import {useStore} from "@/store/store"
export default {
  name: 'LiveCasinos',
  async fetch(){
    const promises = []
    promises.push(this.GET_PAGE('live-casinos'))
    promises.push(this.GET_ITEM('live-casinos'))
    await Promise.all(promises)
  },
  computed:{
    ...mapWritableState(useStore,['home','items'])
  },
  methods:{
    ...mapActions(useStore,['GET_PAGE','GET_ITEM'])
  }
}
</script>
