const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ],
    script: [
      { src: 'http://localhost:8098' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/material-icons',
    '~/plugins/vuesax'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  
  // Resources option for 'style-resources' module.
  // Make sure that the files that you import here contain only SASS code that doesn’t get rendered,
  // such as variables, mixins and functions.
  // Otherwise, that code will end up repeated for each component in the final css file.
  styleResources: {
    scss: [
      '~/assets/scss/utilities/_variables.scss',
      '~/assets/scss/utilities/_breakpoint-mixins.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
