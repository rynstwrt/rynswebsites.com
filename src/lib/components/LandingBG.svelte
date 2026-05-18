<script lang="ts">
    import { onMount } from "svelte";
    import { Particle } from "$lib/particle";

    let canvas: HTMLCanvasElement | undefined;
    let ctx = $derived(canvas?.getContext("2d"));

    let innerWidth = $state(0);
    let innerHeight = $state(0);

    let initInnerWidth: number;
    let initInnerHeight: number;

    let numParticles = $derived((innerWidth + innerHeight) / 50);

    let particles: Particle[] = [];


    function initParticles() {
        for (let i = 0; i < numParticles; ++i) {
            const particle = new Particle(ctx);

            particle.size = Math.random() * (20 - 3) + 3;

            const scale = (innerWidth + innerHeight) / (initInnerWidth + initInnerHeight);
            particle.initSpeed = Math.sqrt(scale) * 0.15;
            particle.speed = particle.initSpeed + Math.random() * particle.initSpeed;

            particle.position.x = Math.random() * innerWidth;
            particle.position.y = Math.random() * innerHeight;

            particle.direction.x = Math.random() * 2 - 1;
            particle.direction.y = Math.random() * 2 - 1;

            particle.opacity = Math.random();

            particles.push(particle);
        }
    }


    onMount(() => {
        initInnerWidth = innerWidth;
        initInnerHeight = innerHeight;

        initParticles();

        function animate() {
            requestAnimationFrame(animate);

            ctx?.clearRect(0, 0, innerWidth, innerHeight);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        }
        animate();
    });
</script>


<svelte:window bind:innerWidth bind:innerHeight></svelte:window>


<div class="fixed top-0 left-0 right-0 bottom-0 -z-2">
    <div id="landing-img" class="absolute top-0 right-0 bottom-0 left-0 opacity-5"></div>

    <canvas bind:this={canvas}
            width={innerWidth}
            height={innerHeight}
            class="absolute top-0 right-0 bottom-0 left-0 opacity-40 overflow-hidden"
            onresize={() => {
            particles.forEach(particle => {
                particle.position.x = Math.random() * innerWidth;
                particle.position.y = Math.random() * innerHeight;
            });
        }}>
    </canvas>

    <div class="absolute top-0 right-0 bottom-0 left-0 backdrop-contrast-105 backdrop-brightness-80"></div>
</div>


<style>
    #landing-img {
        background-image: url("$lib/assets/img/city.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>