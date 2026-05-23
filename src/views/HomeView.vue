<template>
  <HeaderVue />

  <div class="emoji-wrap">
    <div class="toolbar">
      <div class="search-box">
        <svg
          class="search-icon"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          ref="searchInput"
          class="search-input"
          type="search"
          v-model="search"
          placeholder="Search"
          aria-label="Search"
        />
        <kbd class="kbd">⌘K</kbd>
      </div>
      <div class="sort">
        <svg
          class="sort-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
        <select
          class="sort-select"
          v-model="sort"
          @change="saveSort"
          aria-label="Sort emojis"
        >
          <option value="default">Default</option>
          <option value="most-used">Most used</option>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
        </select>
      </div>
    </div>

    <div v-for="(page, index) in sortedPages" :key="index">
      <div v-if="index == currentPage" class="emoji-grid">
        <EmojiCard v-for="item in page" :key="item.name" :item="item" />
      </div>
    </div>

    <div v-if="sortedPages.length == 0" class="no-results">
      <h2>No results</h2>
    </div>

    <nav
      class="d-flex justify-content-center mt-4"
      v-if="sortedPages.length > 1"
    >
      <ul class="pagination">
        <li class="page-item" @click="previousPage()">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          :class="{ current: index === currentPage }"
          @click="changePageWithNb(index)"
          v-for="(page, index) in sortedPages"
          :key="index"
        >
          <a class="page-link" href="#">{{ index + 1 }}</a>
        </li>
        <li class="page-item" @click="nextPage()">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <McpSection />
</template>

<script>
import EmojiCard from "@/components/EmojiCard.vue";
import { mapActions, mapGetters } from "vuex";
import HeaderVue from "@/components/Header.vue";
import McpSection from "@/components/McpSection.vue";

const PAGE_SIZE = 12;

export default {
  name: "HomeView",
  components: {
    EmojiCard,
    HeaderVue,
    McpSection,
  },
  data() {
    return {
      items: [],
      currentPage: 0,
      search: "",
      sort: localStorage.getItem("gitemoji-sort") || "most-used",
    };
  },
  computed: {
    ...mapGetters(["emojisData"]),
    sortedPages() {
      const flat = Object.values(this.items || {}).flat();
      const sorted = this.applySort(flat);
      const pages = [];
      for (let i = 0; i < sorted.length; i += PAGE_SIZE) {
        pages.push(sorted.slice(i, i + PAGE_SIZE));
      }
      return pages;
    },
  },
  methods: {
    ...mapActions(["getData", "searchData"]),
    applySort(list) {
      if (this.sort === "az") {
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      }
      if (this.sort === "za") {
        return [...list].sort((a, b) => b.name.localeCompare(a.name));
      }
      if (this.sort === "most-used") {
        const usage = JSON.parse(
          localStorage.getItem("gitemoji-usage") || "{}"
        );
        return [...list].sort(
          (a, b) => (usage[b.name] || 0) - (usage[a.name] || 0)
        );
      }
      return list;
    },
    saveSort() {
      localStorage.setItem("gitemoji-sort", this.sort);
      this.currentPage = 0;
    },
    onKeydown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        this.$refs.searchInput.focus();
      }
    },
    async searchEmoji() {
      await this.searchData(this.search);
      this.items = this.$store.state.emojisData;
    },
    async getEmojis() {
      await this.getData();
      this.items = this.emojisData;
    },
    changePageWithNb(nb) {
      this.currentPage = nb;
    },
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.sortedPages.length - 1) {
        this.currentPage++;
      }
    },
  },
  watch: {
    search() {
      this.searchEmoji();
    },
    items() {
      this.currentPage = 0;
    },
  },
  mounted() {
    this.getEmojis();
    window.addEventListener("keydown", this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
  },
};
</script>

<style scoped>
.emoji-wrap {
  max-width: 1120px;
  margin: 0.5rem auto 3rem;
  padding: 0 1rem;
  min-height: 70vh;
}
.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 1.25rem;
}
.search-box {
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 1 360px;
}
.search-icon {
  position: absolute;
  left: 12px;
  color: var(--ge-text-dim);
  pointer-events: none;
}
.search-input {
  width: 100%;
  background-color: var(--ge-input-bg);
  color: var(--ge-text);
  border: 1px solid var(--ge-border);
  border-radius: 6px;
  padding: 0.5rem 3rem 0.5rem 2.2rem;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s ease;
}
.search-input::placeholder {
  color: var(--ge-text-dim);
}
.search-input:hover {
  border-color: var(--ge-border-strong);
}
.search-input:focus {
  border-color: var(--ge-accent);
}
.kbd {
  position: absolute;
  right: 10px;
  font-family: SFMono-Regular, Menlo, monospace;
  font-size: 0.68rem;
  color: var(--ge-text-dim);
  background: var(--ge-card-bg-hover);
  border: 1px solid var(--ge-border);
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  pointer-events: none;
}
.sort {
  position: relative;
}
.sort-icon {
  display: none;
}
.sort-select {
  appearance: none;
  background-color: var(--ge-card-bg);
  color: var(--ge-text);
  border: 1px solid var(--ge-border);
  border-radius: 6px;
  padding: 0.5rem 2rem 0.5rem 0.9rem;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23a1a1aa' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  transition: border-color 0.2s ease;
}
.sort-select:hover {
  border-color: var(--ge-border-strong);
}
.sort-select:focus {
  outline: none;
  border-color: var(--ge-accent);
}
@media (max-width: 576px) {
  .sort-icon {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--ge-text);
    pointer-events: none;
  }
  .sort-select {
    width: 44px;
    height: 44px;
    padding: 0;
    color: transparent;
    background-image: none;
  }
  .search-box {
    flex: 1;
  }
  .search-input {
    padding: 0.7rem 0.9rem 0.7rem 2.4rem;
    font-size: 1rem;
  }
  .kbd {
    display: none;
  }
}
.emoji-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 992px) {
  .emoji-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .emoji-grid {
    grid-template-columns: 1fr;
  }
}
.no-results {
  text-align: center;
  padding: 6rem 0;
  color: var(--ge-text-dim);
}
</style>
