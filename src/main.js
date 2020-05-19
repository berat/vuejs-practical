import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueGitHubButtons from "vue-github-buttons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-github-buttons/dist/vue-github-buttons.css";

import store from "./store";
import router from "./routers";

Vue.use(BootstrapVue);
Vue.use(VueGitHubButtons);

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
});
