import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zh from 'element-plus/es/locale/lang/zh-cn';

createApp(App).use(ElementPlus, { locale: zh, size: 'small', zIndex: 3000 }).mount('#app');
