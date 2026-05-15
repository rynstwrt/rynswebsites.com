<script lang="ts">
    let isLoading = $state(false);

    function onSubmit() {
        isLoading = true;
    }
</script>


<dialog id="contact_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-base-200">
        <form method="dialog">
            <button class="btn btn-md btn-circle btn-ghost absolute top-2 right-2">x</button>
        </form>

        <!--<h3 class="text-lg font-bold">Hello!</h3>-->

        <!--<div class="modal-top">-->
        <!--<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">-->
        <!--    <legend class="fieldset-legend">Contact</legend>-->

        <!--    <label class="label">Email</label>-->
        <!--    <input type="email" class="input" placeholder="Email"/>-->
        <!--</fieldset>-->



        {#if isLoading}
            <div class="modal-middle min-h-50 h-full flex justify-center items-center">
                <span class="loading loading-ring loading-xl"></span>
            </div>
        {:else}
            <fieldset class="flex flex-col gap-4 min-h-50">
                <div>
                    <label class="label block" for="email-input">Email</label>
                    <input id="email-input"
                           type="email"
                           class="input"
                           placeholder="john.doe@example.com"
                           required/>
                </div>

            </fieldset>

            <div class="modal-bottom">
                <button class="btn btn-primary btn-block" onclick={onSubmit}>Submit</button>
            </div>
        {/if}
    </div>
</dialog>