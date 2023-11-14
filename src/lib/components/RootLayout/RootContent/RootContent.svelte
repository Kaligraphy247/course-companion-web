<script lang="ts">
	import SearchBar from './SearchBar.svelte';
	import Button from "$lib/components/ui/button/button.svelte";
	import { Plus } from 'radix-icons-svelte';
</script>

<section>
	<!-- <h2 class="font-semibold text-xl pl-2 py-3 lg:text-3xl lg:text-center">Main</h2> -->

	<div class="flex justify-center items-center h-[75vh] border-0 border-purple px-4">
		<div class="inset-0 border-0 space-y-8">
			<SearchBar />
			<h3 class="font-medium text-xl lg:text-2xl">Open an existing course or create a new one</h3>

			<div class="flex justify-center items-center">
				<Button>
					<Plus class="h-6 w-6" />
				</Button>
				<!-- <button>
                    <Plus class="h-6 w-6" />
                </button> -->
			</div>
		</div>
	</div>
</section>
