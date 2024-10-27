<template>
  <nav
    class="navbar container d-flex flex-column flex-md-row align-items-center mb-5 text-center text-md-start"
  >
    <div
      class="d-flex flex-column flex-md-row col-12 col-md-4 justify-content-center justify-content-md-start align-items-center"
    >
      <span class="mb-4 mb-md-0">
        ©
        {{ new Date().getFullYear() }}
        <a href="/" class="text-light text-decoration-none">GitEmoji</a>
      </span>
      <span class="dot d-none d-md-block mx-3"></span>
      <span>
        Made with ❤️️ by
        <a
          class="text-light text-decoration-none"
          href="https://github.com/thomaseyaa"
          target="_blank"
          >Thomas</a
        >
        &amp;
        <a
          class="text-light text-decoration-none"
          href="https://github.com/lucasinho11"
          target="_blank"
          >Lucas</a
        >
      </span>
    </div>
    <div class="col-12 col-md-4 text-center py-4 py-md-0">
      <a href="https://www.buymeacoffee.com/gitemoji" target="_blank"
        ><img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style="height: 60px !important; width: 217px !important"
      /></a>
    </div>
    <div
      class="d-flex col-12 col-md-4 justify-content-center justify-content-md-end"
    >
      <a
        href="https://github.com/thomaseyaa/gitemoji#about"
        class="text-light text-decoration-none"
        target="_blank"
        >About</a
      >
      <span class="dot d-none d-md-block mx-3"></span>
      <a
        href="https://github.com/thomaseyaa/gitemoji/graphs/contributors"
        class="text-light text-decoration-none"
        target="_blank"
        >Contributors</a
      >
      <span class="dot d-none d-md-block mx-3"></span>
      <a
        href="https://github.com/thomaseyaa/gitemoji"
        class="text-light text-decoration-none"
        target="_blank"
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
  .mobile {
    flex-direction: column;
  }
}
</style>
