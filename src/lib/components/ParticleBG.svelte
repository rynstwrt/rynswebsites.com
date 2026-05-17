<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement | undefined;
    let ctx = $derived(canvas?.getContext("2d"));

    let innerWidth = $state(0);
    let innerHeight = $state(0);

    class Particle {
        position: { x: number, y: number };
        speed: number;
        direction: { x: number, y: number };
        color: string;
        size: number;

        constructor(position = {x: 0, y: 0},
                    speed = 1,
                    direction = {x: 1, y: 0.9},
                    color = "#fff000",
                    size = 10) {
            this.position = position;
            this.speed = speed;
            this.direction = direction;
            this.color = color;
            this.size = size;
        }

        update() {
            if (this.position.x <= 0 || this.position.x >= innerWidth) {
                this.direction.x *= -1;
            }

            if (this.position.y <= 0 || this.position.y >= innerHeight)
                this.direction.y *= -1;

            this.position.x += this.direction.x * this.speed;
            this.position.y += this.direction.y * this.speed;
        }

        draw() {
            ctx!.fillStyle = "#d06544";
            // ctx!.strokeStyle = "rgba(255, 0, 0)";

            ctx?.beginPath();

            ctx?.moveTo(this.position.x, this.position.y)

            ctx?.rect(this.position.x, this.position.y, this.size, this.size);

            // ctx?.lineTo(this.position.x, this.position.y);
            ctx?.closePath();
            ctx?.fill();
        }
    }

    let numParticles = $derived((innerWidth + innerHeight) / 50);
    let linkRadius = $derived(innerWidth / 10 + innerHeight / 10);

    let particles: Particle[] = [];

    onMount(() => {
        for (let i = 0; i < numParticles; ++i) {
            const particle = new Particle();

            particle.position.x = Math.random() * innerWidth;
            particle.position.y = Math.random() * innerHeight;

            particle.direction.x = Math.random() * 2 - 1;
            particle.direction.y = Math.random() * 2 - 1;

            particles.push(particle);
        }

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


<canvas bind:this={canvas}
        width={innerWidth}
        height={innerHeight}
        class="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen -z-1 opacity-30">
</canvas>