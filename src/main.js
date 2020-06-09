import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.less'
import 'styles/icomoon.less'
import 'styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
