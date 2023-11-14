<script lang="ts">
	import type { FormEventHandler } from 'svelte/elements';
	import Input from './ui/input/input.svelte';
	import { onMount } from 'svelte';
    
    // https://github.com/Kaligraphy247/gpt-with-voice/blob/main/src/app/components/otp-component.tsx
	let optInputValues = {
		one: '',
		two: '',
		three: '',
		four: '',
		five: '',
		six: ''
	};

	onMount(() => {
		// automatically fill input fields on paste
		addEventListener('paste', (event: ClipboardEvent) => {
			const data = event.clipboardData?.getData('text');
			const parentDiv = document.getElementById('otp-form');
			const inputFields = parentDiv?.querySelectorAll('input');

			if (data?.length === inputFields?.length) {
				inputFields?.forEach((input, index) => {
					input.value = data![index];
				});
			}
		});
	});

	/**
	 * Handles input event.
     * It automatically moves focus to the next input field when the user types a digit.
	 *
	 * @param {Event} event - The input event.
	 * @returns {void}
	 */
	const handleInput = (event: Event): void => {
		const input = event?.currentTarget as HTMLInputElement;
		const maxLength = parseInt(input.getAttribute('maxlength') || '0', 10);
		const value = input.value;

		if (value.length === maxLength) {
			const next = input.nextElementSibling as HTMLInputElement | null;
			if (next) {
				next.focus();
			} else {
				// Handle the case when there is no next element
			}
		}
	};
</script>

<form>
	<div class="flex flex-row space-x-2 md:space-x-4 justify-center" id="otp-form">
		<Input
			maxlength={1}
			minlength={1}
			name="one"
			class="w-10 h-10 text-center"
			on:input={handleInput}
		/>
		<Input
			maxlength={1}
			minlength={1}
			name="two"
			class="w-10 h-10 text-center"
			on:input={handleInput}
		/>
		<Input
			maxlength={1}
			minlength={1}
			name="three"
			class="w-10 h-10 text-center"
			on:input={handleInput}
		/>
		<Input
			maxlength={1}
			minlength={1}
			name="four"
			class="w-10 h-10 text-center"
			on:input={handleInput}
		/>
		<Input
			maxlength={1}
			minlength={1}
			name="five"
			class="w-10 h-10 text-center"
			on:input={handleInput}
		/>
		<Input
			maxlength={1}
			minlength={1}
			name="six"
			class="w-10 h-10 text-center"
			on:input={handleInput}
		/>
	</div>
</form>
