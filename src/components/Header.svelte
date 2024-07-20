
<script lang="ts">
    import Button from './UI/Button.svelte';
</script>

<div class="container">
    <div class="header">
        <a href="/main" class="logo">Stemsa.</a>
    
        <div class="menu">
            <a href="/about">О нас</a>
            <a href="/works">Наши работы</a>
            <a href="/exclusive">Услуги</a>
    
            <Button accentOnHover icon
                text="Контакты"
                />
        </div>
    </div>
</div>

<style lang="postcss">
    .header {
        align-items: center;
        display: flex;
        height: 88rem;
        justify-content: space-between;
        border-bottom: 1rem solid #F4F4F4;

        .logo {
            font-family: Roboto;
            font-size: 20rem;
        }

        .menu {
            align-items: center;
            display: flex;
            gap: 38rem;
            justify-content: space-between;

            a {
                font-size: 14rem;

                &:hover {
                    color: #1563FF;
                }
            }
        }
    }
</style>
