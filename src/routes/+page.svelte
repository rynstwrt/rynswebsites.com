<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';

    let particlesConfig = {
        fullScreen: {
            // enable: true,
            // zIndex: -1
        },
        detectRetina: true,
        particles: {
            number: {
                value: 50,
            },
            links: {
                enable: true,
                distance: 150,
                opacity: 0.75,
            },
            move: {
                enable: true,
                speed: 0.5,
            }
        },
    }

    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });
</script>


<div class="w-screen h-screen fixed -z-1 opacity-10">
    <Particles id="tsparticles" options={particlesConfig} />
</div>


<section id="landing" class="w-full h-screen flex justify-center items-center backdrop-blur-[1px] backdrop-brightness-85 backdrop-contrast-110 bg-transparent">
    <div class="max-w-xs">
        <h1 class="text-5xl font-bold">I'm Ryn, <br>designer and developer.</h1>
        <p class="text-lg mt-4">Your place for web development and graphic design.</p>
        <button class="btn btn-primary mt-4"
                onclick={() => {
                    document.querySelector("section:nth-of-type(2)")?.scrollIntoView();
                }}>
            Learn More
        </button>
    </div>
</section>


<section class="p-10">
    Second section
</section>