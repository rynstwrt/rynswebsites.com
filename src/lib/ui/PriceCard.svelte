<script lang="ts">
    let {title, price, bulletpoints = []} = $props();
    import CheckOutlineIcon from '@iconify-svelte/flowbite/check-outline';
</script>


<div class="card bg-base-100 shadow-md max-w-sm">
    <div class="card-body">
        <span class="badge badge-sm badge-success">Most Popular</span>
        <div class="flex justify-between">
            <h2 class="text-3xl font-bold">{title}</h2>
            <span class="text-xl font-light">{price}</span>
        </div>
        {#if bulletpoints.length}
            <ul class="mt-6 flex flex-col gap-2 text-sm">
                {#each bulletpoints as bp}
                    <li class="flex items-center">
                        <CheckOutlineIcon class="w-5.5 h-5.5 me-1 text-success"/>
                        {bp}
                    </li>
                {/each}
            </ul>
        {/if}
        <div class="mt-6">
            <button class="btn btn-primary btn-block">Purchase</button>
        </div>
    </div>
</div>