<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css';
	import '@fortawesome/fontawesome-free/js/all.js';

	import Link from '$lib/Link.svelte';

	const socials = [
		{
			link: 'mailto:spjones329@gmail.com',
			icon: 'fa-regular fa-envelope'
		},
		{
			link: 'https://github.com/SamJones329',
			icon: 'fa-brands fa-github'
		},
		{
			link: 'https://www.linkedin.com/in/samuel-jones-32901/',
			icon: 'fa-brands fa-linkedin'
		}
	];

	let drawerOpen = false;
</script>

<nav aria-label="site navigation" class="flex flex-row justify-between fixed p-4 w-full z-50">
	<span class="font-display text-2xl font-semibold"
		><Link url="/" newTab={false}>Samuel Jones</Link></span
	>

	<div class="flex flex-row items-center ">
		<ul class="flex flex-row text-2xl">
			{#each socials as social}
				<li class="mr-8">
					<Link url={social.link}><i class={social.icon} /></Link>
				</li>
			{/each}
		</ul>
		<button
			class="ml-4"
			aria-label="open site nav drawer"
			on:click={() => (drawerOpen = !drawerOpen)}
			><img src="menuicon.svg" alt="" srcset="" /></button
		>
		<ul class={'absolute ' + (drawerOpen ? '' : 'hidden')}>
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
	</div>
</nav>

<slot />
