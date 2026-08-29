import '@builder.io/qwik/qwikloader.js';

import { render } from '@builder.io/qwik';
import { initInteractions } from '@uxkm/interactions';
import App from './App.tsx';

initInteractions();
render(document.getElementById('app') as HTMLElement, <App />);
