<template>
  <div id="app">
    <app-header />
    <div class="container">
      <div class="row">
        <router-view />
        <app-sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/share/header";
import AppSidebar from "./components/pages/Sidebar";

export default {
  name: "app",
  components: { AppHeader, AppSidebar },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
