<template>
  <footer class="fixed-bottom bg-dark text-light pi-4">
    <navbar class="container d-flex justify-content-between">
      <div class="d-flex justify-content-center align-items-start">
        <p>© 2023 GitEmoji</p>
        <span class="dot"></span>
        <p>Made with ❤️️ by Thomas & Lucas</p>
      </div>
      <div class="d-flex justify-content-center align-items-start">
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
    </navbar>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dot {
  height: 3px;
  width: 3px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
}
</style>
