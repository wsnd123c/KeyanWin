import { createApp } from 'vue';
import { createPinia } from 'pinia';
import request from '@/utils/request.ts'; // 确保 request.js/ts 存在
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);

app.use(createPinia()); // 先注册 Pinia
app.use(router); // 再注册 Router
app.use(ElementPlus)
app.config.globalProperties.$http = request; // 挂载 axios 实例

app.mount('#app');
