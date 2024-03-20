import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store";
import { inject } from "@vercel/analytics";

createApp(App).use(store).use(Toast).use(router).mount("#app");
inject();
