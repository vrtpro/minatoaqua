<script lang="ts">
	import '../css/tailwind.css';
	import '../css/nprogress.css';
	import NProgress from 'nprogress';
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import Navigation from '../components/Navigation.svelte';

	export let data;

	$: {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	}
</script>

<Navigation />

{#key data.pathname}
	<div
		class="container mx-auto p-4 font-lexend"
		in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
		out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
	>
		<slot />
	</div>
{/key}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
</style>
