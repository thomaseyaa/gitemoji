<template class="background-color">
  <Header />
  <Footer />
  <router-view />
</template>

<script>
import "@/assets/css/app.css";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
