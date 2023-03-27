<template>
  <div class="container flex-wrap">
    <div v-for="(page, index) in items" :key="index">
      <div
        v-if="index == currentPage"
        class="row d-flex justify-content-between"
      >
        <EmojiCard
          :item="item"
          v-for="item in page"
          :key="item.name"
          class="d-flex justify-content-between"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EmojiCard from "@/components/EmojiCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    EmojiCard,
  },
  data() {
    return {
      items: [],
      currentPage: 0,
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
