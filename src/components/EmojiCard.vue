<template>
  <div class="container">
    <div class="row d-flex justify-content-between">
      <div
        v-for="item in data"
        :key="item.name"
        class="card d-flex justify-content-between py-5 align-items-center text-center mb-3"
      >
        <span class="dot"></span>
        <span style="font-size: 110px">{{ item.emoji }}</span>
        <span style="font-size: 30px">{{ item.shortcode }}</span>
        <span style="font-size: 20px">{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/assets/json/emojis.json";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EmojiCard",
  data() {
    return {
      data,
    };
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
