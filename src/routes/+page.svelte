<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';
    import PriceCard from "$lib/components/PriceCard.svelte";
    import ContactModal from "$lib/components/ContactModal.svelte";
    import PriceCard2 from "$components/PriceCard2.svelte";

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
    <Particles id="tsparticles" options={particlesConfig}/>
</div>


<ContactModal/>


<section id="landing"
         class="w-full h-screen flex justify-center items-center backdrop-brightness-85 backdrop-contrast-110">
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


<!--<section id="pricing">-->
<!--    <div class="grid justify-items-center place-self-center gap-3 md:grid-cols-2 lg:grid-cols-3">-->
<!--        <PriceCard2 title="Single Page Website"-->
<!--                   price="$80"-->
<!--                   bulletpoints={[-->
<!--                           "Receive a fully customized website.",-->
<!--                           "Participate in the design process if desired.",-->
<!--                           "Frequent progress updates.",-->
<!--                           "Up to 10 revisions included.",-->
<!--                           "Each following revision is $15.",-->
<!--                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"-->
<!--                   ]}-->
<!--                   badgeText="Most Popular"-->
<!--                   badgeClasses="badge-sm badge-success"/>-->

<!--        <PriceCard2 title="Multiple Page Website"-->
<!--                   price="$200"-->
<!--                   bulletpoints={[-->
<!--                           "Receive a fully customized website.",-->
<!--                           "Participate in the design process if desired.",-->
<!--                           "Frequent progress updates.",-->
<!--                           "Up to 10 revisions included.",-->
<!--                           "Each following revision is $15.",-->
<!--                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"-->
<!--                       ]}/>-->

<!--        <PriceCard2 title="Custom Brand Logo"-->
<!--                   price="$50"-->
<!--                   bulletpoints={[-->
<!--                       "Receive a fully customized logo for your brand or company.",-->
<!--                       "Participate in the design process if desired.",-->
<!--                       "Frequent progress updates",-->
<!--                       "Up to 10 revisions included.",-->
<!--                       "Each following revision is $15."-->
<!--                   ]}-->
<!--                   classes="md:max-lg:col-span-full md:max-lg:max-w-none"/>-->
<!--    </div>-->
<!--</section>-->


<section>
    <div class="grid justify-items-center place-self-center gap-3 md:grid-cols-2 lg:grid-cols-3">
        <PriceCard title="Single Page Website"
                   price="$80"
                   bulletpoints={[
                           "Receive a fully customized website.",
                           "Participate in the design process if desired.",
                           "Frequent progress updates.",
                           "Up to 10 revisions included.",
                           "Each following revision is $15.",
                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"
                   ]}
                   badgeText="Most Popular"
                   badgeClasses="badge-sm badge-success"/>

        <PriceCard title="Multiple Page Website"
                   price="$200"
                   bulletpoints={[
                           "Receive a fully customized website.",
                           "Participate in the design process if desired.",
                           "Frequent progress updates.",
                           "Up to 10 revisions included.",
                           "Each following revision is $15.",
                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"
                       ]}/>

        <PriceCard title="Custom Brand Logo"
                   price="$50"
                   bulletpoints={[
                       "Receive a fully customized logo for your brand or company.",
                       "Participate in the design process if desired.",
                       "Frequent progress updates",
                       "Up to 10 revisions included.",
                       "Each following revision is $15."
                   ]}
                   classes="md:max-lg:col-span-full md:max-lg:max-w-none"/>
    </div>
</section>





