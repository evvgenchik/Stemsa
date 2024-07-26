<script lang="ts">
    export let onClick = (): void => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="burger"
     on:click={onClick}
     >
     
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>

<style lang="postcss">
    .burger {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 10rem;

        .line {
            height: 4rem;
            width: 35rem;
            background-color: #35353D;
            border-radius: 2rem;
        }
    }
</style>
