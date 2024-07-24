<script>
    import Button from '../../components/UI/Button.svelte';

</script>
<div class="works">
    <div class="container">
        <h1 class="title">Наши услуги</h1>
    
        <p class="subtitle">
            Компания stemsa изготовит любые сложные архитектурные конструкции и изделия на ваш вкус
        </p>
    
        <div class="content">
            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/chandelier.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">Сейфы скрытой установки</h2>
    
                    <p class="info-text">
                        Сейф скрытой установки- это уникальное решение для хранения ценностей и документов. 
                        Они не занимают места и могут быть тщательно спрятаны от посторонних глаз. 
                        Самое главное преимущество – «способность» к маскировке. Подобный сейф неосуществимо унести с собой
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-width-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                />
                        </div>
    
                        <Button disable
                            text="Под заказ"
                            />
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/stair.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">Столы и столешницы</h2>
    
                    <p class="info-text">
                        Компания stemsa изготавливает столы и столешницы любых размеров и материалов: 
                        полудрагоценных камней, дерева, нержавеющей стали и стекла. <br />
                        Наша команда разрабатывает дизайн эксклюзивно, по вашим идеям и предпочтениям 
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-width-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                />
                        </div>

                        <Button disable
                            text="Под заказ"
                            />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/stair.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">Лестницы и ограждения</h2>
    
                    <p class="info-text">
                        Сейф скрытой установки- это уникальное решение для хранения ценностей и документов. 
                        Они не занимают места и могут быть тщательно спрятаны от посторонних глаз. 
                        Самое главное преимущество – «способность» к маскировке. Подобный сейф неосуществимо унести с собой
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-width-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                />
                        </div>

                        <Button disable
                            text="Под заказ"
                            />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/stair.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">Другие изделия</h2>
    
                    <p class="info-text">
                        Наша компания с радостью изготовит любое изделие из нержавеющей стали, полудрагоценных камней, дерева и стекла под любые запросы 
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-width-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                />
                        </div>

                        <Button disable
                            text="Под заказ"
                            />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .works {
        margin: 53rem 0 199rem;
        
        .title {
            text-align: center;
            font-size: 64rem;
        }

        .subtitle {
            color: #A4A4A4;
            letter-spacing: 0.32rem;
            line-height: 25rem;
            margin: 34rem auto 0;
            max-width: 498rem;
            text-align: center;
            width: 100%;
        }

        .content {
            margin-top: 105rem;

            .row {
                display: flex;
                justify-content: space-between;

                .icon-container {
                    height: 320rem;
                    width: 485rem;
                }

                .info {
                    display: flex;
                    flex-direction: column;
                    max-width: 465rem;
                    width: 100%;

                    .info-title {
                        font-size: 32rem;
                        line-height: 42rem;
                    }

                    .info-text {
                        color: #535353;
                        flex-grow: 1;
                        font-size: 16rem;
                        line-height: 24rem;
                        margin-top: 28rem;
                    }

                    .buttons-container {
                        display: flex; 
                        justify-content: space-between;
                        max-width: 403rem;

                        .large-width-button {
                            width: 232rem;
                        }
                    }
                }
            }

            .row:nth-child(even) {
                flex-direction: row-reverse;
            }

            .row + .row {
                margin-top: 91rem;
            }
        }
    }
</style>
