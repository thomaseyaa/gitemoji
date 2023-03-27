<template>
  <div class="container flex-wrap">
    <div v-for="(page, index) in items" :key="index">
      <div
        v-if="index == currentPage"
        class="row d-flex justify-content-between"
      >
        <div
          v-for="item in page"
          :key="item.name"
          class="card py-5 text-center mb-3 col-3"
        >
          <span class="dot"></span>
          <span style="font-size: 110px">{{ item.emoji }}</span>
          <span style="font-size: 30px">{{ item.shortcode }}</span>
          <span style="font-size: 20px">{{ item.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "EmojiCard",
  data() {
    return {
      items: [],
      currentPage: 0,
      receivedData: null,
    };
  },
  computed: {
    ...mapGetters(["emojisData"]),
  },
  methods: {
    ...mapActions(["getData"]),

    async getEmojis() {
      await this.getData();
      this.items = this.emojisData;
    },
  },
  mounted() {
    this.getEmojis();
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
