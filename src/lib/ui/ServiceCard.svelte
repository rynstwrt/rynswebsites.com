<script lang="ts">
    import { Button, Card } from "flowbite-svelte";
    import { CheckCircleSolid } from "flowbite-svelte-icons";

    let {title, price, bulletpoints = []} = $props();
</script>


<Card class="p-4 sm:p-8 md:p-10">
    <h5 class="text-body mb-4 text-xl font-medium">{title}</h5>

    <div class="text-heading flex items-baseline">
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">{price}</span>
        <!--<span class="text-body ms-1 text-xl font-normal">/month</span>-->
    </div>

    <ul class="my-7 space-y-4">
        {#each bulletpoints as bp}
            <li class="flex space-x-2 rtl:space-x-reverse">
                <CheckCircleSolid class="text-fg-brand h-4 w-4"/>
                <span class="text-body text-base leading-tight font-normal">{bp}</span>
            </li>
        {/each}
    </ul>

    <Button class="w-full">Purchase</Button>
</Card>