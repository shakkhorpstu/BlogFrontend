import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
Vue.use(VueRouter);

import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
