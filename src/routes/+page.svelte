<script lang="ts">
	import FullScreenCard from '../components/FullScreenCard.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="p-2 px-2">
	<FullScreenCard class="lg:flex h-auto">
		<div class="p-2 lg:py-16 lg:flex lg:w-1/2">
			<div class="my-4 lg:mt-20 m-auto">
				<h1
					class="text-4xl text-center font-bold mt-10 bg-gradient-to-r from-[#df98c2] to-[#4c27b3] text-transparent bg-clip-text"
				>
					Minato Aqua 湊あくあ
				</h1>
				<p class="text-base my-3 text-center">
					A-quality day to one and all, I'm Minato Aqua!
					<br />
					A marine maid-styled virtual maid. I am trying my best, yet is still sometimes awkward and clumsy.
				</p>
				<a
					href="/about"
					class="btn table bg-gradient-to-r from-[#070d2b] to-[#151b4c] p-2 px-6 m-auto text-white rounded-lg hover:translate-x-3 transition-all"
					>Discover more <Icon
						icon="material-symbols:arrow-right-alt-rounded"
						width="1.3rem"
						class="inline-block"
					/></a
				>
			</div>
		</div>
		<div class="lg:hidden p-2 block lg:py16 lg:flex-1">
			<img
				src="/sveltekit_assets/aqua-portrait.webp"
				alt="Model"
				class="w-auto m-auto pointer-events-none"
				height="0"
				width="0"
			/>
		</div>
		<div class="hidden p-2 lg:block lg:py16 lg:flex-1">
			<img
				src="/sveltekit_assets/aqua-portrait.webp"
				alt="Model"
				class="h-[35rem] w-auto m-auto pointer-events-none"
				height="0"
				width="0"
			/>
		</div>
	</FullScreenCard>
</div>
