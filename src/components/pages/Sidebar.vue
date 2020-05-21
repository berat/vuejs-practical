<template>
  <div class="col-4">
    <app-welcome v-if="compore && isLogin" />
    <app-post v-if="compore && isLogin" />
    <app-login v-if="compore && !isLogin" />
    <app-register v-if="routeName=='register' && !isLogin" />
    <div style="display: flex; justify-content: center; margin: 20px 0">
      <gh-btns-star slug="berat/vuejs-practical" show-count></gh-btns-star>
    </div>
  </div>
</template>

<script>
import AppLogin from "../share/sidebar/login";
import AppRegister from "../share/sidebar/register";
import AppPost from "../share/sidebar/post";
import AppWelcome from "../share/sidebar/welcome";

import { mapState } from "vuex";

export default {
  components: { AppLogin, AppRegister, AppPost, AppWelcome },
  data() {
    return {
      compore: this.$route.name == "homepage" || this.$route.name == "profile",
      routeName: this.$route.name
    };
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
