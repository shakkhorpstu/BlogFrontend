import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import router from './routes'
import store from './store'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
