<script lang="ts">
    import { tsParticles } from "@tsparticles/engine";
    import { loadSlim } from "@tsparticles/slim";
    import { onMount } from "svelte";

    onMount(() => {
        (async () => {
            await loadSlim(tsParticles);

            await tsParticles.load({
                id: "particle-background",
                options: {
                    particles: {
                        number: {
                            value: 50,
                        },
                        links: {
                            enable: true,
                            distance: 200,
                            opacity: 0.75,
                        },
                        move: {
                            enable: true,
                            speed: 0.5,
                        },
                    },
                },
            });
        })();
    })
</script>


<div class="-z-1 fixed top-0 right-0 bottom-0 left-0 blur-xs backdrop-brightness-80 backdrop-contrast-110">
    <div id="particle-background" class="opacity-10"></div>
</div>
