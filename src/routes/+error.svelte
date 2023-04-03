<script lang="ts">
	import FullScreenCard from '../components/FullScreenCard.svelte';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	const status: number = $page.status;
	const message: string | undefined = $page.error?.message;
</script>

<div class="p-2 px-2">
	<FullScreenCard class="h-auto lg:w-[40rem] m-auto">
		<img src="/sveltekit_assets/aqua-worse.webp" alt="Worse" class="h-[15rem] m-auto" />
		<h1
			class="text-4xl text-center font-bold mt-4 bg-gradient-to-r from-[#df98c2] to-[#4c27b3] text-transparent bg-clip-text"
		>
			{status}
		</h1>
		<p class="text-md text-center">Error message: {message}</p>
		<a
			href="/"
			class="btn table bg-gradient-to-r from-[#070d2b] to-[#151b4c] p-2 px-6 mt-4 m-auto text-white rounded-lg hover:translate-x-3 transition-all"
			>Back to Home <Icon icon="material-symbols:home" width="1.3rem" class="inline-block" /></a
		>
	</FullScreenCard>
</div>
