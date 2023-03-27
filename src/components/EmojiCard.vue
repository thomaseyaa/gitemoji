<template>
  <div
    class="card py-5 text-center mb-3 col-3"
    @click="copyText(item.shortcode)"
  >
    <span class="dot"></span>
    <span style="font-size: 110px">{{ item.emoji }}</span>
    <span style="font-size: 30px">{{ item.shortcode }}</span>
    <span style="font-size: 20px">{{ item.description }}</span>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EmojiCard",
  props: {
    item: Object,
  },
  methods: {
    copyText(item) {
      navigator.clipboard.writeText(item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border-radius: 10px;
  width: 17rem;
  height: 21rem;
  padding: 10px;
  background-color: #253656;
  cursor: pointer;
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
</style>
