<template>
  <HeaderVue @emit="handleValue" />

  <div class="container py-5 container-height">
    <div v-for="(page, index) in items" :key="index">
      <div
        v-if="index == currentPage"
        class="row"
        style="margin-left: -24px; margin-right: -24px"
      >
        <EmojiCard :item="item" v-for="item in page" :key="item.name" />
      </div>
    </div>
    <div
      v-if="Object.keys(items).length == 0"
      class="text-center d-flex justify-content-center align-items-center result"
    >
      <h2>No results</h2>
    </div>
    <nav
      class="d-flex justify-content-center"
      v-if="Object.keys(items).length != 0"
    >
      <ul class="pagination">
        <li class="page-item" @click="previousPage()">
          <a class="page-link text-white" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          @click="changePageWithNb(index)"
          v-for="(page, index) in items"
          :key="index"
        >
          <a class="page-link text-white" href="#">{{ parseInt(index) + 1 }}</a>
        </li>
        <li class="page-item" @click="nextPage()">
          <a class="page-link text-white" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import EmojiCard from "@/components/EmojiCard.vue";
import { mapActions, mapGetters } from "vuex";
import HeaderVue from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    EmojiCard,
    HeaderVue,
  },
  data() {
    return {
      items: [],
      currentPage: 0,
      emittedValue: "",
    };
  },
  computed: {
    ...mapGetters(["emojisData"]),
  },
  methods: {
    ...mapActions(["getData"]),
    handleValue(value) {
      this.items = value;
    },
    async getEmojis() {
      await this.getData();
      this.items = this.emojisData;
    },
    changePageWithNb(nb) {
      this.currentPage = nb;
    },
    previousPage() {
      const totalLength = Object.keys(this.items).length;
      if (this.currentPage < totalLength && this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      const totalLength = Object.keys(this.items).length;
      if (this.currentPage < totalLength - 1 && this.currentPage >= 0) {
        this.currentPage++;
      }
    },
  },
  watch: {
    items() {
      this.currentPage = 0;
    },
  },
  mounted() {
    this.getEmojis();
  },
};
</script>
<style scoped>
.result {
  height: 65vh;
}
.container-height {
  min-height: 70vh;
}
@media (max-width: 576px) {
  .container-height {
    min-height: 5vh;
  }
  .result {
    height: 50vh;
  }
}
</style>
