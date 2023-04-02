<script lang="ts">
	import Icon from '@iconify/svelte';

	export let type: string;
	export let name: string;
	export let year: string;
	export let amount: string;
	export let cover: string;
	export let spotify: string;
</script>

<div class={`mt-2 bg-[#efefef] bg-opacity-60 backdrop-blur-sm p-4 rounded-xl shadow-lg`}>
	<img src={cover} alt="Album cover" class="m-auto h-52 rounded-xl pointer-events-none" />
	<h2 class="text-xl font-bold text-center mt-4">{name}</h2>
	<p class="text-sm text-center">{type} • {year} • {amount}</p>
	<a
		href={spotify}
		class="btn table bg-gradient-to-r from-[#00331f] to-[#008535] p-2 px-6 mt-2 m-auto text-white rounded-lg hover:translate-y-1 hover:from-[#13cf5b] hover:to-[#008535] transition-all"
		target="_blank"
		rel="noopener noreferrer">Listen on Spotify <Icon icon="mdi:spotify" width="1.3rem" class="inline-block" /></a
	>
</div>
