<template class="background-color">
  <router-view />
  <Footer />
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
