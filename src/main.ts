import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.css';
import router from './router/index';
import pinia from '@/stores/index';

createApp(App).use(router).use(pinia).mount('#app');
