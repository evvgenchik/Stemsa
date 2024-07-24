<script>
    import Button from './UI/Button.svelte';

    export let isOpen = false;

    export let onClose;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="overlay" class:visible={isOpen} on:click={onClose}>
    <div class="overlay-content" on:click|stopPropagation>
        <h2>Спасибо!</h2>
        <p>Мы свяжемся с вами в ближайшее время</p>
        
        <div class="button">
            <Button icon blue
                text="Главная"
                url="/"
                />
        </div>
    </div>
</div>

<style lang="postcss">
    .overlay {
        align-items: center;
        background-color: rgba(255, 255, 255, 0.9);
        color: #fff;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        opacity: 0;
        position: fixed;
        top: 0;
        visibility: hidden;
        width: 100%;

        transition: opacity 0.3s ease-out;

        &.visible {
            opacity: 1;
            visibility: visible;
        }

        .overlay-content {
            align-items: center;
            background-color: #1563FF;
            border-radius: 129rem;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            max-height: 394rem;
            max-width: 562rem;
            padding: 2rem;
            width: 100%;

            h2 {
                font-size: 48rem;
            }

            p {
                letter-spacing: 0.28rem;
                font-size: 14rem;
                margin-top: 15rem;
            }

            .button {
                margin-top: 35rem;
            }
        }
    }
</style>

