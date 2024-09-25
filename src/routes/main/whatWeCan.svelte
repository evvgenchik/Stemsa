<script>
    import Button from '../../components/UI/Button.svelte';

</script>
<div class="services">
    <h2 class="title">Что мы можем?</h2>
    
    <p class="subtitle">
        Изготовление нестандартных изделий и металлоконструкций из нержавеющей стали,
        стекла, мрамора, дерева.
    </p>

    <ul class="list">
        <li class="item">
            <div class="number">01</div>

            <div class="point">
                <p class="name">Двери</p>
                <p class="description">Из натурального камня и нержавеющей стали</p>
            </div>
        </li>
        
        <li class="item">
            <div class="number">02</div>

            <div class="point">
                <p class="name">Душевые стеклянные перегородки </p>
                <p class="description">Из закаленного стекла ис фурнитурой MWE Германия</p>
            </div>
        </li>
        
        <li class="item">
            <div class="number">03</div>

            <div class="point">
                <p class="name">Лестницы</p>
                <p class="description">Из натурального камня и нержавеющей стали</p>
            </div>
        </li>
        
        <li class="item">
            <div class="number">04</div>

            <div class="point">
                <p class="name">Перегородки раздвижные межкомнатные</p>
                <p class="description">Из алюминия и закаленного стекла </p>
            </div>
        </li>
        
        <li class="item">
            <div class="number">05</div>

            <div class="point">
                <p class="name">Эксклюзивные иделия под заказ</p>
                <p class="description">Скрытые сейфы, столы, предметы интерьера  </p>
            </div>
        </li>
    </ul>

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
                border-bottom: 1rem solid #F4F4F4;
                display: flex;
                gap: 20rem;
                justify-content: space-between;
                padding-bottom: 25rem;

                .number {
                    color: #535353;
                    font-size: 36rem;
                    font-weight: bold;
                }

                .point {
                    max-width: 440rem;
                    width: 100%;
                    
                    .name {
                        font-size: 20rem;
                        font-weight: bold;
                    }

                    .description {
                        color: #A6A6A6;
                        margin-top: 24rem;
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

    @media (max-width: 768px) {
        .services {
            .title {
                font-size: 40rem;
            }

            .subtitle {
                font-size: 12rem;
                max-width: 521rem;
            }

            .list {
                .item {
                    .number {
                        font-size: 24rem;
                    }

                    .point {
                        .name {
                            font-size: 14rem;
                        }

                        .description {
                            margin-top: 12rem;
                            font-size: 12rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 680px) {
        .services {
            .title {
                font-size: 30rem;
            }

            .subtitle {
                font-size: 12rem;
                max-width: 288rem;
            }

            .list {
                .item {
                    .number {
                        font-size: 20rem;
                    }

                    .point {
                        .name {
                            font-size: 14rem;
                        }

                        .description {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>
