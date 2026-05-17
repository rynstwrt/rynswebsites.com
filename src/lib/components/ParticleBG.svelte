<script lang="ts">
    import { onMount, tick } from "svelte";
    import { Particle } from "$lib/particle.ts";

    let canvas: HTMLCanvasElement | undefined;
    let ctx = $derived(canvas?.getContext("2d"));

    let innerWidth = $state(0);
    let innerHeight = $state(0);

    let initInnerWidth: number;
    let initInnerHeight: number;

    // class Particle {
    //     position: { x: number, y: number };
    //     speed: number;
    //     direction: { x: number, y: number };
    //     color: string;
    //     size: number;
    //     opacity: number;
    //
    //     constructor(position = {x: 0, y: 0},
    //                 speed = 1,
    //                 direction = {x: 1, y: 0.9},
    //                 color = "#fff000",
    //                 size = 10,
    //                 opacity = 1) {
    //         this.position = position;
    //         this.speed = speed;
    //         this.direction = direction;
    //         this.color = color;
    //         this.size = size;
    //         this.opacity = opacity;
    //     }
    //
    //     update() {
    //         if (this.position.x <= 0 || this.position.x + this.size >= innerWidth) {
    //             this.direction.x *= -1;
    //         }
    //
    //         if (this.position.y <= 0 || this.position.y + this.size >= innerHeight)
    //             this.direction.y *= -1;
    //
    //         this.position.x += this.direction.x * this.speed;
    //         this.position.y += this.direction.y * this.speed;
    //     }
    //
    //     draw() {
    //         ctx!.fillStyle = `rgba(208, 101, 68, ${this.opacity})`;
    //
    //         ctx?.beginPath();
    //         ctx?.moveTo(this.position.x, this.position.y)
    //         ctx?.rect(this.position.x, this.position.y, this.size, this.size);
    //         // ctx?.lineTo(this.position.x, this.position.y);
    //         ctx?.closePath();
    //         ctx?.fill();
    //     }
    // }

    let numParticles = $derived((innerWidth + innerHeight) / 50);
    // let linkRadius = $derived(innerWidth / 10 + innerHeight / 10);

    let particles: Particle[] = [];


    function initParticles() {
        for (let i = 0; i < numParticles; ++i) {
            const particle = new Particle(ctx);

            particle.size = Math.random() * (20 - 3) + 3;
            // particle.speed = 0.001 * (innerWidth + innerHeight) / particle.speed;
            const scale = (innerWidth + innerHeight) / (initInnerWidth + initInnerHeight);
            particle.initSpeed = Math.sqrt(scale);
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
    // $effect.pre(() => {
        initInnerWidth = innerWidth;
        initInnerHeight = innerHeight;

        // tick().then(() => {
            if (!innerWidth || !innerHeight)
                return;

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
        // });
    });


</script>


<svelte:window
        bind:innerWidth
        bind:innerHeight
        onresize={() => {
            // const scale = (innerWidth + innerHeight) / (initInnerWidth + initInnerHeight);
            // particles.forEach(particle => particle.speed = Math.sqrt(scale));
            // console.log("b")
            // initInnerWidth = innerWidth;
            // initInnerHeight = innerHeight;
        }}
></svelte:window>


<canvas bind:this={canvas}
        width={innerWidth}
        height={innerHeight}
        class="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen -z-1 opacity-40 overflow-hidden">
</canvas>