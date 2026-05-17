<script lang="ts" module>
    import { z } from "zod";

    const contactFormSchema = z.object({
        name: z.string().min(2).max(50),
        email: z.email().min(5).max(50),
        phone: z.number().min(9).max(20),
        message: z.string().min(10).max(100)
    });
</script>

<script lang="ts">
    import {
        Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
    } from "$ui/dialog";
    import { Button } from "$ui/button";
    import { defaults, superForm } from "sveltekit-superforms";
    import { zod4 } from "sveltekit-superforms/adapters";
    import * as Form from "$ui/form";
    import { Input } from "$ui/input";
    import { Textarea } from "$ui/textarea";
    // import * as Dialog from "$ui/dialog";
    import { onMount } from "svelte";

    let {open = $bindable()} = $props();

    const form = superForm(defaults(zod4(contactFormSchema)), {
        validators: zod4(contactFormSchema),
        SPA: true,
        onUpdate: ({form: f}) => {
            if (f.valid) {

            } else {

            }
        }
    });

    const {form: formData, enhance} = form;
</script>


<Dialog bind:open>
    <DialogTrigger></DialogTrigger>

    <DialogContent>
        <DialogHeader>
            <DialogTitle>Contact</DialogTitle>
            <DialogDescription>Reach out to inquire about or purchase services</DialogDescription>
        </DialogHeader>

        <form use:enhance>
            <Form.Field {form} name="email">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Email</Form.Label>
                        <Input {...props}
                               bind:value={$formData.email}
                               aria-label="Email"/>
                    {/snippet}
                </Form.Control>
                <Form.Description/>
                <Form.FieldErrors/>
            </Form.Field>
        </form>

        <DialogFooter>
            <Button>Submit</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>