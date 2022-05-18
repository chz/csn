import {defineStore} from "pinia"

export const useStore = defineStore('store',{
  state: () => ({
    home: null,
    items: null
  }),
  actions:{
    async GET_HOME(){
      const res = await this.$nuxt.$axios.get('/api/v1/home')
      this.home = res.data?.data
      return res
    },
    async GET_ITEMS(){
      const res = await this.$nuxt.$axios.get('/api/v1/items')
      this.items = res.data
      return res
    },
    async GET_PAGE(slug){
      const res = await this.$nuxt.$axios.get(`/api/v1/pages/${slug}`)
      this.home = res.data?.data
      return res
    },
    async GET_ITEM(slug){
      const res = await this.$nuxt.$axios.get(`/api/v1/items/${slug}`)
      this.items = res.data
      return res
    }
  }
})
