<script lang="ts">
	import { onMount } from 'svelte';
	import { Image, X } from 'lucide-svelte';
	import makeDraggable from '$lib/makeDraggable';

	// Props
	/** The ID of the component's root element - **_compulsory_**. */
	export let elementId: string;
	
	/** The title of the floating window. Defaults to "Untitled" if not provided. */
	export let title: string;

	// Private
	let contentHidden: boolean = true;

	onMount(() => {
		// Get the draggable element by its ID
		const draggableElement = document.getElementById(elementId)!;

		// Make the element draggable
		makeDraggable(draggableElement);
	});
</script>

<!-- 
    @component
    FloatingWindow Component

    @description
    This component represents a floating window that can be toggled to show or hide its content. It consists of a button with an icon that, when clicked, reveals the content of the window. The window contains a title, a content area, and a close button.

    @props
    - elementId: The ID of the component's root element.
    - title: The title of the floating window.
    - contentHidden **(private)**: A boolean indicating whether the content of the window is hidden or visible.

    @slots
    - icon: The icon to be displayed on the button.
    - content: The content to be displayed inside the window. If no content is provided, a default message will be shown.

    @events
    - None

    @usage
    ```svelte
    <FloatingWindow elementId="my-window" title="My Window">
        <div slot="icon">🔒</div>
        <div slot="content">
            This is the content of my window.
        </div>
    </FloatingWindow>
    ```
-->
<div class={`absolute z-50 border-0 p-4`} id={elementId}>
	<button
		class="border p-1 rounded-full w-10 h-10 mb-2 bg-black text-white dark:bg-white dark:text-black dark:border-0"
		on:dblclick={() => {
			contentHidden = false;
		}}
	>
		<slot name="icon"><Image class="w-6 h-6 mx-auto" /></slot>
	</button>
	<div
		class={`${
			contentHidden === true ? 'hidden' : 'block'
		} border-8 overflow-auto resize p-2 relative rounded-md shadow-md bg-white dark:bg-black dark:shadow-neutral-900`}
	>
		<button on:click={() => (contentHidden = true)} class="absolute top-3 right-2">
			<X class="text-neutral-500 hover:scale-125" />
		</button>
		<h2 class="font-medium text-center text-xl tracking-wide pb-2">
			{title === undefined ? 'Untitled' : title}
		</h2>
		<div
			class="border whitespace-normal block rounded p-2 w-[480px] h-[320px] lg:w-[520px] lg:h-[480px]"
		>
			<slot name="content">No content was provided</slot>
		</div>
	</div>
</div>
