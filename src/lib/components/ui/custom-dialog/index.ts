import { Dialog as DialogPrimitive } from "bits-ui";

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;

import Title from "$lib/components/ui/dialog/dialog-title.svelte";
import Portal from "$lib/components/ui/dialog/dialog-portal.svelte";
import Footer from "$lib/components/ui/dialog/dialog-footer.svelte";
import Header from "$lib/components/ui/dialog/dialog-header.svelte";
import Overlay from "$lib/components/ui/dialog/dialog-overlay.svelte";
import Content from "./dialog-content.svelte";
import Description from "$lib/components/ui/dialog/dialog-description.svelte";

export {
	Root,
	Title,
	Portal,
	Footer,
	Header,
	Trigger,
	Overlay,
	Content,
	Description,
	//
	Root as Dialog,
	Title as DialogTitle,
	Portal as DialogPortal,
	Footer as DialogFooter,
	Header as DialogHeader,
	Trigger as DialogTrigger,
	Overlay as DialogOverlay,
	Content as DialogContent,
	Description as DialogDescription
};
