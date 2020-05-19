<template>
  <div class="col-8">
    <ul>
      <div class="pagination">
        <ul>
          <li v-for="post in posts" v-bind:key="post._id" class="card mt-sm-4 mb-sm-6">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{{ post.post.substr(0, 280) }}</p>
                <footer class="blockquote-footer">
                  <b>
                    <a v-bind:href="link(post.who)">{{ post.who }}</a>
                  </b>
                  <cite>| {{ post.date }}</cite>
                </footer>
              </blockquote>
            </div>
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["posts"])
  },
  methods: {
    ...mapActions(["fullPost"]),
    link(e) {
      return `/profile/${e}`;
    }
  },
  mounted() {
    axios
      .get("https://practical-react-server.herokuapp.com/v1/post/")
      .then(response => this.fullPost(response.data));
  }
};
</script>
