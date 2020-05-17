<template>
  <div class="col-4">
    <app-welcome v-if="routePath == '/' && isLogin" />
    <app-post v-if="routePath == '/' && isLogin" />
    <app-login v-if="routePath == '/' && !isLogin" />
    <app-register v-if="routePath == '/sign-up'" />
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
      routePath: this.$route.path
    };
  },
  computed: {
    ...mapState(["isLogin"])
  }
};
</script>
