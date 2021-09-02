<script lang="ts">
	import Home from './Pages/Home.svelte';
	import Overview from './Pages/Overview.svelte';
	import Information from './Pages/Information.svelte';
	import Links from './Pages/Links.svelte';
	import Error404 from './Pages/Error404.svelte';
	import router from 'page';
	export let name, inRealBirthdate, greetingsWord, fanName, firstDebut, generation, height, weight, introductionWords, oshiMark, hobby, goals, likeThings, uniqueSkill;
	let page;
	let props;
	const dataProps = () => {
		page = Home, Overview, Information;
		props = { 
			name,
			inRealBirthdate,
			greetingsWord,
			fanName,
			firstDebut,
			generation,
			height,
			weight,
			introductionWords,
			oshiMark,
			hobby,
			goals,
			likeThings,
			uniqueSkill
		};
	};
	dataProps();
	router('/', () => page = Home);
	router('/overview', () => page = Overview);
	router('/info', () => page = Information);
	router('/links', () => page = Links);
	router('*', () => page = Error404);
	router.start();
</script>
<svelte:component this={page} {...props}/>