import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.use(VueCookies, { expires: '7d'})


