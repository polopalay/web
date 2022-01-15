export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web',
    htmlAttrs: {
      lang: 'en'
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', '@nuxtjs/firebase'
  ],
  firebase: {
    // options
    config: {
      apiKey: "AIzaSyCkWiK4zT5vk3CNypZMWCToPImrvPD6jYw",
      authDomain: "myygo-aea3b.firebaseapp.com",
      databaseURL: "https://myygo-aea3b-default-rtdb.firebaseio.com",
      projectId: "myygo-aea3b",
      storageBucket: "myygo-aea3b.appspot.com",
      messagingSenderId: "473422374640",
      appId: "1:473422374640:web:2c92ac24d4f22d27f20435",
      measurementId: "G-LZ8EPGX68B"
    },
    services: {
      auth: true,
      storage: true,
      database: true,
    }
  },
  database: {
    emulatorPort: 3000,
    emulatorHost: 'localhost',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
