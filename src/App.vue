<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import "@/assets/css/app.css";

export default {
  name: "App",
};
</script>
