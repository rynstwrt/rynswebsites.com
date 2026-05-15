<script lang="ts">
    import { Button, Card } from "flowbite-svelte";
    import { CheckCircleSolid } from "flowbite-svelte-icons";
    import ServiceCard from "$lib/ui/ServiceCard.svelte";
</script>


<section id="landing" class="w-full h-screen flex justify-center items-center">
    <div class="max-w-xs">
        <h1 class="text-5xl font-bold">I'm Ryn, <br>designer and developer.</h1>

        <p class="text-lg mt-4">Your place for web development and graphic design.</p>

        <Button class="mt-4 rounded"
                onclick={() => document.querySelector("section:nth-of-type(2)")?.scrollIntoView()}>
            Learn More
        </Button>
    </div>
</section>


<section id="pricing">
    <ServiceCard title="Custom Website"
                 price="200"
                 bulletpoints={[
                     "Receive a fully customized website.",
                     "Participate in the design process if desired.",
                     "Up to 10 revisions included.",
                     "Each following revision is $15.",
                     "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"
                 ]}/>
</section>