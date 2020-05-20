<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand active" href="/" aria-current="page"
        >vue-practical</a
      >
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="justify-content-end navbar-collapse"
        id="navbarSupportedContent"
        style="display: block;"
      >
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="/" aria-current="page">Home</a>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <a class="nav-link" href="/" aria-current="page">Login</a>
          </li>
          <li class="nav-item" v-if="!isLogin">
            <a class="nav-link" href="/sign-up">Register</a>
          </li>
          <li class="nav-item" v-if="isLogin">
            <a class="nav-link" v-bind:href="profileLink(isName)">Profil</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isLogin", "isName"])
  },
  methods: {
    ...mapActions(["updateLogin"]),
    profileLink(e) {
      return `/profile/${e}`;
    }
  }
};
</script>
