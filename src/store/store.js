/* eslint no-param-reassign: [2, { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  session: '',
};

export default new Vuex.Store({
    state,
    mutations: {
      initSesion(storedLanguage, token) {
        storedLanguage.session = token;
      },
    },
    getters: {
      getToken(storedLanguage) {
        return storedLanguage.session;
      },
    },
});
