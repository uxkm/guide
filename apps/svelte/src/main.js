import { initInteractions } from '@uxkm/interactions';
import { mount } from 'svelte';
import App from './App.svelte';

initInteractions();
mount(App, { target: document.getElementById('app') });
