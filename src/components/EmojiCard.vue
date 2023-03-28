<template>
  <div
    class="card py-5 px-4 text-center col-3"
    @click="copyText(item.shortcode)"
  >
    <Toast v-if="copied" :message="text" />
    <span class="dot"></span>
    <span style="font-size: 5rem">{{ item.emoji }}</span>
    <span style="font-size: 1.547rem">{{ item.shortcode }}</span>
    <span style="font-size: 1.031rem">{{ item.description }}</span>
  </div>
</template>

<script>
import Toast from "@/components/Toast.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EmojiCard",
  components: {
    Toast,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      copied: false,
      text:
        "Shortcode " + this.item.shortcode + " " + this.item.emoji + " copied!",
    };
  },
  methods: {
    copyText(item) {
      this.copied = false;
      navigator.clipboard.writeText(item);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 100); // set the timeout to 1 seconds (adjust as needed)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border-radius: 10px;
  width: 16.1rem;
  height: 20rem;
  padding: 10px;
  background-color: #253656;
  cursor: pointer;
  margin-bottom: 2.3rem;
}
.dot {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 28px;
  top: 28px;
  border-radius: 15px;
  background: #ffffff;
}
@media (max-width: 576px) {
  .card {
    width: 100%;
  }
}
</style>
