<script lang="ts" module>
    import { z } from "zod";

    import validator from "validator";

    const contactFormSchema = z.object({
        name: z.string().min(2).max(50),
        email: z.email().min(5).max(50),
        phone: z.string().refine(validator.isMobilePhone),
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
    import { toast } from "svelte-sonner"
    import { Select, SelectItem, SelectContent, SelectLabel, SelectTrigger, SelectGroup } from "$ui/select";

    let {open = $bindable()} = $props();

    let serviceSelectValue = $state("");
    const relatedServices = [
        {value: "single-page-website", label: "Single Page Website"},
        {value: "multi-page-website", label: "Multi Page Website"},
        {value: "brand-logo", label: "Brand Logo"}
    ];

    let serviceSelectTriggerText = $derived(
        relatedServices.find((f) => f.value === serviceSelectValue)?.label ?? "Related Service"
    );


    const form = superForm(defaults(zod4(contactFormSchema)), {
        validators: zod4(contactFormSchema),
        // SPA: true,
        onUpdate: ({form: f}) => {
            if (f.valid) {
                toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
            } else {
                toast.error("Please fix the errors in the form.");
            }
        }
    });

    const {form: formData, enhance} = form;
</script>


<Dialog bind:open>
    <!--<DialogTrigger></DialogTrigger>-->

    <DialogContent>
        <DialogHeader>
            <DialogTitle class="text-3xl">Contact</DialogTitle>
            <DialogDescription>Reach out to inquire about or purchase services</DialogDescription>
        </DialogHeader>

        <Select type="single" name="service" bind:value={serviceSelectValue}>
            <SelectTrigger class="w-full">{serviceSelectTriggerText}</SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Related Service</SelectLabel>
                </SelectGroup>
                {#each relatedServices as service}
                    <SelectItem value={service.value} label={service.label}>
                        {service.label}
                    </SelectItem>
                {/each}
            </SelectContent>
        </Select>

        <form method="POST" class="w-full grid grid-cols-1 sm:grid-cols-2 gap-1.5" use:enhance>
            <Form.Field {form} name="name" class="col-span-full">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Name</Form.Label>
                        <Input {...props}
                               bind:value={$formData.name}
                               aria-label="Name"
                               placeholder="John Doe"/>
                    {/snippet}
                </Form.Control>
                <Form.Description/>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Field {form} name="email">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Email</Form.Label>
                        <Input {...props}
                               bind:value={$formData.email}
                               aria-label="Email"
                               placeholder="john.doe@example.com"/>
                    {/snippet}
                </Form.Control>
                <Form.Description/>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Field {form} name="phone">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Phone</Form.Label>
                        <Input {...props}
                               bind:value={$formData.phone}
                               aria-label="Phone"
                               placeholder="123-456-7890"/>
                    {/snippet}
                </Form.Control>
                <Form.Description/>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Field {form} name="message" class="col-span-full">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Message</Form.Label>
                        <Textarea {...props}
                                  bind:value={$formData.message}
                                  aria-label="Message"
                                  class="min-h-30"
                        placeholder="Type your message here."/>
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