<template>
  <form class="card mt-sm-4 mb-sm-6">
    <h5 class="card-header">New Post</h5>
    <div class="card-body">
      <div class="form-group">
        <textarea
          maxlength="280"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="post"
        ></textarea>
      </div>
      <button @click="ekle" type="submit" class="btn btn-primary form-control">Add Post</button>
    </div>
  </form>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return { post: "" };
  },
  computed: {
    ...mapState(["userID"])
  },
  methods: {
    ...mapActions(["addPost"]),
    ekle(e) {
      let data = { post: this.post, id: this.userID };
      e.preventDefault();
      this.addPost(data);
    }
  }
};
</script>
