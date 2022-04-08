import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const vuetify = createVuetify({
  components,
  directives,
})

loadFonts()

createApp(App)
  .use(router)
  .use(createPinia())
  .use(vuetify)
  .mount('#app')
