<template>
  <div class="container">
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
