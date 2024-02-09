<script>
	import '../app.postcss';
	import TopNav from '../lib/TopNav.svelte';
</script>

<main>
	<div id="layout-root">
		<TopNav />
		<slot />
	</div>
</main>

<style>
	#layout-root {
		display: grid;
		grid-template-areas:
			'nav nav nav'
			'content content content';
		grid-template-columns: repeat(3, minmax(10px, 1fr));
	}
</style>
