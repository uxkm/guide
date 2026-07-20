import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@uxkm/ui/scss/main.scss';
import { initClickableCard } from '@uxkm/ui/utils/clickable-card';
import { initRipple } from '@uxkm/ui/utils/ripple';
import '@uxkm/ui/legacy/demo.js';

initClickableCard();
initRipple();

createApp(App).use(router).mount('#app');
