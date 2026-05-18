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
    import { Badge } from "$ui/badge";
    import Check from "@lucide/svelte/icons/check";

    let {
        title,
        price,
        description,
        bulletpoints = [],
        badgeText = undefined,
        badgeClasses = "",
        classes="",
        onClick
    } = $props();
</script>


<Card class="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow {classes}">
    <CardHeader>
        {#if badgeText}
            <Badge variant="secondary"
                   class="{badgeClasses} mb-1">
                {badgeText}
            </Badge>
        {/if}

        <CardTitle class="text-3xl font-bold flex justify-between">
            <!--Custom<br>Website-->
            <span class="max-w-50">{title}</span>
            <span class="font-thin text-2xl">{price}</span>
        </CardTitle>

        <CardDescription class="text-base">{description}</CardDescription>
    </CardHeader>

    <CardContent class="h-full">
        <ul class="space-y-2">
            {#each bulletpoints as bp}
                <li class="flex text-sm font-light">
                    <Check class="w-5 min-w-5 h-5 me-1.5 text-green-300"/>
                    {bp}
                </li>
            {/each}
        </ul>
    </CardContent>

    <CardFooter>
        <Button class="w-full"
                size="lg"
                onclick={() => {
                    // onClick();
                    document.querySelector("#contact-section")?.scrollIntoView()
                }}>Purchase</Button>
    </CardFooter>
</Card>