<script lang="ts">
	export let targetId = '';
	export let active = false;
	export let onClick = (e: MouseEvent) => {};
</script>

<a
	on:click={onClick}
	class={active ? 'text-black text-lg' : 'text-gray-500 text-base'}
	href="#{targetId}"
>
	<slot />
</a>
