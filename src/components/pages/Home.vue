<template>
  <div class="col-8">
    <ul>
      <div class="pagination">
        <ul>
          <li
            id="tweet"
            v-for="(post, index) in posts.slice(
              perPage * (currentPage - 1),
              perPage * currentPage
            )"
            v-bind:key="index"
            class="card mt-sm-4 mb-sm-6"
          >
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{{ post.post.substr(0, 280) }}</p>
                <footer class="blockquote-footer">
                  <b>
                    <a v-bind:href="link(post.who)">{{ post.who }}</a>
                  </b>
                  <cite
                    >| {{ post.date }}
                    <b v-if="post.who === isName" @click="deleteItem(post._id)"
                      >Delete</b
                    ></cite
                  >
                </footer>
              </blockquote>
            </div>
          </li>
        </ul>
        <div class="overflow-auto">
          <div class="mt-3" style="padding-top: 20px; padding-bottom: 20px">
            <b-pagination
              style="display: flex; justify-content: center"
              v-model="currentPage"
              :per-page="perPage"
              aria-controls="tweet"
              :total-rows="rows"
              pills
            ></b-pagination>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      rows: 20,
      currentPage: 1,
      perPage: 6
    };
  },
  computed: {
    ...mapState(["posts", "isName"])
  },
  methods: {
    ...mapActions(["fullPost"]),
    link(e) {
      return `/profile/${e}`;
    },
    deleteItem(id) {
      axios
        .post("https://practical-react-server.herokuapp.com/v1/post/sil", {
          id: id
        })
        .then(response => {
          let newPost = [...this.posts];
          var count = null;
          newPost.forEach((el, index) =>
            el._id === id ? (count = index) : null
          );
          count !== null && newPost.splice(count, 1);
          this.fullPost(newPost);
        });
    }
  },
  mounted() {
    axios
      .get("https://practical-react-server.herokuapp.com/v1/post/")
      .then(response => {
        this.rows = response.data.length;
        this.fullPost(response.data.reverse());
      });
  }
};
</script>
