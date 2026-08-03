import { initClickableCard } from '@/utils/clickable-card';
import { initRipple } from '@/utils/ripple';

export default defineNuxtPlugin((nuxtApp) => {
  initClickableCard();
  initRipple();

  nuxtApp.hook('app:mounted', async () => {
    await import('@/legacy/demo.js');
  });
});
