<script lang="ts">
	import '../app.css';
	import '@fontsource/fira-sans';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import AppBar from '$lib/components/AppBar.svelte';
	import { Toaster } from 'svelte-sonner';

</script>

<div class="border-none rounded-none mx-0 pt-0 pb-4">
	<ModeWatcher track={true} />
	<AppBar />
	<slot />
	<Toaster richColors expand={false} />
</div>
