<script lang="ts">
    import './layout.css';

    import { resolve } from "$app/paths";

    let {children} = $props();
</script>


<svelte:head>
    <title>Ryn's Websites</title>
    <meta name="description" content="Ryn's Websites — Web Development and Design."/>
    <meta property="og:title" content="rynstew.art"/>
    <meta property="og:description" content="Ryn's Websites — Web Development and Design."/>
    <meta property="og:url" content="https://rynswebsites.com"/>
    <!--<meta property="og:image" content="https://rynstew.art/images/preview.png"/>-->
    <!--<meta name="twitter:image" content="https://rynstew.art/images/preview.png"/>-->
    <!--<meta name="twitter:card" content="summary_large_image"/>-->
</svelte:head>


<!--<div class="navbar absolute collapse-title bg-base-200">-->
<!--    <div class="navbar-start">-->
<!--        <a class="btn btn-ghost text-xl font-semibold" href={resolve("/")}>Ryn's Websites</a>-->
<!--    </div>-->
<!--</div>-->


{@render children()}
