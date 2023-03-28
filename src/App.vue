<template class="background-color">
  <div class="px-4">
    <router-view />
    <Footer />
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
