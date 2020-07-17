import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';


VueMarkdownEditor.use(vuepressTheme);
Vue.use(VueMarkdownEditor);
VMdPreview.use(githubTheme);
Vue.use(VMdPreview);

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
}).$mount('#app');
