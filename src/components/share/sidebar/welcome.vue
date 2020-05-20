<template>
  <div class="mt-sm-4 mb-sm-6">
    <div class="card">
      <div class="card-header">Welcome</div>
      <div class="card-body">
        <p>
          Hello
          <b>{{ isName }}</b>, welcome!
        </p>
        <p>
          You have
          <b v-text="ownerPost"></b> posts
        </p>
        <a @click="cikisYap" href="/">Logout</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return { sayi: 2 };
  },
  computed: {
    ...mapState(["isName", "posts", "ownerPost"])
  },
  methods: {
    ...mapActions(["logout"]),
    cikisYap(e) {
      e.preventDefault();
      this.logout();
    }
  }
};
</script>
