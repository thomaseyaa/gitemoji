<template>
  <div class="d-flex justify-content-center align-items-center py-4">
    <nav
      class="container navbar d-flex justify-content-between align-items-center"
    >
      <a href="/" class="navbar-brand">GitEmoji</a>
      <button
        class="theme-toggle"
        type="button"
        :aria-label="
          theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        "
        @click="toggleTheme"
      >
        {{ theme === "dark" ? "☀️" : "🌙" }}
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      theme: document.documentElement.dataset.theme || "dark",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = this.theme;
      localStorage.setItem("ge-theme", this.theme);
    },
  },
};
</script>
