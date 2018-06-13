// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-localstorage'
import App from '@/components/App'
import router from './router'
import { store } from './store'
import Navbar from '@/components/Navbar'
import 'vuetify/dist/vuetify.min.css'

Vue.component('app-navbar', Navbar)
Vue.use(Vuetify)
Vue.use(VueLocalStorage)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
