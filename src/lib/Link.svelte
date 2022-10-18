<script lang="ts">
	export let url = '';
	export let newTab = true;
	export let doEncodeURI = true;
</script>

<a
	href={doEncodeURI ? encodeURI(url) : url}
	target={newTab ? '_blank' : '_self'}
	rel="noopenner noreferrer"
>
	<slot />
</a>
