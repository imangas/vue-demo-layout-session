import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store/store';

import vbclass from 'vue-body-class';
import Meta from 'vue-meta';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(store);
Vue.use(vbclass, router);
Vue.use(Meta);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    const token = window.localStorage.getItem('token');
    if(token) {
      store.commit('initSesion', token);
    }
  },
  render: h => h(App)
})
