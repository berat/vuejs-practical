<template>
  <div class="mt-sm-4 mb-sm-6">
    <div class="card">
      <div class="card-header">Register</div>
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="form-group">
            <input
              type="text"
              pattern="^[a-zA-Z0-9]+$"
              minlength="1"
              maxlength="16"
              class="form-control"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              minlength="1"
              class="form-control"
              placeholder="Mail address"
              v-model="mail"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button type="submit" class="form-control btn btn-primary">
            Register</button
          ><small
            id="emailHelp"
            class="text-center form-text text-muted mt-sm-2"
            >Have you account?<a href="/"> Login</a></small
          >
        </form>
      </div>
    </div>
    <div class="mt-sm-4 text-center">
      <span><span></span></span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return { username: "", mail: "", password: "" };
  },
  methods: {
    ...mapActions(["setRegister"]),
    register() {
      let data = {
        username: this.username,
        mail: this.mail,
        password: this.password
      };
      this.setRegister(data);
    }
  }
};
</script>
