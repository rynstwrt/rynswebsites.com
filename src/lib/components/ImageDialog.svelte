<script lang="ts">
    import {
        Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
    } from "$ui/dialog";
    import { Button } from "$ui/button";

    let {open = $bindable(), image} = $props();
</script>


<Dialog bind:open>
    <!--<DialogTrigger class="sm:max-w-md"></DialogTrigger>-->
    <DialogContent>
        <DialogHeader class="text-lg">
            {image.alt}
        </DialogHeader>

        <enhanced:img src={image.src} alt={image.alt} class="rounded"/>

        <DialogFooter>
            <Button href={image.src} target="_blank">View full image</Button>
        </DialogFooter>
    </DialogContent>
</Dialog>


