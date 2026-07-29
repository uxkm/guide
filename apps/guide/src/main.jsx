import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import '@uxkm/ui/scss/main.scss';
import { initClickableCard } from '@uxkm/ui/utils/clickable-card';
import { initRipple } from '@uxkm/ui/utils/ripple';
import { getRouterBasename } from '@/utils/router-basename';
import '@uxkm/ui/legacy/demo.js';

initClickableCard();
initRipple();

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter basename={getRouterBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
