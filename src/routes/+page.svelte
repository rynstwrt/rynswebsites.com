<script lang="ts">
    import { Button } from "$ui/button";
    import PriceCard from "$lib/components/PriceCard.svelte";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte";
    import LandingBg from "$lib/components/LandingBG.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";
    import { ChevronDown } from "svelte-lucide";
    import ContactCard from "$lib/components/ContactCard.svelte";
    // import { animate, utils, onScroll } from "animejs";
    // import { onMount } from "svelte";

    let downArrow: any;

    // onMount(() => {
    //     animate(downArrow, {
    //         bottom: '15rem',
    //         duration: 2000,
    //         loop: true,
    //         alternate: true,
    //         autoplay: onScroll({
    //             container: document.body,
    //             // enter: 'bottom-=50 top',
    //             // leave: 'top+=60 bottom',
    //             // debug: true
    //         })
    //     });
    // });
</script>


<LandingBg/>


<section id="landing" class="h-dvh flex justify-center items-center ">
    <div class="max-w-xs">
        <h1 class="text-5xl font-bold">I'm Ryn, <br>designer and developer.</h1>
        <p class="text-lg my-4 text-gray-400">Your place for web development and graphic design.</p>
        <Button variant="default"
                size="lg"
                onclick={() => document.querySelector("#landing + section")?.scrollIntoView()}>
            Learn More
        </Button>
    </div>

    <ChevronDown bind:this={downArrow} class="absolute bottom-2 w-10 h-10 stroke-1 text-gray-500"/>
</section>


<section id="web-gallery" class="gallery select-none">
    <div class="section-header">
        <h2>My<br>website<br>Gallery</h2>
        <!--<p>A <i>small</i> collection of <span class="underline">some</span> of my website designs and showcases.<br>Swipe or click the indicator dots to navigate.</p>-->
        <p>A <i>small</i> collection of <span class="underline">some</span> of my website designs and showcases.</p>
        <p>Swipe or click the indicator dots to navigate.</p>
    </div>
    <div class="section-content">
        <ImageCarousel images={[
            {src: "img/websites/andrewselectronics.png", alt: "andrewselectronics.us"},
            {src: "img/websites/domaindissidence.png", alt: "domaindissidence.online"},
            {src: "img/websites/ilovefoxes.png", alt: "ilovefoxes.org"},
            {src: "img/websites/offtheblock.png", alt: "offtheblock.lol"},
            {src: "img/websites/trojanhorse.zip.png", alt: "trojanhorse.zip"},
            // {src: "img/websites/webresumebuilder.png", alt: "Web Resume Builder"},
        ]}/>
    </div>
</section>


<section id="design-gallery" class="gallery select-none">
    <div class="section-header md:order-2">
        <h2>My<br>Design<br>Gallery</h2>
        <p>A <i>small</i> collection of <span class="underline">some</span> of my graphic design pieces.</p>
        <p>Swipe or click the indicator dots to navigate.</p></div>
    <div class="section-content">
        <ImageCarousel images={[
            {src: "img/design/OrangeCyanHeadshot.jpg", alt: "Orange and Cyan Headshot"},
            {src: "img/design/ScurryDog.png", alt: "ScurryDog Logo"},
            {src: "img/design/NutriwiseLogo.png", alt: "Nutriwise Logo"},
            {src: "img/design/glitch1.jpg", alt: "Glitch Design 1"},
            {src: "img/design/glitch2.jpg", alt: "Glitch Design 2"},
            {src: "img/design/glitch3.jpg", alt: "Glitch Design 3"},
            {src: "img/design/r_designs/1.png", alt: "R Design 1"},
            {src: "img/design/r_designs/5.png", alt: "R Design 2"},
            {src: "img/design/r_designs/6.png", alt: "R Design 3"},
            {src: "img/design/r_designs/7.png", alt: "R Design 4"},
            ]}
                       reversed={true}/>
    </div>
</section>


<section id="price-section">
    <div class="section-content">
        <div class="grid justify-items-center place-self-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PriceCard title="Single Page Website"
                       price="$80"
                       description="A fully customized single-page website"
                       bulletpoints={[
                           "Participate in the design process if desired.",
                           "Frequent progress updates.",
                           "Up to 10 revisions included.",
                           "Each following revision is $15.",
                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"
                   ]}
                       badgeText="Most Popular"
                       badgeClasses="bg-green-300 text-green-800"/>

            <PriceCard title="Multiple Page Website"
                       price="$200"
                       description="Receive a fully customized website"
                       bulletpoints={[
                           "Participate in the design process if desired.",
                           "Frequent progress updates.",
                           "Up to 10 revisions included.",
                           "Each following revision is $15.",
                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"
                       ]}/>

            <PriceCard title="Custom Brand Logo"
                       price="$50"
                       description="Fully customized logo for your brand or company"
                       bulletpoints={[
                           "Participate in the design process if desired.",
                           "Frequent progress updates",
                           "Up to 10 revisions included.",
                           "Each following revision is $15."
                       ]}
                       classes="md:max-lg:col-span-full md:max-lg:max-w-none"/>
        </div>
    </div>
</section>


<section id="contact-section" class="flex flex-col">
    <div class="section-header mb-9">
        <h2>Contact</h2>
        <p>Reach out to place an order or to ask any questions.</p>
    </div>
    <div class="section-content">
        <div class="w-full grid justify-items-center place-self-center gap-4 md:grid-cols-2">
            <ContactCard title="Email"
                         description="Click to view my email."
                         value="ryn@rynswebsites.com"/>
            <ContactCard title="Phone"
                         description="Click to view my phone number."
                         value="972-898-2714"/>
        </div>
    </div>
</section>


<style>
    @reference "layout.css";

    section:not(#landing) {
        @apply p-6 max-w-7xl mx-auto my-20 lg:flex justify-center gap-10 min-h-130;

        &.gallery {
            @apply p-10 items-center grid md:grid-cols-2 w-full mx-auto;

            &:nth-of-type(even) {
                @apply text-right;
            }
        }

        .section-header {
            h2 {
                @apply text-7xl md:text-7xl 2xl:text-8xl font-semibold uppercase tracking-widest leading-20 2xl:leading-24;
            }

            p {
                @apply text-xl text-gray-500 mt-2 tracking-wide;
            }
        }
    }
</style>