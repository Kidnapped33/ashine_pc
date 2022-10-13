import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const routes = [
  { path: "/", component: Login },
  { path: "/Home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
