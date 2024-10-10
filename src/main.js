import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入并注册 SVG 图标，使用 vite-plugin-svg-icons 插件
import 'virtual:svg-icons-register'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.mount('#app');