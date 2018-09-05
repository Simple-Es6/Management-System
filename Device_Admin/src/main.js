// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store/store.js';
import router from './router';
//import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global_ from './utils/Global.js';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.Global = global_;
Vue.prototype.$axios = global_.ajaxs;
Vue.prototype.$axios1 = global_.ajaxs1;
Vue.prototype.$axios2 = global_.ajaxs2;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
