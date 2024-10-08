import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './styles/index.css';
import router from './router/index';
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
