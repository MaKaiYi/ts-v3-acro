import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "./registerServiceWorker";
import router from "./router";

import { createPinia } from "pinia";
// import  persist  from 'pinia-plugin-persist'
import { createRouter, createWebHistory } from 'vue-router'
import createPersistPlugin from 'pinia-plugin-persist'
import myPiniaPlugin from './store/plugin/test'
import piniaRouterPlugin from './store/plugin/router'
import i18n from './assets/lang/index'


const pinia = createPinia()
pinia.use(myPiniaPlugin)
pinia.use(createPersistPlugin)






const routerPina = createRouter({
  history: createWebHistory(),
  routes: [

  ],
})

pinia.use(piniaRouterPlugin (routerPina))
import "@arco-design/web-vue/dist/arco.css";

createApp(App).use(pinia).use(i18n).use(ArcoVue).use(router).mount("#app");
