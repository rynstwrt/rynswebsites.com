<!--<script lang="ts" module>-->
<!--    import { z } from "zod";-->

<!--    import validator from "validator";-->

<!--    const contactFormSchema = z.object({-->
<!--        name: z.string().min(2).max(50),-->
<!--        email: z.email().min(5).max(50),-->
<!--        phone: z.string().refine(validator.isMobilePhone),-->
<!--        service: z.string(),-->
<!--        message: z.string().min(10).max(100)-->
<!--    });-->
<!--</script>-->

<!--<script lang="ts">-->
<!--    import { Button } from "$ui/button";-->
<!--    import { defaults, superForm } from "sveltekit-superforms";-->
<!--    import { zod4 } from "sveltekit-superforms/adapters";-->
<!--    import * as Form from "$ui/form";-->
<!--    import { Input } from "$ui/input";-->
<!--    import { Textarea } from "$ui/textarea";-->
<!--    import { toast } from "svelte-sonner"-->
<!--    import { Select, SelectItem, SelectContent, SelectLabel, SelectTrigger, SelectGroup } from "$ui/select";-->
<!--    import { Resend } from "resend";-->

<!--    let {open = $bindable()} = $props();-->

<!--    let serviceValue = $state("");-->
<!--    const services = [-->
<!--        {value: "none", label: "N/A"},-->
<!--        {value: "single-page-website", label: "Single Page Website"},-->
<!--        {value: "multi-page-website", label: "Multi Page Website"},-->
<!--        {value: "brand-logo", label: "Brand Logo"}-->
<!--    ];-->

<!--    let serviceSelectTriggerText = $derived(-->
<!--        services.find((f) => f.value === serviceValue)?.label ?? "Select a service"-->
<!--    );-->


<!--    const form = superForm(defaults(zod4(contactFormSchema)), {-->
<!--        validators: zod4(contactFormSchema),-->
<!--        SPA: true,-->
<!--        onUpdate: ({form: f}) => {-->
<!--            if (f.valid) {-->
<!--                toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);-->
<!--            } else {-->
<!--                toast.error("Please fix the errors in the form.");-->
<!--            }-->
<!--        }-->
<!--    });-->

<!--    const {form: formData, enhance} = form;-->
<!--</script>-->


<!--<form method="POST" action="/api/email" class="w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4" use:enhance>-->
<!--    <Form.Field {form} name="name" class="col-span-full">-->
<!--        <Form.Control>-->
<!--            {#snippet children({props})}-->
<!--                <Form.Label>Name</Form.Label>-->
<!--                <Input {...props}-->
<!--                       bind:value={$formData.name}-->
<!--                       aria-label="Name"-->
<!--                       placeholder="John Doe"/>-->
<!--            {/snippet}-->
<!--        </Form.Control>-->
<!--        <Form.FieldErrors/>-->
<!--    </Form.Field>-->

<!--    <Form.Field {form} name="email">-->
<!--        <Form.Control>-->
<!--            {#snippet children({props})}-->
<!--                <Form.Label>Email</Form.Label>-->
<!--                <Input {...props}-->
<!--                       bind:value={$formData.email}-->
<!--                       aria-label="Email"-->
<!--                       placeholder="john.doe@example.com"/>-->
<!--            {/snippet}-->
<!--        </Form.Control>-->
<!--        <Form.FieldErrors/>-->
<!--    </Form.Field>-->

<!--    <Form.Field {form} name="phone">-->
<!--        <Form.Control>-->
<!--            {#snippet children({props})}-->
<!--                <Form.Label>Phone</Form.Label>-->
<!--                <Input {...props}-->
<!--                       bind:value={$formData.phone}-->
<!--                       aria-label="Phone"-->
<!--                       placeholder="123-456-7890"/>-->
<!--            {/snippet}-->
<!--        </Form.Control>-->
<!--        <Form.FieldErrors/>-->
<!--    </Form.Field>-->

<!--    <Form.Field {form} name="service" class="col-span-full">-->
<!--        <Form.Control>-->
<!--            {#snippet children({props})}-->
<!--                <Form.Label>Service</Form.Label>-->
<!--                <Select {...props }-->
<!--                        type="single"-->
<!--                        name="service"-->
<!--                        bind:value={serviceValue}>-->
<!--                    <SelectTrigger class="w-full">{serviceSelectTriggerText}</SelectTrigger>-->
<!--                    <SelectContent>-->
<!--                        <SelectGroup>-->
<!--                            <SelectLabel>Relevant Service</SelectLabel>-->
<!--                        </SelectGroup>-->
<!--                        {#each services as service}-->
<!--                            <SelectItem value={service.value} label={service.label}>-->
<!--                                {service.label}-->
<!--                            </SelectItem>-->
<!--                        {/each}-->
<!--                    </SelectContent>-->
<!--                </Select>-->
<!--            {/snippet}-->
<!--        </Form.Control>-->
<!--        <Form.FieldErrors/>-->
<!--    </Form.Field>-->

<!--    <Form.Field {form} name="message" class="col-span-full">-->
<!--        <Form.Control>-->
<!--            {#snippet children({props})}-->
<!--                <Form.Label>Message</Form.Label>-->
<!--                <Textarea {...props}-->
<!--                          bind:value={$formData.message}-->
<!--                          aria-label="Message"-->
<!--                          class="min-h-30"-->
<!--                          placeholder="Type your message here."/>-->
<!--            {/snippet}-->
<!--        </Form.Control>-->
<!--        <Form.FieldErrors/>-->
<!--    </Form.Field>-->

<!--    <Button type="submit" class="col-span-full mt-6">Submit</Button>-->
<!--</form>-->
