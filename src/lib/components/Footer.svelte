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
    import { defaults, superForm } from "sveltekit-superforms";
    import { zod4 } from "sveltekit-superforms/adapters";
    import * as Form from "$ui/form";
    import { Input } from "$ui/input";
    import { Button } from "$ui/button";
    import { Textarea } from "$ui/textarea";

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


<footer>
    <div class="p-6 flex justify-between gap-6 border-t mt-6">
        <div class="max-w-xs">
            <h2 class="text-3xl font-normal">Ryn's Websites</h2>
            <p class="text-neutral-400 mt-3">Your place for web development and graphic design.</p>
            <!--<Button variant="outline"-->
            <!--        class="mt-8 w-full"-->
            <!--        onclick={() => document.body.scrollIntoView()}>-->
            <!--    Back to Top-->
            <!--</Button>-->
        </div>

        <form method="POST" class="flex-1 max-w-sm" use:enhance>
            <Form.Field {form} name="name">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Name</Form.Label>
                        <Input {...props} bind:value={$formData.name}/>
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Field {form} name="email">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Email</Form.Label>
                        <Input {...props} bind:value={$formData.email}/>
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Field {form} name="phone">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Phone</Form.Label>
                        <Input {...props} bind:value={$formData.phone}/>
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Field {form} name="message">
                <Form.Control>
                    {#snippet children({props})}
                        <Form.Label>Message</Form.Label>
                        <Textarea {...props} bind:value={$formData.message} />
                        <!--<Input {...props} bind:value={$formData.message}/>-->
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors/>
            </Form.Field>

            <Form.Button>Submit</Form.Button>
        </form>
    </div>

    <p class="text-xs text-center py-2">
        Copyright © {new Date().getFullYear()}, rynswebsites.com. All Rights Reserved.
    </p>
</footer>