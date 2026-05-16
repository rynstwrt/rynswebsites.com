<script lang="ts">
    import './layout.css';
    import BreakpointVision from "$lib/util/BreakpointVision.svelte";
    import ParticleBG from "$components/ParticleBG.svelte";
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from "@tsparticles/slim";

    void particlesInit(async engine => {
        await loadSlim(engine);
    });

    let options = {
        // fullscreen: {
        //     zIndex: -200
        // },
        background: {
            color: "#21252d",
        },
        particles: {
            opacity: {
                value: {
                    min: 0.2,
                    max: .5
                }
            },
            color: {
                value: '#fff'
            },
            links: {
                enable: true,
                color: '#aaa',
                opacity: 0.2
            },
            move: {
                enable: true,
                speed: 0.3
            },
            number: {
                value: 100
            }
        }
    };
    // import ParticleBG from "$components/ParticleBG.svelte";

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


<!--<ParticleBG/>-->

<BreakpointVision enabled={false}/>

<Particles id="ts-particles"
           options={options}
           class="fixed top-0 right-0 bottom-0 left-0 -z-1"/>

{@render children()}
