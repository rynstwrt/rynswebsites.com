<script lang="ts">
    import './layout.css';
    import BreakpointVision from "$lib/util/BreakpointVision.svelte";

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


<BreakpointVision enabled={false}/>

{@render children()}
