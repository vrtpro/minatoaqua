import App from './App.svelte';
import { Prop } from './data/Properties';

const app = new App({
    target: document.body,
    props: Prop,
});

export default app;
