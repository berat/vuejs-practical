import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import store from "./store";
import router from "./routers";

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router
});
