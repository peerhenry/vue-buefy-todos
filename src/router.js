import Vue from 'vue'
import Router from 'vue-router'
import BigVue from "./bigvue/Page.vue"
import ReduxVue from "./redux/ReduxPage.vue"
import VuexVue from "./vuex/VuexPage.vue"

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: BigVue
  },
  {
    path: '/vue',
    component: BigVue
  },
  {
    path: '/redux',
    component: ReduxVue
  },
  {
    path: '/vuex',
    component: VuexVue
  }
]

const router = new Router({ routes })

export default router