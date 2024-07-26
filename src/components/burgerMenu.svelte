<script lang="ts">
    import { page } from '$app/stores';

    export let isOpen = false;

    export let onClose;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="burger-menu" class:visible={isOpen} on:click={onClose}>
    <div class="content" on:click|stopPropagation>
        <div class="container">
            <header class="header">
                <a href="/" class="logo">Stemsa.</a>
                <p class="description">
                    Экскюзивные изделия из стекла, мрамора, дерева, стали
                </p>
            </header>
        
            <div class="menu">
                <a href="/about" class:active={$page.url.pathname === "/about"}>О нас</a>
                <a href="/works" class:active={$page.url.pathname === "/works"}>Наши работы</a>
                <a href="/services" class:active={$page.url.pathname === "/services"}>Услуги</a>
                <a href="/contacts" class:active={$page.url.pathname === "/contacts"}>Контакты</a>
            </div>
        
            <p class="number">+ 7 (925)  518  61-16</p>
        </div>
    </div>
</div>

<style lang="postcss">
    .burger-menu {
        background-color: rgba(0, 0, 0, 0.25);
        height: 100%;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        
        transition: 0.45s opacity 0s ease-out;

        .content {
            background-color: #fff;
            left: 0;
            padding-bottom: 54rem;
            top: 0;
            width: 100%;

            header {
                align-items: center;
                border-bottom: 1rem solid #F4F4F4;
                display: flex;
                height: 85rem;
                justify-content: space-between;

                .logo {
                    font-size: 20rem;
                    line-height: 20rem;
                }

                .description {
                    color: #626262;
                    font-size: 14rem;
                    font-weight: 400;
                    line-height: 18rem;
                    max-width: 248rem;
                }
            }

            .menu {
                align-items: center;
                display: flex;
                flex-direction: column;
                gap: 35rem;
                margin-top: 31rem;
            }

            .number {
                font-size: 12rem;
                font-weight: 400;
                margin-top: 47rem;
                text-align: center;
            }

            transform: translate(0, -414rem);
            transition: transform 0.45s ease-out;
        }

        &.visible {
            opacity: 1;
            pointer-events: all;

            .content {
                transform: translate(0, 0);
            }
        }
    }
</style>
