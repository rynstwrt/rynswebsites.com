<script lang="ts">
    import { Button } from "$ui/button";
    import PriceCard from "$lib/components/PriceCard.svelte";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte";
    import ContactDialog from "$lib/components/ContactDialog.svelte";
    import LandingBg from "../lib/components/LandingBG.svelte";
    import ImageDialog from "$lib/components/ImageDialog.svelte";

    let contactDialogOpen = $state(false);
    let imageDialogOpen = $state(true);
</script>


<LandingBg/>


<ContactDialog bind:open={contactDialogOpen}/>


<section id="landing"
         class="h-full flex justify-center items-center backdrop-contrast-105 backdrop-brightness-60">
    <div class="max-w-xs">
        <h1 class="text-5xl font-bold">I'm Ryn, <br>designer and developer.</h1>
        <p class="text-lg my-4 text-gray-400">Your place for web development and graphic design.</p>
        <Button variant="default"
                size="lg"
                onclick={() => document.querySelector("#price-section")?.scrollIntoView({block: "start"})}>
            Learn More
        </Button>
    </div>
</section>


<section id="price-section" class="max-w-7xl mx-auto">
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
                   badgeClasses="bg-green-300 text-green-800"
                   onClick={() => contactDialogOpen = true}/>

        <PriceCard title="Multiple Page Website"
                   price="$200"
                   description="Receive a fully customized website"
                   bulletpoints={[
                           "Participate in the design process if desired.",
                           "Frequent progress updates.",
                           "Up to 10 revisions included.",
                           "Each following revision is $15.",
                           "Support for any form of hosting (Wordpress, Squarespace, Static HTML, Apache, Nginx, etc.)"
                       ]}
                   onClick={() => contactDialogOpen = true}/>

        <PriceCard title="Custom Brand Logo"
                   price="$50"
                   description="Fully customized logo for your brand or company"
                   bulletpoints={[
                       "Participate in the design process if desired.",
                       "Frequent progress updates",
                       "Up to 10 revisions included.",
                       "Each following revision is $15."
                   ]}
                   classes="md:max-lg:col-span-full md:max-lg:max-w-none"
                   onClick={() => contactDialogOpen = true}/>

    </div>
</section>


<section id="web-gallery" class="max-w-7xl mx-auto my-4 select-none">
    <h2 class="text-3xl font-medium">Web Gallery</h2>
    <p class="text-lg text-gray-500">Scroll to browse the web gallery.</p>

    <ImageCarousel images={[
        {src: "img/websites/andrewselectronics.png", alt: "andrewselectronics.us"},
        {src: "img/websites/domaindissidence.png", alt: "domaindissidence.online"},
        {src: "img/websites/ilovefoxes.png", alt: "ilovefoxes.org"},
        {src: "img/websites/offtheblock.png", alt: "offtheblock.lol"},
        {src: "img/websites/trojanhorse.zip.png", alt: "trojanhorse.zip"},
        // {src: "img/websites/webresumebuilder.png", alt: "Web Resume Builder"},
    ]}/>
</section>


<section id="design-gallery" class="max-w-7xl mx-auto my-4 select-none">
    <h2 class="text-3xl font-medium">Design Gallery</h2>
    <p class="text-lg text-gray-500">Scroll to browse the design gallery.</p>

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
    ]}/>
</section>


<footer class="backdrop-brightness-80">
    <div class="p-10 flex justify-between gap-6 mt-6">
        <div class="max-w-xs">
            <h2 class="text-2xl font-medium">Ryn's Websites</h2>
            <p class="text-neutral-400 mt-3">Your place for web development and graphic design.</p>
            <p class="text-xs font-light text-neutral-300 mt-6">
                © {new Date().getFullYear()} All Rights Reserved.
            </p>
        </div>

        <div class="space-y-1 *:font-light *:block">
            <Button variant="ghost"
                    class=""
                    size="sm"
                    onclick={() => contactDialogOpen = true}>Contact
            </Button>

            <Button variant="ghost"
                    class=""
                    size="sm"
                    href="https://rynstew.art/resume"
                    target="_blank">
                Résumé
            </Button>

            <Button variant="ghost"
                    class=""
                    size="sm"
                    href="https://rynstew.art/portfolio"
                    target="_blank">
                Portfolio
            </Button>

            <Button variant="ghost"
                    class=""
                    size="sm"
                    onclick={() => document.body.scrollIntoView({block: "start"})}>Back to top
            </Button>
        </div>
    </div>
</footer>


<style>
    @reference "tailwindcss";

    section:not(#landing) {
        @apply p-6;
    }
</style>