<script lang="ts">
	let clazz: any;
	export { clazz as class };
</script>

<div class={`fsc h-[95vh] bg-[#efefef] bg-opacity-60 backdrop-blur-sm p-4 rounded-xl shadow-lg ${clazz || ''}`}>
	<slot />
</div>
