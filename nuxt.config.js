const isProduction = process.env.NODE_ENV === 'production'

const axios = {}

if(isProduction){
  axios.baseURL = process.env.BASE_URL
}else{
  axios.proxy = true
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'csn',
    htmlAttrs: {
      lang: 'en',
      id: 'theme'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading:{
    height: '3px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.scss',
    '@/assets/css/mobile.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],


  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/color-mode',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios,

  proxy: isProduction ? {} : {
    '/api/': 'https://bestchoiceshere.com/'
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    WEBSITE_URL: process.env.WEBSITE_URL || 'https://csn.chz.dev',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[contenthash:5]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[contenthash:5]${isModern ? '.modern' : ''}.js`,
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash:5].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:5].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:5].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:5].[ext]',
    },
    cssSourceMap: false,
    extend(config){
      config.performance.hints = false
    },
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler')
      },
      cssModules: {
        modules: {
          localIdentName: isProduction ? "[hash:base64:5]" : "[local]_[hash:base64:5]",
        }
      }
    },
    extractCSS: isProduction
      ? {
        ignoreOrder: true,
      }
      : false,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style'].includes(type)
      }
    }
  }
}
