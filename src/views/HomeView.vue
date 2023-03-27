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
    <nav class="d-flex justify-content-center mt-5">
      <ul class="pagination">
        <li class="page-item" @click="previousPage()">
          <a class="page-link text-white" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" @click="changePageWithNb(0)">
          <a class="page-link text-white" href="#">1</a>
        </li>
        <li class="page-item" @click="changePageWithNb(1)">
          <a class="page-link text-white" href="#">2</a>
        </li>
        <li class="page-item" @click="changePageWithNb(2)">
          <a class="page-link text-white" href="#">3</a>
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
    changePageWithNb(nb) {
      this.currentPage = nb;
    },
    previousPage() {
      const totalLength = Object.keys(this.items).length;
      if (this.currentPage < totalLength - 1 && this.currentPage > 0) {
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
  mounted() {
    this.getEmojis();
  },
};
</script>
