<script lang="ts">
    import useEmblaCarousel from "embla-carousel-svelte";
    import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
    import { ChevronRight, ChevronLeft } from "@lucide/svelte";
    import { Button } from "$ui/button";
    import Autoplay from "embla-carousel-autoplay";
    import { ButtonGroup } from "$ui/button-group";

    let {images, reversed = false} = $props();

    let emblaApi: EmblaCarouselType;
    let emblaOptions: EmblaOptionsType = {
        loop: true,
        align: "center",
    };
    let emblaPlugins = [
        Autoplay({
            stopOnInteraction: true,
            delay: 5000
        }),
    ];

    let scrollSnaps = $state([]);
    let selectedSnap = $state(0);

    const goToPrev = () => {
        emblaApi?.scrollPrev();
        emblaApi?.plugins().autoplay?.stop();
    }

    const goToNext = () => {
        emblaApi?.scrollNext()
        emblaApi?.plugins().autoplay?.stop();
    }

    const setupSnaps = (emblaApi: any) => (scrollSnaps = emblaApi.scrollSnapList());
    const setActiveSnap = (emblaApi: any) => (selectedSnap = emblaApi.selectedScrollSnap());
    const onEmblaInit = (event: any) => {
        emblaApi = event.detail;
        setupSnaps(emblaApi);
        setActiveSnap(emblaApi);
        emblaApi.on("reInit", setupSnaps);
        emblaApi.on("reInit", setActiveSnap);
        emblaApi.on("select", (emblaApi: EmblaCarouselType) => {
            selectedSnap = emblaApi.selectedScrollSnap();
        });
    }
</script>


<div class="embla w-full flex-1">
    <div class="embla__viewport border rounded-4xl shadow-xl"
         onemblaInit={onEmblaInit}
         use:useEmblaCarousel={{
             options: emblaOptions,
             plugins: emblaPlugins
         }}>
        <div class="embla__container">
            {#each images as img}
                <div class="embla__slide">
                    <div class="w-full h-full">
                        <enhanced:img src={img.src}
                                      alt={img.alt}
                                      class="min-w-full"/>
                    </div>
                </div>
            {/each}
        </div>
    </div>


    <p class="text-sm text-muted-foreground font-light italic tracking-wide text-center pt-2">{images[selectedSnap].alt}</p>


    <div class="flex justify-center w-full mt-3 items-center">
        <Button variant="link"
                size="icon-sm"
                aria-label="Previous slide"
                class="text-gray-500"
                onclick={goToPrev}>
            <ChevronLeft/>
        </Button>
        <div class="embla__dots flex gap-2">
            {#each scrollSnaps as _, idx}
                <button class="embla__dot w-3.5 h-3.5 border rounded-full {selectedSnap === idx ? 'bg-neutral-400' : ''}"
                        aria-label="Image dot {idx+1}"
                        onclick={() => {
                            emblaApi.scrollTo(idx);
                            emblaApi.plugins().autoplay.stop();
                        }}>
                </button>
            {/each}
        </div>
        <Button variant="link"
                size="icon-sm"
                aria-label="Previous slide"
                class="text-gray-500"
                onclick={goToNext}>
            <ChevronRight/>
        </Button>
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