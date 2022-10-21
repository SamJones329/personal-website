<script lang="ts">
	export let url = '';
	export let newTab = true;
	export let doEncodeURI = true;
</script>

<a
	href={doEncodeURI ? encodeURI(url) : url}
	target={newTab ? '_blank' : '_self'}
	rel="noopenner noreferrer"
	class="pl-6 pr-6 pt-3 pb-3 br-8 m-px ml-4 bg-gradient-orng-shiny"
>
	<slot />
</a>
