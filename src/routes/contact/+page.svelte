<script lang="ts">
    import type { PageProps } from "./$types";
    import { Button } from "$ui/button";
    import { resolve } from "$app/paths";

    let {data, form}: PageProps = $props();
</script>


<div class="min-h-full flex flex-col justify-center items-center">
    {#if form?.success}
        <p class="text-lg text-green-300 max-w-xs text-center text-balance">Successfully sent your message!</p>
    {:else}
        <p class="text-lg text-red-400 max-w-xs text-center text-balance">An error occurred while sending your
            message!</p>
    {/if}


    <Button variant="outline"
            class="mt-6 w-50"
            href={resolve("/")}>Return
    </Button>
</div>