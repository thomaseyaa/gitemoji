<template class="background-color">
  <Header />
  <router-view />
</template>

<script>
import "@/assets/css/app.css";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
