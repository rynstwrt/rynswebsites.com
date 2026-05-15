<script lang="ts">
    let {title, price, bulletpoints = [], classes="", badgeText=undefined, badgeClasses="badge-success"} = $props();

    import Checkmark from "$icons/Checkmark.svelte";
</script>


<div class="card card-border bg-base-100 shadow-lg w-full max-w-100 {classes}">
    <div class="card-body">
        {#if badgeText}
            <span class="badge {badgeClasses}">{badgeText}</span>
        {/if}

        <div class="flex justify-between">
            <h2 class="card-title text-3xl font-bold">{title}</h2>
            <span class="text-2xl font-light block">{price}</span>
        </div>

        {#if bulletpoints.length}
            <ul class="mt-6 flex flex-col gap-2 text-base">
                {#each bulletpoints as bp}
                    <li class="flex">
                        <Checkmark classes="w-6 min-w-6 h-6 me-1 text-success"/>
                        {bp}
                    </li>
                {/each}
            </ul>
        {/if}

        <div class="card-actions mt-6">
            <button class="btn btn-primary btn-block"
                    onclick={() => {
                        //@ts-ignore
                        contact_modal.showModal();
                    }}>
                Purchase
            </button>
        </div>
    </div>
</div>