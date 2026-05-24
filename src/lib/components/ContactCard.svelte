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
        Icon,
        value,
        classes = "",
    } = $props();

    let viewing = $state(false);
</script>


<Card class="w-full max-w-2xs shadow-xl {classes}">
    <CardHeader>
        <CardTitle class="text-3xl font-bold flex justify-center">
            <Icon class="w-15 h-15"/>
        </CardTitle>
    </CardHeader>

    {#if viewing}
        <CardContent class="h-full flex justify-center items-center gap-2">
            <p class="text-base font-normal text-foreground">{value}</p>

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
                            toast(`Error`, {
                                description: "An error occurred",
                                action: {
                                    label: "Close",
                                    onClick: () => {}
                                }
                            });
                        }
                    }}>
                <CopyPlus/>
            </Button>
        </CardContent>
    {/if}

    {#if !viewing}
        <CardFooter>
            <Button class="w-full"
                    onclick={() => {
                        viewing = true;
                    }}>
                Click to Reveal
            </Button>
        </CardFooter>
    {/if}
</Card>