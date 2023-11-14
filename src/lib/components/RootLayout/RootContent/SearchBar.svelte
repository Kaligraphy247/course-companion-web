<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Search } from 'lucide-svelte';
</script>

<form class="flex w-full max-w-md mx-auto items-center space-x-2">
	<Input type="email" placeholder="Search for a course" />
	<Button type="submit">
		<Search class="h-5 w-5 my-auto" />
	</Button>
</form>
