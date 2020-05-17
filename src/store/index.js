import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
import VueCookies from "vue-cookies";

Vue.use(Vuex);
Vue.use(VueCookies);

const state = {
  isLogin: Vue.$cookies.get("isLogin") || false,
  isName: Vue.$cookies.get("name") || false
};

const mutations = {
  setLogin(state, name) {
    state.isLogin = true;
    Vue.$cookies.set("isLogin", true);
    Vue.$cookies.set("name", name);
    state.isName = name;
  },
  setLogout(state) {
    state.isLogin = false;
    Vue.$cookies.set("isLogin", false);
    Vue.$cookies.remove("name");
    state.isName = false;
  }
};

const actions = {
  updateLogin({ commit }, data) {
    return Axios.post(
      "https://practical-react-server.herokuapp.com/v1/auth/giris-yap",
      { email: data.name, password: data.password }
    ).then(response => {
      if (response.data) {
        Axios.get("https://practical-react-server.herokuapp.com/v1/auth/").then(
          res => {
            let userToken = VueJwtDecode.decode(response.data.token);
            let user = res.data.filter(
              dataItem => dataItem._id === userToken.userid
            );
            let userName = JSON.stringify(
              user.map(value => {
                return value.nickName;
              })
            );
            commit("setLogin", userName.slice(2, -2));
          }
        );
      }
    });
  },
  logout({ commit }) {
    commit("setLogout");
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
