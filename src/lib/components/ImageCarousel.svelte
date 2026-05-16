<script lang="ts">
    import * as Carousel from "$ui/carousel";

    let { images } = $props();
</script>


<Carousel.Root class="w-full mx-auto mt-4" >
    <Carousel.Content>
        {#each images as image}
            <Carousel.Item class="ps-1 md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <img src="https://picsum.photos/seed/{Math.random()}/500/500"
                         alt="Random"/>
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
</Carousel.Root>