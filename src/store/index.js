import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isLogin: false
};

const mutations = {
  setLogin(state) {
    state.isLogin = !state.isLogin;
  }
};

const actions = {
  updateLogin({ commit }) {
    commit('setLogin');
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
