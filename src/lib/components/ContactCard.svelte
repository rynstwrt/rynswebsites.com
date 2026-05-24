<script lang="ts">
    import { Button } from "$ui/button";
    import {
        Card,
        CardHeader,
        CardTitle,
        CardDescription,
        CardContent,
        CardFooter
    } from "$ui/card";
    import { CopyPlus } from "svelte-lucide";
    import { toast } from "svelte-sonner";

    let {
        title,
        description,
        value,
        classes = "",
    } = $props();

    let viewing = $state(false);
</script>


<Card class="w-full max-w-md shadow-xl {classes}">
    <CardHeader>
        <CardTitle class="text-3xl font-bold flex justify-between">
            <span class="max-w-50">{title}</span>
        </CardTitle>

        <CardDescription class="text-base">{description}</CardDescription>
    </CardHeader>

    {#if viewing}
        <CardContent class="h-full flex justify-center items-center gap-2">
            <p class="text-base font-normal text-foreground tracking-wide">{value}</p>
            <Button size="icon-sm"
                    onclick={() => {
                        try {
                            navigator.clipboard.writeText(value);
                            toast(`Copied "${value}" to clipboard`, {
                                action: {
                                    label: "Close",
                                    onClick: () => {}
                                }
                            });
                        } catch (err) {
                            alert(err);
                        }
                    }}>
                <CopyPlus/>
            </Button>
        </CardContent>
    {/if}

    {#if !viewing}
        <CardFooter>
            <Button class="w-full"
                    size="lg"
                    onclick={() => {
                        viewing = true;
                    }}>
                View
            </Button>
        </CardFooter>
    {/if}
</Card>