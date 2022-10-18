<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '@fortawesome/fontawesome-free/js/all.js';

	import Link from '$lib/Link.svelte';
	import PageLink from '$lib/PageLink.svelte';

	let drawerOpen = false;
</script>

<nav aria-label="site navigation" class="flex flex-row justify-between fixed p-4 w-full">
	<ul class="flex flex-row">
		<li>Samuel Jones</li>
		<li>
			<Link url="mailto:spjones329@gmail.com"><i class="fa-regular fa-envelope" /></Link>
		</li>
		<li>
			<Link url="https://github.com/SamJones329"><i class="fa-brands fa-github" /></Link>
		</li>
		<li>
			<Link url="https://www.linkedin.com/in/samuel-jones-32901/"
				><i class="fa-brands fa-linkedin" /></Link
			>
		</li>
	</ul>

	<button aria-label="open site nav drawer" on:click={() => (drawerOpen = !drawerOpen)}>Menu</button
	>
	<ul class={drawerOpen ? '' : 'hidden'}>
		<li>
			<Link url="/about">More about me</Link>
		</li>
		<li>
			<Link url="/work">Work history</Link>
		</li>
		<li>
			<Link url="/projects">More projects</Link>
		</li>
	</ul>
</nav>

<slot />
