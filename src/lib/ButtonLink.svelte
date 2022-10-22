<script lang="ts">
	export let url = '';
	export let newTab = true;
	export let doEncodeURI = true;
	export let inverted = false;
</script>

{#if inverted}
	<div class="flex gradient-border-button-wrapper ml-4 rounded-4xl">
		<a
			href={doEncodeURI ? encodeURI(url) : url}
			target={newTab ? '_blank' : '_self'}
			rel="noopenner noreferrer"
			class="pl-6 pr-6 pt-2 pb-2 rounded-3xl m-px bg-primary-light-700 text-lg"
		>
			<span class="text-gradient-accent">
				<slot />
			</span>
		</a>
	</div>
	<style>
		.gradient-border-button-wrapper {
			position: relative;
			background: var(--gradient-accent);
			padding: 3px; /*effective border stroke*/
		}
	</style>
{:else}
	<a
		href={doEncodeURI ? encodeURI(url) : url}
		target={newTab ? '_blank' : '_self'}
		rel="noopenner noreferrer"
		class="pl-6 pr-6 pt-2 pb-2 rounded-3xl m-px ml-4 bg-gradient-accent text-lg flex items-center"
	>
		<slot />
	</a>
{/if}
