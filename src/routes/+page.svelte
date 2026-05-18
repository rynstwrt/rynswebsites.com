<script lang="ts">
    import { Button } from "$ui/button";
    import PriceCard from "$lib/components/PriceCard.svelte";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte";
    import LandingBg from "$lib/components/LandingBG.svelte";
    import { Badge } from "$ui/badge";
    import { Card, CardContent, CardFooter } from "$ui/card";
    import * as Field from "$ui/field";
    import { Input } from "$ui/input";
    import { Textarea } from "$ui/textarea";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "$ui/select";

    let contactDialogOpen = $state(false);

    const services = [
        {value: "single-page-website", label: "Single Page Website"},
        {value: "multi-page-website", label: "Multi Page Website"},
        {value: "brand-logo", label: "Brand Logo"},
    ];
    let serviceSelectValue = $state([]);
    let serviceSelectTriggerText = $derived(serviceSelectValue.length + " selected");
</script>


<LandingBg/>


<section id="landing"
         class="h-full flex justify-center items-center backdrop-contrast-105 backdrop-brightness-80">
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


<section id="contact-section" class="max-w-7xl mx-auto">
    <h2 class="text-3xl font-medium flex items-center">
        Contact
        <Badge class="ms-2 bg-yellow-200 text-yellow-800">Under Construction</Badge>
    </h2>

    <p class="text-lg text-gray-500">Ask me any questions!<br>Use the email below instead of the form for now.</p>

    <p class="text-base font-normal text-primary">rynswebsites@gmail.com</p>

    <Card class="shadow-lg transition-shadow my-8 w-full max-w-2xl place-self-center">
        <CardContent>
            <form method="POST" action="/contact" class="grid gap-3 sm:grid-cols-3 sm:grid-rows-4">
                <Field.Field class="gap-1 col-span-full sm:col-span-1">
                    <Field.Label>Name</Field.Label>
                    <Input name="name"
                           placeholder="John Doe"
                           aria-label="name"/>
                </Field.Field>

                <Field.Field class="gap-1 col-span-full sm:col-1">
                    <Field.Label>Email</Field.Label>
                    <Input name="email"
                           placeholder="john@example.com"
                           aria-label="email"/>
                </Field.Field>

                <Field.Field class="gap-1 col-span-full sm:col-1">
                    <Field.Label>Phone</Field.Label>
                    <Input name="phone"
                           placeholder="123-456-7890"
                           aria-label="phone"/>
                </Field.Field>

                <Field.Field class="gap-1 col-span-full sm:col-1">
                    <Field.Label>Services</Field.Label>
                    <Select type="multiple" name="services" bind:value={serviceSelectValue}>
                        <SelectTrigger>{serviceSelectTriggerText}</SelectTrigger>
                        <SelectContent>
                            {#each services as service}
                                <SelectItem value={service.value} label={service.label}/>
                            {/each}
                        </SelectContent>
                    </Select>
                </Field.Field>

                <Field.Field class="gap-1 sm:col-span-2 sm:col-start-2 sm:row-span-4 sm:row-start-1">
                    <Field.Label>Message</Field.Label>
                    <Textarea name="message"
                              placeholder="Type your message here."
                              aria-label="message"
                              class="h-full min-h-40"/>
                </Field.Field>

                <Field.Field class="col-span-full mt-3">
                    <Button type="submit" size="lg">Submit</Button>
                </Field.Field>
            </form>
        </CardContent>
    </Card>
</section>


<style>
    @reference "tailwindcss";

    section:not(#landing) {
        @apply p-6;
    }
</style>