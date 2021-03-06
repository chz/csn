import {defineStore} from "pinia"

export const useStore = defineStore('store',{
  state: () => ({
    home: null,
    items: null,
    popup: null,
  }),
  actions:{
    async GET_HOME(){
      const res = await this.$nuxt.$axios.get('/api/v1/home')
      this.home = res?.data?.data
      return res
    },
    async GET_ITEMS(){
      const res = await this.$nuxt.$axios.get('/api/v1/items')
      this.items = res?.data
      return res
    },
    async GET_PAGE(slug){
      const res = await this.$nuxt.$axios.get(`/api/v1/pages/${slug}`)
      this.home = res?.data?.data
      return res
    },
    async GET_ITEM(slug){
      const res = await this.$nuxt.$axios.get(`/api/v1/items/${slug}`)
      this.items = res?.data
      return res
    },
    async SEND_MESSAGE(form){
      return await this.$nuxt.$axios.post('/api/v1/contact', form)
    },
    async GET_POPUP(){
      const res =  await this.$nuxt.$axios.get('/api/v1/popup')
      this.popup = res?.data
      return res
    }
  }
})
