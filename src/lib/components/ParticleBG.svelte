<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from "@tsparticles/slim";
    import { loadConfettiPreset } from "@tsparticles/preset-confetti";

    void particlesInit(async engine => {
        await loadSlim(engine);
        await loadConfettiPreset(engine);
    });

    let options = {
        fullscreen: {
            zIndex: -200
        },
        particles: {
            opacity: {
                value: {
                    min: 0.1,
                    max: 0.5
                }
            },
            color: {
                value: '#ff00ff',
            },
            links: {
                enable: true,
                color: '#fff'
            },
            move: {
                enable: true
            },
            number: {
                value: 100
            }
        }
    };
</script>

<!--options={{preset: "confetti"}}-->

<Particles id="ts-particles"
           options={options}
           class="[&>canvas]:-z-200! -z-200! [&>canvas]:border"/>