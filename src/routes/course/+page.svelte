<script lang="ts">
	import Prompt from "$lib/components/CourseComponents/Prompt.svelte";
	import Responses from "$lib/components/CourseComponents/Responses.svelte";
	import FloatingWindow from "$lib/components/FloatingWindow.svelte";
	import { Files } from 'lucide-svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		// Taking care of the browser-specific prefixes.
		// window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
		// window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;
		// const fileDir = new FileSystemDirectoryEntry();
		// let d = fileDir.getDirectory("/")
		// console.log("Log --> ", d);
	});
</script>

<!-- Todo: change `sideMenu` to something more meaningful -->
<FloatingWindow elementId="sideMenu" title="Resources">
	<svelte:fragment slot="icon">
		<Files class="w-6 h-6 mx-auto" />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div>
			<h3>{'Name-of-course'} Resources</h3>
			<ul class="border">
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</ul>
		</div>
	</svelte:fragment>
</FloatingWindow>

<div class="border-0 mx-2 px-4 mt-6 mb-4 h-[89vh] space-y-4 lg:mx-60">
	<div class="border-2 rounded h-5/6 overflow-y-scroll no-scrollbar">
		<Responses />
	</div>
	<div class="border-0 -mx-4 h-1/6 relative">
		<Prompt />
	</div>
	<!-- hidden -->
	<div
		class="hidden float-right border-2 rounded-lg z-50 top-44 right-8 absolute h-[50%] transition-[width] duration-300 dark:bg-neutral-900 dark:shadow dark:shadow-neutral-800 w-6 hover:transition-[width] hover:w-12 hover:duration-300 lg:hidde truncate"
	>
		<!-- side menu -->
	</div>
</div>
