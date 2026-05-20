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
        // containScroll: "keepSnaps"
        // containScroll: false
    };
    let emblaPlugins = [
        Autoplay({
            stopOnInteraction: true,
            delay: 5000
        }),
        // AutoHeight(),
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
         use:useEmblaCarousel={{
             options: emblaOptions,
             plugins: emblaPlugins
         }}>
        <div class="embla__container">
            {#each images as img}
                <div class="embla__slide">
                    <div class="w-full h-full ">
                        <enhanced:img src={img.src} alt={img.alt}/>
                    </div>
                </div>
            {/each}
        </div>
    </div>


    <div class="flex justify-between w-full mt-3 items-center">
        <div class="me-1">
            <ButtonGroup>
                <Button class="embla__prev"
                        onclick={goToPrev}
                        variant="outline"
                        size="icon-sm"
                        aria-label="Previous image">
                    <ChevronLeft/>
                </Button>
                <Button class="embla__next"
                        onclick={goToNext}
                        variant="outline"
                        size="icon-sm"
                        aria-label="Next image">
                    <ChevronRight/>
                </Button>
            </ButtonGroup>
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