<template class="background-color">
  <div class="app-shell">
    <router-view />
    <Footer />
    <SpeedInsights />
  </div>
</template>

<script>
import "@/assets/css/app.min.css";
import "@/assets/css/theme.css";
import Footer from "@/components/Footer.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default {
  name: "App",
  components: {
    Footer,
    SpeedInsights,
  },
};
</script>
