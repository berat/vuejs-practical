<template>
  <div id="app">
    <app-header />
    {{ msg }} hello
  </div>
</template>

<script>
import AppHeader from "./components/header/header";

export default {
  name: "app",
  components: { AppHeader },
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
