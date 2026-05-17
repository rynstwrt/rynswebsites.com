<script lang="ts">
    import * as Carousel from "$ui/carousel";
    import Autoplay from "embla-carousel-autoplay";

    let {images} = $props();
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
        ]}>
    <Carousel.Content>
        {#each images as image}
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                <div class="p-1 w-fit mx-auto">
                    <enhanced:img src={image.src}
                                  alt={image.alt}
                                  class="block w-full min-w-full shadow-lg rounded"/>
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>

    <Carousel.Previous/>
    <Carousel.Next/>
</Carousel.Root>