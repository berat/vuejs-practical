<template>
  <div class="mt-sm-4 mb-sm-6">
    <div class="card">
      <div class="card-header">Register</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <input
              type="text"
              pattern="^[a-zA-Z0-9]+$"
              minlength="1"
              maxlength="16"
              class="form-control"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              minlength="1"
              class="form-control"
              placeholder="Mail address"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
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
export default {};
</script>
