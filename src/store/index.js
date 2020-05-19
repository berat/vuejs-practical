import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
import VueCookies from "vue-cookies";

Vue.use(Vuex);
Vue.use(VueCookies);

const state = {
  isLogin: Vue.$cookies.get("isLogin") || false,
  isName: Vue.$cookies.get("name") || false,
  userID: Vue.$cookies.get("userID") || false,
  posts: ""
};

const mutations = {
  setLogin(state, data) {
    state.isLogin = true;
    Vue.$cookies.set("isLogin", true);
    Vue.$cookies.set("name", data.name);
    state.isName = data.name;
    state.userID = data.id;
  },
  setLogout(state) {
    state.isLogin = false;
    Vue.$cookies.set("isLogin", false);
    Vue.$cookies.remove("name");
    Vue.$cookies.remove("userID");
    state.isName = false;
  },
  fullePost(state, data) {
    state.posts = data;
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
            Vue.$cookies.set("userID", userToken.userid);
            commit("setLogin", {
              name: userName.slice(2, -2),
              id: userToken.userid
            });
          }
        );
      }
    });
  },
  logout({ commit }) {
    commit("setLogout");
  },
  setRegister({ commit }, data) {
    return Axios.post(
      "https://practical-react-server.herokuapp.com/v1/auth/kayit-ol",
      { nickName: data.username, email: data.mail, password: data.password }
    ).then(response => console.log(response));
  },
  addPost({ commit, state }, data) {
    console.log(data);
    return Axios.post(
      "https://practical-react-server.herokuapp.com/v1/post/paylas",
      { post: data.sonData.post, who: data.sonData.id }
    )
      .then(response => {
        let newList = [
          ...data.posts,
          {
            _id: response.data.post._id,
            post: response.data.post.value,
            who: response.data.post.who,
            date: response.data.post.dateTime
          }
        ];
        console.log(newList);
        commit("fullePost", newList);
      })
      .catch(e => console.log(e));
  },
  fullPost({ commit }, data) {
    commit("fullePost", data);
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
