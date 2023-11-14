<script>
    import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/custom-dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
    import OTPComponent from './OTPComponent.svelte';

	let dialogOpen = true;
</script>

<Dialog.Root bind:open={dialogOpen} closeOnEscape={false} closeOnOutsideClick={false}>
    <Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Edit Profile</Dialog.Trigger>
    <Dialog.Content class="max-w-[425px] md:max-w-[460px] lg:max-w-[540px] lg:max-h-p-[425px]">
        <Dialog.Header>
            <Dialog.Title class="text-center">You are not logged in ...</Dialog.Title>
            <Dialog.Description>
                You need to be logged in to continue. This won't take time, we promise 🤞.
            </Dialog.Description>
        </Dialog.Header>
        <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
                <Label class="text-right">Username</Label>
                <Input id="username" value="" class="col-span-3" />
            </div>
        </div>
        <!-- todo would change a lot -->
        <div class="border-0 w-full h-16 flex justify-center items-center border-dotted rounded">
            <!-- OTP code will be here -->
            <OTPComponent />
        </div>
        <div class="relative">
            <p class="text-sm text-muted-foreground absolute right-0 -bottom-3"><a href="/signup" class="hover:underline underline-offset-2 decoration-dotted text-blue-500">Sign up</a>, if you don't have an account</p>
        </div>
        <!-- end todo -->
        <Dialog.Footer>
            <Button type="submit">Login</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>