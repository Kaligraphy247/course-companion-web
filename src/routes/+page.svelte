<script lang="ts">
    import RootSidebar from "$lib/components/RootLayout/RootSidebar/RootSidebar.svelte";
    import RootContent from "$lib/components/RootLayout/RootContent/RootContent.svelte";
</script>


<div
	class="hidden md:border-0 md:grid md:grid-cols-3 md:pt-6 lg:pt-8 gap-6 md:gap-8 mx-8 lg:mx-10 md:h-[91.5vh]"
>
	<div class="border dark:border-2 dark:bg-neutral-900 rounded col-span-1">
		<RootSidebar />
	</div>
	<div class="border dark:border-2 rounded border-green col-span-2 dark:bg-neutral-950">
		<RootContent />
	</div>
</div>

<!-- Warning for smaller screens -->
<div class="md:hidden">
    <div class="border-0 flex justify-center items-center h-[90vh]">
        <div>
            <p>This app works better from a device with a larger screen. </p>
            <p class="text-center pt-2 text-3xl">💻 &middot; 🖥️</p>
        </div>
    </div>
</div>