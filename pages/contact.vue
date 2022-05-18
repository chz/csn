<template>
  <section v-if="$fetchState.pending">
    <LazyLoading />
  </section>
  <section v-else-if="$fetchState.error">
    Oops, something went wrong.
  </section>
  <section id="contact" class="general-section" v-else>
    <div class="contact-cover">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="contact-left">
              <h1 class="h1">Contact</h1>
              <p class="contact-info">{{ home?.content }}</p>
              <ul class="list-unstyled">
                <li><a :href="`mailto:${home?.email}`">{{ home?.email }}</a></li>
                <li><a :href="`tel:${home?.phone}`">{{ home?.phone }}</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="contact-form">
              <div class="loading" v-if="loading">
                <LazyLoading class="m-0" />
              </div>
              <form accept-charset="UTF-8" method="POST" id="contactForm" @submit.prevent="onSubmit">
                <div class="form-element">
                  <input type="text" v-model="form.name" placeholder="Your name" name="name" class="form-control" required>
                </div>
                <div class="form-element">
                  <input type="email" v-model="form.email" placeholder="Your email" name="email" class="form-control" required>
                </div>
                <div class="form-element">
                  <textarea name="message" v-model="form.message" id="message" placeholder="Message..." class="form-control"></textarea>
                </div>
                <span class="success-msg" v-if="success">{{ success }}</span>
                <span class="error-msg" v-if="error">{{ error }}</span>
                <div class="text-end">
                  <button type="submit" class="contact-btn">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {useStore} from "@/store/store"
import {mapActions, mapWritableState} from "pinia"

export default {
  name: 'Contact',
  async fetch(){
    await this.GET_PAGE('contacts')
  },
  data(){
    return {
      loading: false,
      success: null,
      error: null,
      form:{
        name: '',
        email: '',
        message: ''
      }
    }
  },
  computed:{
    ...mapWritableState(useStore,['home'])
  },
  methods:{
    ...mapActions(useStore,['GET_PAGE','SEND_MESSAGE']),
    async onSubmit(){
      this.success = null
      this.error = null
      this.loading = true
      try {
        const {data} = await this.SEND_MESSAGE(this.form)
        this.success = data?.message
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      }catch (e) {
        this.error = 'Error sending message'
      } finally {
        this.loading = false
      }

    }
  }
}
</script>
<style lang="scss">
.contact-form {
  position: relative;
  .loading {
    position: absolute;
    background: rgba(244,243,248,0.4);
    left:0;
    top:0;
    margin:0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 100;
    align-items: center;
    justify-content: center;
  }
}
</style>
