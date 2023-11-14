<script lang="ts">
	import { MoreHorizontal } from 'lucide-svelte';
	import Dropdown from './dropdown.svelte';
	const mockData = [
		{
			id: 1,
			title: 'Requirement Engineering'
		},
		{
			id: 2,
			title: 'Project: Database Modeling'
		},
		{
			id: 3,
			title: 'Database Modeling'
		},
		{
			id: 4,
			title: 'Theoretical Computer Science'
		}
	];
</script>

<section>
	<h2 class="font-semibold text-xl pl-2 py-3 lg:text-3xl lg:text-center">Recent</h2>
	<ul class="border-0 bg-purple mx-4 rounded space-y-4">
		{#each mockData as item}
			<li class="flex p-2 border rounded shadow hover:shadow-md dark:hover:shadow-neutral-950">
				<div class="w-[90%] truncate my-auto cursor-pointer">
					{item.title}
				</div>
				<!-- <MoreHorizontal class="ml-auto h-6 w-6 my-auto" /> -->
				<Dropdown fullTitle={item.title} />
			</li>
		{/each}
		<!-- <li class="p-2 border rounded shadow hover:shadow-md dark:hover:shadow-neutral-900">1</li> -->
	</ul>
</section>
