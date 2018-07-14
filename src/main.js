import Vue from 'vue'
import Buefy from 'buefy'
import App from './app.vue'
import router from './router'
import 'buefy/lib/buefy.css'

// https://buefy.github.io/#/documentation/layout
Vue.use(Buefy)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})