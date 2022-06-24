import './global.css';

import App from './App.svelte';
import { initNavigation } from './navigation';

const app = new App({
	target: document.body
});

initNavigation();

export default app;
