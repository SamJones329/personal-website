<script lang="ts">
	export let id = '';
	export let className = '';
</script>

<section {id} class={className + ' ml-32 mr-32'}>
	<slot />
</section>
