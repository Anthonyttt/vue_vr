// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


// createApp(App).config.productionTip=false;

// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios';





axios.defaults.baseURL="http://localhost:8094";

const app = createApp(App)
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}


app.config.globalProperties.$http=axios;
app.use(ElementPlus)
app.use(store).use(router).mount('#app')

