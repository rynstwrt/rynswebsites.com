<script lang="ts">
    // import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';
    import PriceCard from "$lib/components/PriceCard.svelte";
    import ContactModal from "$lib/components/ContactModal.svelte";
    import PriceCard2 from "$components/PriceCard2.svelte";
    import Email from "$icons/Email.svelte";

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

    // void particlesInit(async (engine) => {
    //     await loadSlim(engine);
    // });
</script>


<ContactModal/>


<section id="landing"
         class="w-full h-screen flex justify-center items-center backdrop-contrast-100 backdrop-blur-[3px]">
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


<section id="web-gallery">
    <div class="max-w-6xl w-full mx-auto">
        <h2 class="text-3xl font-medium">Web Gallery</h2>
        <p class="text-lg text-gray-500">Scroll to browse the web gallery.</p>


        <div class="carousel carousel-center rounded-box max-w-md space-x-3 min-w-full p-3 *:rounded-lg bg-base-100 *:overflow-hidden *:shadow-xl mt-4">
            <div id="item1" class="carousel-item">
                <img src="https://picsum.photos/seed/one/500/500"
                     alt="Random"
                     class="w-50 h-50"/>
            </div>
            <div id="item2" class="carousel-item">
                <img src="https://picsum.photos/seed/fffaaaa/500/500"
                     alt="Random"
                     class="w-50 h-50"/>
            </div>
            <div id="item3" class="carousel-item">
                <img src="https://picsum.photos/seed/ffasd/500/500"
                     alt="Random"
                     class="w-50 h-50"/>
            </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
            <a href="#item1" class="btn btn-sm">1</a>
            <a href="#item2" class="btn btn-sm">2</a>
            <a href="#item3" class="btn btn-sm">3</a>
        </div>
    </div>
</section>


<section id="design-gallery">
    <div class="max-w-6xl w-full mx-auto">
        <h2 class="text-3xl font-medium">Design Gallery</h2>
        <p class="text-lg text-gray-500">Scroll to browse the design gallery.</p>


        <div class="carousel carousel-center rounded-box max-w-md space-x-3 min-w-full p-3 *:rounded-lg bg-base-100 *:overflow-hidden *:shadow-xl mt-4">
            <div id="item1" class="carousel-item">
                <img src="https://picsum.photos/seed/one/500/500"
                     alt="Random"
                     class="w-50 h-50"/>
            </div>
            <div id="item2" class="carousel-item">
                <img src="https://picsum.photos/seed/fffaaaa/500/500"
                     alt="Random"
                     class="w-50 h-50"/>
            </div>
            <div id="item3" class="carousel-item">
                <img src="https://picsum.photos/seed/ffasd/500/500"
                     alt="Random"
                     class="w-50 h-50"/>
            </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
            <a href="#item1" class="btn btn-sm">1</a>
            <a href="#item2" class="btn btn-sm">2</a>
            <a href="#item3" class="btn btn-sm">3</a>
        </div>
    </div>
</section>


<section id="contact">
    <div class="max-w-6xl w-full mx-auto">
        <h2 class="text-3xl font-medium">Contact Me</h2>

        <div class="flex gap-4 ">
            <fieldset class="fieldset bg-base-100 border-base-100 rounded-box border p-3 w-md gap-2 flex-1">
                <legend class="fieldset-legend text-base uppercase">Ask a Question</legend>

                <label class="input validator w-full input-md">
                    <Email class="h-[1em] opacity-50"/>
                    <input type="email" placeholder="mail@site.com" required/>
                </label>

                <textarea class="textarea w-full"
                          placeholder="Type your questions here." rows="8"></textarea>

                <button class="btn btn-primary btn-block mt-2">Submit</button>
            </fieldset>

            <div class="flex-1 bg-base-100 p-4 rounded-md">
                <fieldset class="fieldset">
                    <legend class="fieldset-legend pb-1">Email</legend>
                    <label class="input validator w-full input-md">
                        <Email class="h-[1em] opacity-50"/>
                        <input type="email" placeholder="mail@site.com" required/>
                    </label>
                </fieldset>

                <fieldset class="fieldset">
                    <legend class="fieldset-legend pb-1">Product</legend>
                    <select class="select w-full" required>
                        <option disabled selected>Select a service</option>
                        <option>Single Page Website</option>
                        <option>Multi Page Website</option>
                        <option>Brand Logo</option>
                    </select>
                </fieldset>

                <fieldset class="fieldset">
                    <legend class="fieldset-legend pb-1">Additional Info</legend>
                </fieldset>
                <textarea class="textarea w-full"
                          placeholder="Add any additional info here." rows="6"></textarea>

                <button class="btn btn-primary btn-block mt-4">Submit</button>
            </div>
        </div>
    </div>
</section>