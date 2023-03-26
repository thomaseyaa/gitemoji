<template>
  <div class="home">
    <EmojiCard />
  </div>
</template>

<script>
import EmojiCard from "@/components/EmojiCard.vue";

export default {
  name: "HomeView",
  components: {
    EmojiCard,
  },
  data() {
    return {};
  },
};
</script>
