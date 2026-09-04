import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import './stores/locale.svelte';
import './stores/theme.svelte';

const target = document.getElementById('app');
if (!target) {
  throw new Error('OpenVK mount point #app is missing');
}

const app = mount(App, { target });

export default app;
