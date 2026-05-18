<script lang="ts">
    import * as Carousel from "$ui/carousel";
    import Autoplay from "embla-carousel-autoplay";
    import type { CarouselAPI } from "$ui/carousel/context";
    import ImageDialog from "$lib/components/ImageDialog.svelte";

    let {images} = $props();

    let imageDialogOpen = $state(false);

    let api = $state<CarouselAPI>();

    const count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);
    let clickedImage: object = $state({src: "", alt: ""});

    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap();

            api.on("select", () => {
                current = api!.selectedScrollSnap();
            });
        }
    });
</script>


<ImageDialog bind:open={imageDialogOpen}
             image={clickedImage}/>


<Carousel.Root
        class="w-full max-w-10/12 mx-auto mt-4"
        opts={{
               loop: true,
               align: "center"
        }}
        plugins={[
            Autoplay({
                delay: 5000,
                stopOnInteraction: true
            })
        ]}
        setApi={emblaApi => api = emblaApi}>
    <Carousel.Content class="items-center">
        {#each images as image}
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3"
                           onclick={(event) => {
                               const target: any = event.target;
                               clickedImage = {src: target?.src, alt: target?.alt}
                               imageDialogOpen = true
                           }}>
                <div>
                    <enhanced:img src={image.src}
                                  alt={image.alt}
                                  class="w-full min-w-full shadow-xl rounded"/>
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>
    <Carousel.Previous/>
    <Carousel.Next/>
</Carousel.Root>

<p class="text-muted-foreground py-2 text-center text-sm font-thin">
    <span class="italic font-normal">{images[current].alt}</span> - ({current + 1} of {count})
</p>


<!--<Button onclick={() => imageDialogOpen = true}>Full image</Button>-->