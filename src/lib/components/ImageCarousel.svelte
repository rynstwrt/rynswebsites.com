<script lang="ts">
    import useEmblaCarousel from "embla-carousel-svelte";
    import AutoHeight from "embla-carousel-auto-height";
    import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
    import { ChevronRight, ChevronLeft } from "@lucide/svelte";
    import { Button } from "$ui/button";
    import Autoplay from "embla-carousel-autoplay";

    let {images, reversed = false} = $props();

    let emblaApi: EmblaCarouselType;
    let emblaOptions: EmblaOptionsType = {
        loop: true,
        align: "end",
        // containScroll: "keepSnaps"
        containScroll: false
    };
    let emblaPlugins = [
        Autoplay({
            stopOnInteraction: true,
            delay: 5000
        }),
        AutoHeight(),
    ];

    let scrollSnaps = $state([]);
    let selectedSnap = $state(0);

    const goToPrev = () => {
        // emblaApi?.plugins().autoScroll?.stop();
        emblaApi?.scrollPrev();
    }

    const goToNext = () => {
        // emblaApi?.plugins().autoScroll?.stop();
        emblaApi?.scrollNext()
    }

    const setupSnaps = (emblaApi: any) => (scrollSnaps = emblaApi.scrollSnapList());
    const setActiveSnap = (emblaApi: any) => (selectedSnap = emblaApi.selectedScrollSnap());
    const onEmblaInit = (event: any) => {
        emblaApi = event.detail;
        setupSnaps(emblaApi);
        setActiveSnap(emblaApi);
        // emblaApi.plugins().autoplay?.play();
        emblaApi.on("reInit", setupSnaps);
        emblaApi.on("reInit", setActiveSnap);
        emblaApi.on("select", (emblaApi: EmblaCarouselType) => {
            selectedSnap = emblaApi.selectedScrollSnap();
        });
    }
</script>


<div class="embla w-full flex-1">
    <div class="embla__viewport"
         onemblaInit={onEmblaInit}
         use:useEmblaCarousel={{options: emblaOptions, plugins: emblaPlugins}}>
        <div class="embla__container">
            {#each images as img}
                <div class="embla__slide">
                    <enhanced:img src={img.src} alt={img.alt}/>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex justify-between items-center mt-2">
        <div class="space-x-2 {reversed ? 'order-2' : ''}">
            <Button class="embla__prev"
                    onclick={goToPrev}
                    variant="outline"
                    size="icon-lg">
                <ChevronLeft/>
            </Button>
            <Button class="embla__next"
                    onclick={goToNext}
                    variant="outline"
                    size="icon-lg">
                <ChevronRight/>
            </Button>
        </div>
        <div class="embla__dots flex gap-2">
            {#each scrollSnaps as _, idx}
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button class="embla__dot w-3 h-3 border rounded-full {selectedSnap === idx ? 'bg-neutral-400' : ''}"
                        onclick={() => emblaApi.scrollTo(idx)}>
                </button>
            {/each}
        </div>
    </div>
</div>


<style>
    @reference "../../routes/layout.css";

    .embla__viewport {
        overflow: hidden;
    }

    .embla__container {
        display: flex;
        touch-action: pan-y pinch-zoom;
        align-items: flex-start;
        transition: height 0.2s;
    }

    .embla__slide {
        flex: 0 0 100%;
        min-width: 0;
    }
</style>


<!--<script l ng="ts">-->
<!--    import * as Carousel from "$ui/carousel";-->
<!--    import Autoplay from "embla-carousel-autoplay";-->
<!--    import type { CarouselAPI } from "$ui/carousel/context";-->
<!--    import ImageDialog from "$lib/components/ImageDialog.svelte";-->
<!--    import AutoHeight from "embla-carousel-auto-height";-->

<!--    let {images} = $props();-->

<!--    let imageDialogOpen = $state(false);-->

<!--    let api = $state<CarouselAPI>();-->

<!--    const count = $derived(api ? api.scrollSnapList().length : 0);-->
<!--    let current = $state(0);-->
<!--    let clickedImage: object = $state({src: "", alt: ""});-->

<!--    $effect(() => {-->
<!--        if (api) {-->
<!--            current = api.selectedScrollSnap();-->

<!--            api.on("select", () => {-->
<!--                current = api!.selectedScrollSnap();-->
<!--            });-->
<!--        }-->
<!--    });-->
<!--</script>-->


<!--<ImageDialog bind:open={imageDialogOpen}-->
<!--             image={clickedImage}/>-->


<!--<Carousel.Root-->
<!--        class="w-full"-->
<!--        opts={{-->
<!--               loop: true,-->
<!--               align: "center"-->
<!--        }}-->
<!--        plugins={[-->
<!--            Autoplay({-->
<!--                delay: 5000,-->
<!--                stopOnInteraction: true-->
<!--            }),-->
<!--            AutoHeight()-->
<!--        ]}-->
<!--        setApi={emblaApi => api = emblaApi}-->
<!--        orientation="vertical">-->
<!--    <Carousel.Content class="">-->
<!--        {#each images as image}-->
<!--            &lt;!&ndash;<Carousel.Item class="pt-1 md:basis-1/2 lg:basis-1/3"&ndash;&gt;-->
<!--            <Carousel.Item class=""-->
<!--                           onclick={(event) => {-->
<!--                               const target: any = event.target;-->
<!--                               clickedImage = {src: target?.src, alt: target?.alt}-->
<!--                               imageDialogOpen = true-->
<!--                           }}>-->
<!--                <enhanced:img src={image.src}-->
<!--                              alt={image.alt}-->
<!--                              class="border border-border/50 rounded-xl"/>-->
<!--            </Carousel.Item>-->
<!--        {/each}-->
<!--    </Carousel.Content>-->
<!--    <Carousel.Previous/>-->
<!--    <Carousel.Next/>-->
<!--</Carousel.Root>-->

<!--&lt;!&ndash;<p class="text-muted-foreground py-2 text-center text-sm font-thin">&ndash;&gt;-->
<!--&lt;!&ndash;    <span class="italic font-normal">{images[current].alt}</span> - ({current + 1} of {count})&ndash;&gt;-->
<!--&lt;!&ndash;</p>&ndash;&gt;-->


<!--<style>-->
<!--    /*.embla__container {*/-->
<!--    /*    display: flex;*/-->
<!--    /*    align-items: flex-start;*/-->
<!--    /*}*/-->
<!--</style>-->


