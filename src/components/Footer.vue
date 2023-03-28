<template>
  <nav class="navbar container mb-5">
    <div class="text-center d-flex justify-content-center mobile">
      <p>
        © 2023
        <a href="/" class="text-light text-decoration-none">GitEmoji</a>
      </p>
      <span class="dot d-none d-md-block"></span>
      <p>
        Made with ❤️️ by
        <a
          class="text-light text-decoration-none"
          href="https://github.com/thomaseyaa"
          >Thomas</a
        >
        &amp;
        <a
          class="text-light text-decoration-none"
          href="https://github.com/lucasinho11"
          >Lucas</a
        >
      </p>
    </div>
    <div class="d-flex justify-content-center">
      <a
        href="https://github.com/thomaseyaa/gitemoji"
        class="text-light text-decoration-none"
        >About</a
      >
      <span class="dot"></span>
      <a
        href="https://github.com/thomaseyaa/gitemoji"
        class="text-light text-decoration-none"
        >Contributors</a
      >
      <span class="dot"></span>
      <a
        href="https://github.com/thomaseyaa/gitemoji"
        class="text-light text-decoration-none"
        >GitHub</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style scoped>
.dot {
  height: 3px;
  width: 3px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
}

@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    justify-content: space-between;
  }
  .mobile {
    flex-direction: column;
  }
}
</style>
