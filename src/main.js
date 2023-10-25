import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import "./style.css";

const app = createApp(App);

// app.use(createPinia());
// app.use(i18n);
app.use(router);
app.mount("#app");
