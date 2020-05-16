<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand active" href="/home" aria-current="page"
        >vue-practical</a
      ><button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="justify-content-end navbar-collapse"
        id="navbarSupportedContent"
        style="display: block;"
      >
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" href="/home" aria-current="page">Home</a>
          </li>
          <li class="nav-item" style="display: none;">
            <a class="nav-link" href="/profile/null">Profil</a>
          </li>
          <li class="nav-item" style="display: inherit;">
            <a class="nav-link" href="/home" aria-current="page">Login</a>
          </li>
          <li class="nav-item" style="display: inherit;">
            <a class="nav-link" href="/sign-up">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
