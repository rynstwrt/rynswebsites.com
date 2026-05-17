<script lang="ts">
    import * as Carousel from "$ui/carousel";
    import Autoplay from "embla-carousel-autoplay";
    import * as Card from "$ui/card";
    import type { CarouselAPI } from "$ui/carousel/context";

    let {images} = $props();

    let api = $state<CarouselAPI>();

    const count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);

    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap();

            api.on("select", () => {
                current = api!.selectedScrollSnap();
            });
        }
    })
</script>


<Carousel.Root
        class="w-full max-w-10/12 mx-auto mt-4"
        opts={{
               loop: true,
               align: "center"
        }}
        plugins={[
            Autoplay({
                delay: 3000,
                stopOnInteraction: true
            })
        ]}
        setApi={emblaApi => api = emblaApi}>
    <Carousel.Content class="items-center">
        {#each images as image}
            <!--<Carousel.Item class="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">-->
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div>
                    <enhanced:img src={image.src}
                                  alt={image.alt}
                                  class="w-full min-w-full shadow-xl rounded"/>
                    <!--<Card.Root>-->
                    <!--<Card.Content class="flex aspect-square items-center justify-center p-6">-->
                    <!--<enhanced:img src={image.src}-->
                    <!--              alt={image.alt}-->
                    <!--              class="min-w-full min-h-full shadow-xl rounded"/>-->
                    <!--</Card.Content>-->
                    <!--</Card.Root>-->
                </div>
                <!--<div class="p-1 w-fit mx-auto">-->
                <!--    <enhanced:img src={image.src}-->
                <!--                  alt={image.alt}-->
                <!--                  class="w-full min-w-full shadow-xl rounded"/>-->
                <!--</div>-->
            </Carousel.Item>
        {/each}
    </Carousel.Content>
    <Carousel.Previous/>
    <Carousel.Next/>
</Carousel.Root>

<p class="text-muted-foreground py-2 text-center text-sm font-thin">
    <span class="italic font-normal">{images[current].alt}</span> - ({current+1} of {count})
</p>
