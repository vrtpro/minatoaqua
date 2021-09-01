<script lang="ts">
	import Home from './Home/Home.svelte';
	import Overview from './Overview/Overview.svelte';
	import Information from './Information/Information.svelte';
	import Links from './Links/Links.svelte';
	import Error404 from './Errors/Error404.svelte';
	import router from 'page';
	let page;
	router('/', () => page = Home);
	router('/overview', () => page = Overview);
	router('/info', () => page = Information);
	router('/links', () => page = Links);
	router('*', () => page = Error404);
	router.start();
</script>
<svelte:component this={page} />