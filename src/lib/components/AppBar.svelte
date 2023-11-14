<script lang="ts">
	import { BookOpen, Cloud, Github, Home, LifeBuoy, LogOut, Settings, User } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import ToggleDarkMode from './ToggleDarkMode.svelte';
	import { beforeUpdate } from 'svelte';
	import { page } from '$app/stores';

	// Automatically set the title of each page based on `$page.url.pathname`
	let pageTitle: string = "";

	// List of objects containing pathname and intended titles
	let headerTitle = [
		{ pathname: '', title: 'Course Companion' },
		{ pathname: '/', title: 'Course Companion' },
		{ pathname: '/course', title: 'Course' },
		{ pathname: '/settings', title: 'Settings' },
		{ pathname: '/test', title: 'Test' }
	];

	beforeUpdate(() => {
		// console.log('Path name: ', $page.url.pathname); //! debug
		// Map the title to the current matching pathname
		headerTitle.map((item) => {
			if (item.pathname === $page.url.pathname) {
				pageTitle = item.title;
			}
		});
	});
</script>

<div
	class="border bg-white py-3 rounded-none mx-0 flex space-x-4 shadow dark:bg-neutral-900 dark:shadow-neutral-950 px-4 justify-between"
>
	<div>
		<h1 class="text-3xl font-medium">{pageTitle}</h1>
	</div>
	<div class="float-right flex space-x-4 my-auto">
		<!-- Dark Mode Toggle -->
		<ToggleDarkMode />
		<!-- Dropdown -->
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline" class="px-6">
					<User />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.Label>
					<h2 class="font-medium">My Account</h2>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<a href="/" class="flex my-auto w-full">
							<Home class="my-auto mr-2 h-4 w-4" />
							<span class="font-medium">Home</span>
						</a>
						<!-- <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut> -->
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<a href="/course" class="flex w-full">
							<BookOpen class="my-auto mr-2 h-4 w-4" />
							<span class="font-medium">Course</span>
						</a>
						<!-- <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut> -->
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<a href="/test" class="flex w-full">
							<LifeBuoy class="my-auto mr-2 h-4 w-4" />
							<span class="font-medium">Test</span>
						</a>
						<!-- <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut> -->
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<a href="/settings" class="flex w-full">
							<Settings class="my-auto mr-2 h-4 w-4" />
							<span class="py-auto">Settings</span>
						</a>
						<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<!-- <DropdownMenu.Item>
						<Keyboard class="mr-2 h-4 w-4" />
						<span>Keyboard shortcuts</span>
						<DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
					</DropdownMenu.Item> -->
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<Github class="mr-2 h-4 w-4" />
					<span>GitHub</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<LifeBuoy class="mr-2 h-4 w-4" />
					<span>Support</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<Cloud class="mr-2 h-4 w-4" />
					<span>API</span>
				</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<LogOut class="mr-2 h-4 w-4" />
					<span>Log out</span>
					<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</div>
