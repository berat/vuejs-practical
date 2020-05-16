<template>
  <div class="col-4">
    <div class="mt-sm-4 mb-sm-6">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <input
                type="text"
                minlength="1"
                class="form-control"
                id="userName"
                placeholder="Username"
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
              Login</button
            ><small
              id="emailHelp"
              class="text-center form-text text-muted mt-sm-2"
              >Haven't you account? <a href="/sign-up"> Register</a></small
            >
          </form>
        </div>
      </div>
      <div class="mt-sm-4 text-center">
        <span><span></span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
