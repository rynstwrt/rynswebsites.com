<script lang="ts">
    import { Button } from "$ui/button";
    import * as Form from "$ui/form";
    import * as Field from "$ui/field";
    import { Input } from "$ui/input";
    import PriceCard from "$lib/components/PriceCard.svelte";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte";
</script>


<section id="landing"
         class="w-full h-screen flex justify-center items-center backdrop-brightness-85 backdrop-contrast-110">
    <div class="max-w-xs">
        <h1 class="text-5xl font-bold">I'm Ryn, <br>designer and developer.</h1>
        <p class="text-lg my-4">Your place for web development and graphic design.</p>
        <Button variant="default"
                class="rounded-sm"
                size="lg"
                onclick={() => document.querySelector("#price-section")?.scrollIntoView({block: "center"})}>
            Learn More
        </Button>
    </div>
</section>


<section id="price-section" class="max-w-7xl mx-auto">
    <div class="grid justify-items-center place-self-center gap-3 md:grid-cols-2 lg:grid-cols-3">
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
</section>


<section id="web-gallery" class="max-w-7xl mx-auto my-4 select-none">
    <h2 class="text-3xl font-medium">Web Gallery</h2>
    <p class="text-lg text-gray-500">Scroll to browse the web gallery.</p>

    <ImageCarousel images={[
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
    ]}/>
</section>


<section id="design-gallery" class="max-w-7xl mx-auto my-4 select-none">
    <h2 class="text-3xl font-medium">Design Gallery</h2>
    <p class="text-lg text-gray-500">Scroll to browse the design gallery.</p>

    <ImageCarousel images={[
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
        {src: `https://picsum.photos/seed/${Math.random()}/500/500`, alt: `${Math.random()}`},
    ]}/>
</section>


<!--<section id="contact">-->
<!--    <div class="max-w-6xl w-full mx-auto">-->
<!--        <h2 class="text-3xl font-medium">Contact Me</h2>-->

<!--        <div class="flex gap-4 ">-->
<!--            <fieldset class="fieldset bg-base-100 border-base-100 rounded-box border p-3 w-md gap-2 flex-1">-->
<!--                <legend class="fieldset-legend text-base uppercase">Ask a Question</legend>-->

<!--                <label class="input validator w-full input-md">-->
<!--                    <Email class="h-[1em] opacity-50"/>-->
<!--                    <input type="email" placeholder="mail@site.com" required/>-->
<!--                </label>-->

<!--                <textarea class="textarea w-full"-->
<!--                          placeholder="Type your questions here." rows="8"></textarea>-->

<!--                <button class="btn btn-primary btn-block mt-2">Submit</button>-->
<!--            </fieldset>-->

<!--            <div class="flex-1 bg-base-100 p-4 rounded-md">-->
<!--                <fieldset class="fieldset">-->
<!--                    <legend class="fieldset-legend pb-1">Email</legend>-->
<!--                    <label class="input validator w-full input-md">-->
<!--                        <Email class="h-[1em] opacity-50"/>-->
<!--                        <input type="email" placeholder="mail@site.com" required/>-->
<!--                    </label>-->
<!--                </fieldset>-->

<!--                <fieldset class="fieldset">-->
<!--                    <legend class="fieldset-legend pb-1">Product</legend>-->
<!--                    <select class="select w-full" required>-->
<!--                        <option disabled selected>Select a service</option>-->
<!--                        <option>Single Page Website</option>-->
<!--                        <option>Multi Page Website</option>-->
<!--                        <option>Brand Logo</option>-->
<!--                    </select>-->
<!--                </fieldset>-->

<!--                <fieldset class="fieldset">-->
<!--                    <legend class="fieldset-legend pb-1">Additional Info</legend>-->
<!--                </fieldset>-->
<!--                <textarea class="textarea w-full"-->
<!--                          placeholder="Add any additional info here." rows="6"></textarea>-->

<!--                <button class="bt n btn-primary btn-block mt-4">Submit</button>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->


<footer>
    <!--<div class="backdrop-contrast-110 min-h-60 p-6 flex justify-between gap-6">-->
    <div class="min-h-60 p-6 flex justify-between gap-6 border-t mt-6">
        <div class="max-w-xs">
            <h2 class="text-3xl font-normal">Ryn's Websites</h2>
            <p class="text-neutral-400 mt-3">Your place for web development and graphic design.</p>
            <Button variant="outline"
                    class="mt-8 w-full"
                    onclick={() => document.body.scrollIntoView()}>
                Back to Top
            </Button>
        </div>

        <form class="flex-1 max-w-sm">
            <Field.Group>
                <Field.Set>
                    <Field.Legend>Contact</Field.Legend>
                    <Field.Description>Reach out with any questions!</Field.Description>
                    <Field.Group>
                        <Field.Field>
                            <Field.Label>Name</Field.Label>
                            <Input id="name" placeholder="John Doe" aria-label="name"/>
                        </Field.Field>
                    </Field.Group>
                </Field.Set>
            </Field.Group>
        </form>
    </div>

    <p class="text-xs text-center py-2">
        Copyright © {new Date().getFullYear()}, rynswebsites.com. All Rights Reserved.
    </p>
    <!--<p class="text-xs text-center py-3 backdrop-contrast-110 backdrop-brightness-80">-->
    <!--    Copyright © {new Date().getFullYear()}, rynswebsites.com. All Rights Reserved.-->
    <!--</p>-->
</footer>


<style>
    @reference "tailwindcss";

    section:not(#landing) {
        @apply p-6;
    }
</style>