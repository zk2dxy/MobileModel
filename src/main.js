import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import _ from 'lodash'
import router from './router'
import VueLazyload from 'vue-lazyload' // lazyload
import MintUI from 'mint-ui'
import Button from 'mint-ui/lib/button'
import Actionsheet from 'mint-ui/lib/actionsheet'
import 'assets/fonts/icon.styl'

Vue.config.productionTip = false

// lazy load
Vue.use(VueLazyload, {
  loading: require('assets/image/default.png')
})

Vue.use(MintUI)
Vue.component(Button.name, Button)
Vue.component(Actionsheet.name, Actionsheet)

Vue.prototype.L = _

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
