<script lang="ts">
	import Link from '$lib/Link.svelte';
	import PageLink from '$lib/PageLink.svelte';
	import Section from '$lib/Section.svelte';
	import { throttleEvent } from '$lib/lib';
	import { onMount } from 'svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';

	const SECTIONS = ['welcome', 'about', 'work', 'projects', 'contact'];
	let sectionElems: HTMLCollection; // assumed this order ^
	let activeSection: number;

	function discreteScroll(e: WheelEvent & { currentTarget: EventTarget & Window }) {
		e.preventDefault();
		console.log(e);
		if (e.deltaY > 0) {
			//down
			if (activeSection < SECTIONS.length - 1) {
				activeSection++;
				console.log(`scrolling down to ${SECTIONS[activeSection]}`);
				sectionElems[activeSection]?.scrollIntoView({ behavior: 'smooth' });
			}
		} else if (e.deltaY < 0) {
			//up
			if (activeSection > 0) {
				activeSection--;
				console.log(`scrolling up to ${SECTIONS[activeSection]}`);
				sectionElems[activeSection]?.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	const getActiveSec = () => {
		for (let i = 0; i < sectionElems.length; i++) {
			const sec = sectionElems[i];
			const rect = sec.getBoundingClientRect();
			if (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			) {
				activeSection = i;
				console.log(`setting active section to ${SECTIONS[i]}`);
				break;
			}
		}
	};

	// TODO - set current active section when page is refreshed
	onMount(() => {
		window.addEventListener('wheel', throttleEvent(discreteScroll, 1000, true), { passive: false });
		sectionElems = document.getElementsByTagName('section');
		console.log(sectionElems);
		getActiveSec();
	});

	function getClickForSection(idx: number) {
		return () => {
			activeSection = idx;
			console.log('scrolling to ' + SECTIONS[idx]);
		};
	}
</script>

<!-- <svelte:window on:scroll={throttle(discreteScroll, 300)} /> -->

<nav aria-label="page navigation" class="max-w-max fixed h-screen flex items-center pl-4 z-10">
	<ul>
		{#each SECTIONS as section, i}
			<li>
				<PageLink active={activeSection == i} targetId={section} onClick={getClickForSection(i)}>
					{section}
				</PageLink>
			</li>
		{/each}
	</ul>
</nav>

<img id="cloudtype2--3" src="LightCloudType2.svg" alt="" />
<img id="sun" src="Sun.svg" alt="" />
<img id="cloudtype1--1" src="LightCloudType1.svg" alt="" />
<img id="cloudtype1--2" src="LightCloudType1.svg" alt="" />
<img id="cloudtype2--1" src="LightCloudType2.svg" alt="" />
<img id="cloudtype2--2" src="LightCloudType2.svg" alt="" />
<img id="cloudtype3--1" src="LightCloudType3.svg" alt="" />
<Section id="welcome">
	<div class="flex flex-row">
		<div class="flex flex-col">
			<h1 class="text-right max-w-max font-display text-10xl">SAMUEL<br />JONES</h1>
			<img class="w-full pl-8" src="underline.svg" alt="" />
		</div>
		<img
			src="logo.svg"
			style="display: none;"
			width="50%"
			alt="Samuel Jones' Logo"
			class="horiz-flip"
		/>
	</div>
</Section>

<Section id="about">
	<SectionHeader>About Me</SectionHeader>
	<p>
		<strong>Hi!</strong> My name is <strong>Samuel Jones</strong>, and I am a senior in Computer
		Science at Louisiana State University.
	</p>
	<div>
		<h3>Student</h3>
		<p>
			I love learning about as many aspects of computer science as I can. To this end, I've taken
			courses and done projects in areas including web development, cybersecurity, video game
			design, computer vision, and autonomous robotics.
		</p>
	</div>
	<div>
		<h3>Engineer</h3>
		<p>
			Although the pure thrill of problem solving is what first attracted me to programming, over
			the past few years I have come to love visual design, which I prefer to show through my work
			than tell. I also enjoy and have some experience working in other areas of web development
			like backend.
		</p>
	</div>
</Section>

<Section id="work">
	<SectionHeader>Work Experience</SectionHeader>
	<div class="flex flex-row">
		<div class="flex flex-col w-1/2">
			<h3 class="text-4xl font-bold">Flexport</h3>
			<p class="text-l relative left-4 pr-4">
				My most recent experience is my <strong>Full Stack Software Engineer</strong> internship at Flexport.
				There I owned a support form integration feature end-to-end, heavily refactoring the feature
				in one application and adding an implementation in another, allowing better user experience and
				reduced complexity when modifying the support form. This allowed me to work as a full-stack developer
				in a scrum team on my own project and general tasks, developing with technologies such as React.js,
				Ruby on Rails, NextJS, Flow, and GraphQL.
			</p>
		</div>
		<img src="flexport.jpg" alt="Flexport logo" srcset="" />
	</div>
	<span
		class="absolute h-screen flex items-center pr-4 top-0 right-0"
		aria-label="click this or scroll right to see more work experience">See More</span
	>
</Section>

<Section id="projects">
	<SectionHeader>My Projects</SectionHeader>
	<div>
		<h3>Google Font Box</h3>
		<p>
			My most recent project is Google Font Box! Google Font Box is a simple tool to help developers
			develop font and color schemes for their next project, as users can make custom font schemes
			from Google Fonts and choose their own colors as well.
		</p>
		<p>Technologies: Svelte, SvelteKit, TypeScript, Bootstrap, SCSS</p>
		<Link url="https://samjones329.github.io/google-font-box">Try it out!</Link>
		<Link url="https://github.com/samjones329/google-font-box">GitHub</Link>
		<img src="googlefontboxscreenshot.png" alt="Screenshot of Google Font Box" />
	</div>
	<span aria-label="click this or scroll right to see more projects">See More</span>
</Section>

<Section id="contact">
	<SectionHeader>Contact Me</SectionHeader>
	<div>
		<img src="logo.svg" alt="Samuel Jones' Logo" />
		<Link
			url={'mailto:spjones329@gmail.com' +
				'?subject=' +
				'Hello from your website!' +
				'&body=' +
				'Hello Samuel,\n\n' +
				'Your message/request here...\n\n' +
				'Regards,\n' +
				'Your name here...'}
		>
			<i class="fa-regular fa-envelope" /> spjones329@gmail.com
		</Link>
	</div>
	<div>
		<form action="">
			<label for="name">Name</label>
			<input type="text" name="name" />

			<label for="senderemail">Your Email</label>
			<input type="text" name="senderemail" />

			<label for="message">Message</label>
			<input type="text" name="message" />

			<button type="submit">Send</button>
		</form>
	</div>
</Section>

<style>
	#cloudtype1--1 {
		position: absolute;
		width: 35rem;
		right: 3.5rem;
		top: 6.5rem;
	}

	#cloudtype1--2 {
		position: absolute;
		width: 35rem;
		right: -20rem;
		top: -4.25rem;
		transform: rotate(-180deg);
	}

	#cloudtype2--1 {
		position: absolute;
		width: 55rem;
		right: -17rem;
		bottom: 1rem;
	}

	#cloudtype2--2 {
		position: absolute;
		width: 50rem;
		top: -13.5rem;
		left: 5rem;
		transform: matrix(-1, 0, 0, 1, 0, 0);
	}

	#cloudtype2--3 {
		position: absolute;
		right: -22rem;
		top: -1.5rem;
		width: 50rem;
		transform: rotate(-180deg);
	}

	#cloudtype3--1 {
		position: absolute;
		width: 28rem;
		left: 0;
		bottom: 0;
	}

	#sun {
		position: absolute;
		width: 15rem;
		right: 3rem;
		top: 4rem;
	}
</style>
