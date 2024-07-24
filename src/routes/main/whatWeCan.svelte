<script>
    import Button from '../../components/UI/Button.svelte';

</script>
<div class="services">
    <h2 class="title">Что мы можем?</h2>
    
    <p class="subtitle">
        Изготовление нестандартных изделий и металлоконструкций из нержавеющей стали,
        стекла, мрамора, дерева.
    </p>

    <div class="list">
        <div class="item">
            <div class="number">01</div>

            <div class="point">
                <p class="name">Двери</p>
                <p class="description">Из натурального камня и нержавеющей стали</p>
            </div>
        </div>
        
        <div class="item">
            <div class="number">02</div>

            <div class="point">
                <p class="name">Душевые стеклянные перегородки </p>
                <p class="description">Из закаленного стекла ис фурнитурой MWE Германия</p>
            </div>
        </div>
        
        <div class="item">
            <div class="number">03</div>

            <div class="point">
                <p class="name">Лестницы</p>
                <p class="description">Из натурального камня и нержавеющей стали</p>
            </div>
        </div>
        
        <div class="item">
            <div class="number">04</div>

            <div class="point">
                <p class="name">Перегородки раздвижные межкомнатные</p>
                <p class="description">Из алюминия и закаленного стекла </p>
            </div>
        </div>
        
        <div class="item">
            <div class="number">05</div>

            <div class="point">
                <p class="name">Эксклюзивные иделия под заказ</p>
                <p class="description">Скрытые сейфы, столы, предметы интерьера  </p>
            </div>
        </div>
    </div>

    <div class="button">
        <Button accent icon
            text="Подробнее"
            url="/services"
            />
    </div>
</div>

<style lang="postcss">
    .services {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 120rem;
        width: 100%;
        padding-left: 20rem;
        
        .title {
            font-size: 50rem;
        }

        .subtitle {
            color: #535353;
            font-weight: 400;
            line-height: 27rem;
            margin-top: 22rem;
            max-width: 700rem;
            text-align: center;
        }

        .list {
            margin-top: 67rem;
            width: 100%;

            .item {
                align-items: center;
                display: flex;
                gap: 200rem;
                border-bottom: 1rem solid #F4F4F4;
                padding-bottom: 25rem;

                .number {
                    color: #535353;
                    font-size: 36rem;
                    font-weight: bold;
                }

                .point {
                    .name {
                        font-size: 20rem;
                        font-weight: bold;
                    }

                    .description {
                        color: #535353;
                        margin-top: 24rem;
                        position: relative;
                        padding-left: 12rem;

                        &::before {
                            content: "";
                            background-color: #535353;
                            border-radius: 50%;
                            height: 6rem;
                            left: 0;
                            position: absolute;
                            top: 50%;
                            width: 6rem;

                            transform: translate(0, -50%);
                        }
                    }
                }
            }

            .item + .item {
                margin-top: 47rem;
            }
        }

        .button {
            margin-top: 94rem;
            align-self: self-end;
        }
    }
</style>
