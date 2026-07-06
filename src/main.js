import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './scss/main.scss';
import { initClickableCard } from '@/utils/clickable-card';
import { initRipple } from '@/utils/ripple';
import '@/legacy/demo.js';

initClickableCard();
initRipple();

createApp(App).use(router).mount('#app');
