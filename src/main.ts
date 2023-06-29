import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faEyeSlash);

const app = createApp(App);

app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
