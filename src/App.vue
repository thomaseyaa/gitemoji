<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <Footer />
    <router-view />
  </div>
</template>

<script>
import "@/assets/css/app.css";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
