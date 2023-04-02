<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div>
	<header class="pt-4 px-4 lg:px-12 font-lexend">
		<nav
			class="mx-auto fixed p-4 py-3 h-14 bg-[#df98c2] text-white flex justify-between shadow-lg rounded-2xl z-10"
		>
			<div class="pr-8">
				<a href="/" class="navbar__link" aria-label="Choco Logo">
					<img src="/favicon.png" alt="Logo" class="w-9 h-auto" width="0" height="0" />
				</a>
			</div>
			<div class="bg-[#4b4e94] h-8 text-chocolate-700 rounded-lg px-4 transition-all">
				<ul class="flex gap-4 pt-[0.45rem]">
					<li class="navbar__list">
						<a href="/" class="navbar__link" aria-label="Home page"><Icon icon="material-symbols:home" /></a
						>
					</li>
					<li class="navbar__list">
						<a href="/about" class="navbar__link" aria-label="About page"
							><Icon icon="material-symbols:person" /></a
						>
					</li>
					<li class="navbar__list">
						<a href="/songs" class="navbar__link" aria-label="Songs page"
							><Icon icon="material-symbols:music-note-rounded" /></a
						>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</div>
