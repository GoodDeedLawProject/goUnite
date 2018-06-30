import Vue from 'vue'
import router from './router'
import store from './store/index'
import App from './App.vue'
import './assets/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  template: '<App/>'
}).$mount('#app')
