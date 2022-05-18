import {defineStore} from "pinia"

export const useUiStore = defineStore('ui',{
  state: () => ({
   mobileMenuVisible: false
  }),
  actions: {
    RESET_STATE(){
      this.mobileMenuVisible = false
    }
  }
})
