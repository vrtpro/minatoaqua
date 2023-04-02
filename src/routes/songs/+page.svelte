<script lang="ts">
	import FullScreenCard from '../../components/FullScreenCard.svelte';
	import SongCard from '../../components/SongCard.svelte';
	export let data;
	let EPs = data.songs.EP;
	let singles = data.songs.singles;
</script>

<div class="p-2 px-2">
	<FullScreenCard class="h-auto">
		<h1 class="text-4xl font-bold mt-10 bg-gradient-to-r from-[#df98c2] to-[#4c27b3] text-transparent bg-clip-text">
			Extended Play / EPs
		</h1>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 mt-4">
			{#each EPs as EP}
				<SongCard {...EP} />
			{/each}
		</div>
		<h1 class="text-4xl font-bold mt-10 bg-gradient-to-r from-[#df98c2] to-[#4c27b3] text-transparent bg-clip-text">
			Singles
		</h1>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mt-4">
			{#each singles as single}
				<SongCard {...single} />
			{/each}
		</div>
	</FullScreenCard>
</div>
