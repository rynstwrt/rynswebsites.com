<script lang="ts">
    import { Card, CardContent } from "$ui/card";
    import { Blocks, Mail, MessageSquareText, Phone, User } from "svelte-lucide";
    import { Input } from "$ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "$ui/select";
    import { Button } from "$ui/button";
    import { Textarea } from "$ui/textarea";
    import * as Field from "$ui/field";

    const services = [
        {value: "single-page-website", label: "Single Page Website"},
        {value: "multi-page-website", label: "Multi Page Website"},
        {value: "brand-logo", label: "Brand Logo"},
    ];
    let serviceSelectValue = $state([]);
    let serviceSelectTriggerText = $derived(serviceSelectValue.length + " selected");
</script>


<Card class="shadow-lg transition-shadow flex-1 max-w-2xl place-self-center">
    <CardContent>
        <form method="POST" action="/contact" class="grid gap-3 sm:grid-cols-3 sm:grid-rows-4">
            <Field.Field class="gap-1 col-span-full sm:col-span-1">
                <Field.Label class="flex items-center">
                    <User size="13"/>
                    Name
                </Field.Label>
                <Input name="name"
                       placeholder="John Doe"
                       aria-label="name"/>
            </Field.Field>

            <Field.Field class="gap-1 col-span-full sm:col-1">
                <Field.Label class="flex items-center">
                    <Mail size="13"/>
                    Email
                </Field.Label>
                <Input name="email"
                       placeholder="john@example.com"
                       aria-label="email"/>
            </Field.Field>

            <Field.Field class="gap-1 col-span-full sm:col-1">
                <Field.Label class="flex items-center">
                    <Phone size="13"/>
                    Phone
                </Field.Label>
                <Input name="phone"
                       placeholder="123-456-7890"
                       aria-label="phone"/>
            </Field.Field>

            <Field.Field class="gap-1 col-span-full sm:col-1">
                <Field.Label class="flex items-center">
                    <Blocks size="13"/>
                    Services
                </Field.Label>
                <Select type="multiple" name="services" bind:value={serviceSelectValue}>
                    <SelectTrigger>{serviceSelectTriggerText}</SelectTrigger>
                    <SelectContent>
                        {#each services as service}
                            <SelectItem value={service.value} label={service.label}/>
                        {/each}
                    </SelectContent>
                </Select>
            </Field.Field>

            <Field.Field class="gap-1 sm:col-span-2 sm:col-start-2 sm:row-span-4 sm:row-start-1">
                <Field.Label class="flex items-center">
                    <MessageSquareText size="13"/>
                    Message
                </Field.Label>
                <Textarea name="message"
                          placeholder="Type your message here."
                          aria-label="message"
                          class="h-full min-h-40"/>
            </Field.Field>

            <Field.Field class="col-span-full mt-3">
                <Button type="submit" size="lg">Submit</Button>
            </Field.Field>
        </form>
    </CardContent>
</Card>