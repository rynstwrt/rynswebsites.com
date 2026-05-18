<script lang="ts">
    import './layout.css';
    // import BreakpointVision from "$lib/components/BreakpointVision.svelte";
    import { Button, buttonVariants } from "$ui/button";

    let {children} = $props();
</script>


<svelte:head>
    <title>Ryn's Websites</title>
    <meta name="description" content="Ryn's Websites — Web Development and Design."/>
    <meta property="og:title" content="rynswebsites.com"/>
    <meta property="og:description" content="Ryn's Websites — Web Development and Design."/>
    <meta property="og:url" content="https://rynswebsites.com"/>
    <meta property="og:image" content="https://rynswebsites.com/preview.png"/>
    <meta name="twitter:image" content="https://rynswebsites.com/preview.png"/>
    <meta name="twitter:card" content="summary_large_image"/>
</svelte:head>


{@render children()}

<footer class="backdrop-brightness-80">
    <div class="p-10 flex justify-between gap-6">
        <div class="max-w-xs">
            <h2 class="text-2xl font-medium">Ryn's Websites</h2>
            <p class="text-neutral-400 mt-3">Your place for web development and graphic design.</p>
            <p class="text-xs font-light text-neutral-300 mt-6">
                © {new Date().getFullYear()} All Rights Reserved.
            </p>
        </div>

        <div class="space-y-1 *:font-light flex flex-col items-end">
            <Button variant="ghost"
                    size="sm"
                    onclick={() => document.querySelector("#contact-section")?.scrollIntoView({block: "end"})}>
                Contact
            </Button>

            <a href="https://rynstew.art/resume"
               target="_blank"
               class="{buttonVariants({variant: 'ghost', size: 'sm'})}">Résumé</a>

            <a href="https://rynstew.art/portfolio"
               target="_blank"
               class="{buttonVariants({variant: 'ghost', size: 'sm'})}">Portfolio</a>

            <Button variant="ghost"
                    size="sm"
                    onclick={() => document.body.scrollIntoView({block: "start"})}>Back to top
            </Button>
        </div>
    </div>
</footer>


<style>
    @reference "./layout.css";

    footer {
        @apply bg-background-3;

        /*&::before {*/
        /*    content: "";*/
        /*    position: absolute;*/
        /*    top: 0;*/
        /*    right: 0;*/
        /*    bottom: 0;*/
        /*    left: 0;*/
        /*    background-color: var(--background);*/
        /*    z-index: -2;*/
        /*}*/

        /*&::after {*/
        /*    content: "";*/
        /*    position: absolute;*/
        /*    top: 0;*/
        /*    right: 0;*/
        /*    bottom: 0;*/
        /*    left: 0;*/
        /*    background-color: black;*/
        /*    z-index: -1;*/
        /*    opacity: 0.2;*/
        /*}*/
    }
</style>