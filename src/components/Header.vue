<template>
  <nav class="navbar my-4">
    <div class="container">
      <a class="navbar-brand">GitEmoji</a>
      <form role="search">
        <input
          class="form-control me-2"
          type="search"
          v-model="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  </nav>
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
    },
  },
  watch: {
    search: function () {
      // La fonction sera exécutée chaque fois que le v-model change
      this.searchEmoji();
    },
  },
};
</script>
