import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from "./store";

createApp(App).use(store).use(Toast).use(router).mount("#app");
