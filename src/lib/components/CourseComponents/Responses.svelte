<script lang="ts">
	import { Headphones, User, Bot } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';

	export let isDataLoading: boolean = true;

	// Simulate data loading
	setTimeout(() => {
		isDataLoading = false;
	}, 2500);

	let mockData = [
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		},
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		},
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		},
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		},
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		},
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		},
		{
			prompt: 'What was your favorite thing to do in your free time?',
			response:
				'My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family. My favorite thing to do in my free time is play video games with my friends and family. I also like to play video games with my friends and family.'
		}
	];
</script>

<!-- 
    @component
    Responses Component

    This component displays a list of responses. It takes an array of mock data as input and renders each response item with a user and bot icon. If the data is still loading, it displays skeleton placeholders. Each response item has a prompt and a response message, and the response message can be played with a button.

    Props:
    - mockData: Array - The array of mock data containing the response items.
    - isDataLoading: boolean - Whether the data is still loading.

    Example usage:
    <Responses mockData={mockData} />
-->
<ul class="border-0 font-light px-6 my-4 space-y-8">
	{#each mockData as data}
		<li class="space-y-1.5">
			<p
				class="flex border rounded shadow px-1.5 py-0.5 dark:bg-neutral-900 dark:shadow dark:shadow-stone-900"
			>
				<span class="my-1 mr-3 border rounded shadow dark:bg-neutral-700 p-0.5">
					<User class="py-auto h-5 w-5 lg:w-6 lg:h-6" />
				</span>
				<span class="my-auto">{data.prompt}</span>
			</p>
			<p
				class="flex relative border rounded shadow-md px-2 py-3 dark:bg-neutral-950 dark:shadow dark:shadow-stone-900"
			>
				<span class="h-fit mr-3 border rounded shadow dark:bg-neutral-700 p-0.5">
					<Bot class="py-auto h-5 w-5 lg:w-6 lg:h-6" />
				</span>
				{#if isDataLoading}
					<div class="items-center space-y-2 w-full">
						<Skeleton class="h-3 w-full" />
						<Skeleton class="h-3 w-full" />
						<Skeleton class="h-3 w-[88%]" />
					</div>
				{:else}
					<span class="mb-4">{data.response}</span>
					<Button class="w-8 h-8 absolute bottom-2 right-2">
						<span><Headphones class="py-auto h-4 w-4 lg:w-5 lg:h-5" /></span>
					</Button>
				{/if}
			</p>
		</li>
	{/each}
</ul>
