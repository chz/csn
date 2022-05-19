<template>
  <div class="live-items">
    <div class="live-item d-flex align-items-center justify-content-between position-relative" v-for="(item,i) in items" :key="i">
      <span class="highly-rated" v-if="item?.ribbon">{{ item?.ribbon }}</span>
      <span class="rate-mobile">{{ item?.score }}</span>
      <div class="lv-left d-flex align-items-center">
        <div class="lv-img">
          <img :src="item?.logo" :alt="item?.title">
        </div>
        <div class="bns-txt text-center">
          <p>{{ item?.bonus}}</p>
        </div>
      </div>
      <div class="lv-center text-center toggle-container" v-show="item?.showDetail && item?.features.length">
        <span class="lv-raiting">Votes: 888</span>
        <div class="rate-stars d-flex align-items-center">
          <img src="@/assets/img/Star.svg" alt="">
          <img src="@/assets/img/Star.svg" alt="">
          <img src="@/assets/img/Star.svg" alt="">
          <img src="@/assets/img/Star.svg" alt="">
          <img src="@/assets/img/Star.svg" alt="">
        </div>
      </div>
      <div class="lv-right d-flex justify-content-end align-items-center">
        <div class="chart-rate">{{ item?.score }}</div>
        <div class="visits-lnk d-flex flex-column align-items-center">
          <a :href="item?.url" class="get-bonus">Get Bonus</a>
          <a :href="item?.url" class="vst-casino">Visit Casino</a>
          <a :href="item?.url" class="vst-website desk-none">Visit website</a>
          <button type="button" class="more-info desk-none" data-open="More information" data-close="Hide" @click.prevent="item?.features.length && (item.showDetail = !item.showDetail)">
            <img src="@/assets/img/chevron.svg" alt=""> <span>{{item.showDetail ? 'Hide' : 'More information'}}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rating',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  created() {
    this.items.forEach(item => {
      this.$set(item, 'showDetail', !this.$device.isMobile)
    })
  }
}
</script>
