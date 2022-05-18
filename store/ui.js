import {defineStore} from "pinia"

export const useUiStore = defineStore('ui',{
  state: () => ({
    mobileMenuVisible: false,
    showPopup: false,
    popup: null,
  }),
  actions: {
    RESET_STATE(){
      this.mobileMenuVisible = false
    }
  }
})
