<script>
    import Button from 'components/UI/Button.svelte';
</script>

<div class="error">
    <div class="container">
        <h1>404</h1>
        
        <h2>Упс! Страница не найдена</h2>
        
        <div class="button">
            <Button icon accent
                url="/"
                text="Главная"
                />
        </div>
    </div>
</div>

<style lang="postcss">
    .error {
        text-align: center;
        margin: 150rem 0;

        h1 {
            color: #fff;
            font-family: KronaOne;
            font-size: 200rem;
            -webkit-text-stroke: 1px #1563FF;
        }

        h2 {
            font-size: 48rem;
            margin-top: 58rem;
        }

        .button {
            margin-top: 58rem;
        }
    }
</style>

