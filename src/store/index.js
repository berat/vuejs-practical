import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const state = {
  isLogin: false,
  isName: false
};

const mutations = {
  setLogin(state, name) {
    state.isLogin = true;
    state.isName = name;
  }
};

const actions = {
  updateLogin({ commit }, data) {
    return Axios.post(
      "https://practical-react-server.herokuapp.com/v1/auth/giris-yap",
      { email: data.name, password: data.password }
    )
      .then(response => {
        if (response.data) {
          commit("setLogin", data.name);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
