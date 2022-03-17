import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import appHeadingText from "./components/UI/appHeadingText.vue"
const app = createApp(App)
app.component("HeadingText",appHeadingText)
app.mount("#app");
