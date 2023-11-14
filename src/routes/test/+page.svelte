<script lang="ts">
	import FloatingWindow from '$lib/components/FloatingWindow.svelte';
	import { Files, Facebook } from 'lucide-svelte';
	import { onMount } from 'svelte';




	onMount(async () => {

	})
</script>

<FloatingWindow elementId="elementOne" title="Resources">
	<svelte:fragment slot="icon">
		<Facebook class="w-6 h-6 mx-auto" />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero saepe cupiditate iure, officia
			possimus necessitatibus voluptates repellat blanditiis, maxime laboriosam aperiam perferendis
			magnam vel est. Dignissimos molestiae obcaecati aut asperiores! Lorem, ipsum dolo sit amet
			consectetur adipisicing elit. Laboriosam doloribus vel, enim qui commodi harum iusto,
			quibusdam quasi reprehenderit illo possimus hic, debitis saepe quia ratione porro molestias
			nemo. Error.
		</div>
	</svelte:fragment>
</FloatingWindow>
<FloatingWindow elementId="elementTwo" title="Resources">
	<svelte:fragment slot="icon">
		<Files class="w-6 h-6 mx-auto" />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero saepe cupiditate iure, officia
			possimus necessitatibus voluptates repellat blanditiis, maxime laboriosam aperiam perferendis
			magnam vel est. Dignissimos molestiae obcaecati aut asperiores! Lorem, ipsum dolo sit amet
			consectetur adipisicing elit. Laboriosam doloribus vel, enim qui commodi harum iusto,
			quibusdam quasi reprehenderit illo possimus hic, debitis saepe quia ratione porro molestias
			nemo.
		</div>
	</svelte:fragment>
</FloatingWindow>
<div>

</div>
