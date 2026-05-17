<script lang="ts">
    let {enabled = true} = $props();

    let width = $state(0);

    const breakpoints = {
        0: "xs",
        640: "sm",
        768: "md",
        1024: "lg",
        1280: "xl",
        1536: "2xl"
    };

    let breakpointName = $state("");
    $effect(() => {
        for (const [pixels, name] of Object.entries(breakpoints)) {
            if (width >= parseInt(pixels)) {
                breakpointName = name;
            }
        }
    })
</script>


<svelte:window bind:innerWidth={width}/>


{#if enabled}
    <div class="z-100 w-screen h-screen fixed border-5 pointer-events-none
border-red-400 sm:border-orange-400 md:border-yellow-400 lg:border-green-400 xl:border-blue-400 2xl:border-indigo-400 
text-red-400 sm:text-orange-400 md:text-yellow-400 lg:text-green-400 xl:text-blue-400 2xl:text-indigo-400">
        <p class="text-lg p-5 font-bold">{breakpointName}</p>
    </div>
{/if}


