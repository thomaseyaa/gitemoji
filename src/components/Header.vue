<template>
  <nav class="navbar my-4">
    <div class="container">
      <a class="navbar-brand">GitEmoji</a>
      <form role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>
