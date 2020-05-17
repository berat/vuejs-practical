<template>
  <div class="mt-sm-4 mb-sm-6">
    <div class="card">
      <div class="card-header">Hoş Geldin</div>
      <div class="card-body">
        <p>
          Merhaba <b>{{ isName }}</b
          >, Hoşgeldin.
        </p>
        <a @click="cikisYap" href="/">Çıkış Yap</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["isName"])
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
