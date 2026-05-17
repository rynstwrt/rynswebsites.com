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
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
>
    <Carousel.Content>
        {#each images as image}
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1 w-fit mx-auto">
                    <img src={image.src}
                         alt={image.alt}
                         class="block w-full min-w-full shadow-lgr rounded"/>
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>

    <Carousel.Previous/>
    <Carousel.Next/>
</Carousel.Root>