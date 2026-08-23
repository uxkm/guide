import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initInteractions } from '@uxkm/interactions';
import App from './App.jsx';

initInteractions();
createRoot(document.getElementById('app')).render(<StrictMode><App /></StrictMode>);
