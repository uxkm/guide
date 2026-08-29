import { render } from 'solid-js/web';
import { initInteractions } from '@uxkm/interactions';
import App from './App.jsx';

initInteractions();
render(() => <App />, document.getElementById('app'));
