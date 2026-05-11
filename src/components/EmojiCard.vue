<template>
  <div class="card" @click="copyText(item.shortcode)">
    <Toast v-if="copied" :message="text" />
    <span class="dot"></span>
    <span class="emoji">{{ item.emoji }}</span>
    <span class="shortcode">{{ item.shortcode }}</span>
    <span class="description">{{ item.description }}</span>
    <audio id="myAudio">
      <source src="../assets/sound.mp3" type="audio/mpeg" />
    </audio>
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
      var audio = document.getElementById("myAudio");
      audio.currentTime = 0;
      this.copied = false;
      navigator.clipboard.writeText(item);
      const usage = JSON.parse(localStorage.getItem("gitemoji-usage") || "{}");
      usage[this.item.name] = (usage[this.item.name] || 0) + 1;
      localStorage.setItem("gitemoji-usage", JSON.stringify(usage));
      audio.play();
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 100);
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  height: 17rem;
  border-radius: 8px;
  padding: 30px 22px;
  background-color: var(--ge-card-bg, #253656);
  color: var(--ge-text, #ffffff);
  border: 1px solid var(--ge-border, rgba(255, 255, 255, 0.09));
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}
.dot {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ge-dot, #ffffff);
}
.card:hover {
  background-color: var(--ge-card-bg-hover, #17171a);
  border-color: var(--ge-border-strong, #3a3a3d);
}
.emoji {
  font-size: 4rem;
  line-height: 1;
}
.shortcode {
  font-family: SFMono-Regular, Menlo, Monaco, monospace;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ge-accent, #3b82f6);
  word-break: break-word;
}
.description {
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--ge-text-dim, #a1a1aa);
}
</style>
