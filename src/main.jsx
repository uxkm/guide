import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './scss/main.scss';
import { initClickableCard } from '@/utils/clickable-card';
import { initRipple } from '@/utils/ripple';
import { getRouterBasename } from '@/utils/router-basename';
import '@/legacy/demo.js';

initClickableCard();
initRipple();

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <BrowserRouter basename={getRouterBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
