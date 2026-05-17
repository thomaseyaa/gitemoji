<template>
  <footer class="footer">
    <div class="footer-left">
      <span>© {{ new Date().getFullYear() }} GitEmoji</span>
      <span class="sep">·</span>
      <span>
        Made with ❤️ by
        <a href="https://github.com/thomaseyaa" target="_blank">Thomas</a>
        &amp;
        <a href="https://github.com/lucasinho11" target="_blank">Lucas</a>
      </span>
    </div>

    <a
      class="bmc"
      href="https://www.buymeacoffee.com/gitemoji"
      target="_blank"
      rel="noopener"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
      />
    </a>

    <nav class="footer-right">
      <a href="https://github.com/thomaseyaa/gitemoji#about" target="_blank"
        >About</a
      >
      <a
        href="https://github.com/thomaseyaa/gitemoji/graphs/contributors"
        target="_blank"
        >Contributors</a
      >
      <a href="https://github.com/thomaseyaa/gitemoji" target="_blank"
        >GitHub</a
      >
    </nav>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style scoped>
.footer {
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  border-top: 1px solid var(--ge-border);
  font-size: 0.88rem;
  color: var(--ge-text-dim);
}
.footer-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.footer-left .sep {
  color: var(--ge-text-dim);
  opacity: 0.5;
}
.footer a {
  color: var(--ge-text);
  text-decoration: none;
}
.footer a:hover {
  color: var(--ge-accent);
}
.bmc img {
  height: 42px;
  display: block;
}
.footer-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
@media (max-width: 700px) {
  .footer {
    justify-content: center;
    text-align: center;
  }
}
</style>
