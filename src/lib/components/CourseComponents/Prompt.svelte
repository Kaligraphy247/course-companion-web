<script lang="ts">
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Mic, MicOff, SendHorizonal } from 'lucide-svelte';
	let promptLength: string = '';
</script>

<!--
    @component
    Prompt Element

    @description
    This component represents the prompt element used for user input. It consists of a text area, a microphone button, and a send button.

    @props
    - promptLength: The length of the prompt text entered by the user.

    @slots
    - default: The default slot can be used to include additional content within the prompt element.

    @events
    - click: Fired when the send button is clicked.
-->

<div class="border-0 flex space-x-4 py-0 px-4 absolute bottom-4 w-full">
	<!-- {@html promptLength.length} -->
	<Textarea
		placeholder="Ask me anything..."
		class={`w-full ${
			promptLength.length > 200
				? 'transition-[height] h-28 duration-[750ms]'
				: 'h-16 transition-[height] duration-1000'
		} rounded resize-none dark:bg-neutral-900 border-2 dark:shadow dark:shadow-stone-900`}
		bind:value={promptLength}
	/>
	<!-- <textarea class="border w-full rounded resize-none bg-inherit"></textarea> -->
	<Button
		class="my-auto"
		on:click={() => {
			console.log(promptLength);
		}}><MicOff class="py-auto w-4 h-4" /></Button
	>
	<Button class="my-auto"><SendHorizonal class="py-auto w-4 h-4" /></Button>
</div>
