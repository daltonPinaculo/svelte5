<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col p-8">
	{@render children()}
</div>
