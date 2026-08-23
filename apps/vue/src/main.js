import { createApp } from 'vue';
import { initInteractions } from '@uxkm/interactions';
import App from './App.vue';

initInteractions();
createApp(App).mount('#app');
