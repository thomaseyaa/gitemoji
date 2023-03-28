<template>
  <div class="d-flex justify-content-center align-items-center py-4">
    <nav class="container navbar">
      <a href="/" class="navbar-brand">GitEmoji</a>
      <form class="mobile-form" role="search">
        <input
          class="form-control"
          type="search"
          v-model="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["searchData"]),
    async searchEmoji() {
      await this.searchData(this.search);
      this.$emit("emit", this.$store.state.emojisData);
    },
  },
  watch: {
    search: function () {
      this.searchEmoji();
    },
  },
};
</script>
