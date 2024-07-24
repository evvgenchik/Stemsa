<script>
    import Button from 'components/UI/Button.svelte';
</script>

<div class="works">
    <div class="container">
        <h1 class="title">Апартаменты Moscow City за 10,5 млн. $</h1>
    
        <p class="subtitle">
            Работы выполненные фирмой stemsa в башне Москва в апартаментах на 71 этаже
        </p>
    
        <div class="content">
            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/chandelier.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">Двери из Оникса</h2>
    
                    <p class="info-text">
                        Двери в кол-ве 7 шт из натурального камня ONICE 
                        BRAUN защищенного с двух сторон закаленным стеклом
                        и каркасе из полированной нержавеющей стали, бесшумный магнитным замком, петли особой разработки. 
                        Компания stemsa лично разрабатывала дизайн и конструкцию дверей. 
                    </p>
    
                    <div class="buttons-container">
                        <Button accent icon
                            text="Узнать подробнее"
                            url="/contacts"
                            />
    
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
                    <h2 class="info-title">Лестницы в стиле <span class="highlight">bentley</span></h2>
    
                    <p class="info-text">
                        Лестницы в гостиной и спальне из полированной нержавеющей стали с 
                        ограждением в стиле BENTLEY, ступени и поручень из массива дерева 
                        и ограждением из стекла с подсветкой.
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                url="/contacts"
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
                    <h2 class="info-title">Столешница из оникса</h2>
    
                    <p class="info-text">
                        Столешница из натурального камня ONICE, выполнена на металлокаркасе с подстветкой. <br />
                        Благодаря подсветке столешница имеет комфортную температуру,
                        и вам не придется испытывать никакого дискомфорта от прохладного камня
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                url="/contacts"
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
                    <h2 class="info-title">Защитное остекление</h2>
    
                    <p class="info-text">
                        Изготовление и установка защитного остекления с изменяемой прозрачностью, в санузел спальни, 
                        облицованного по периметру полированной нержавеющей сталью
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-button">
                            <Button blue fullWidth accentOnHover
                                text="Ручная работа"
                                url="/contacts"
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
            font-size: 40rem;
        }

        .subtitle {
            color: #A4A4A4;
            letter-spacing: 0.32rem;
            line-height: 16rem;
            margin: 17rem auto 0;
            max-width: 719rem;
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
                        font-size: 34rem;
                        line-height: 34rem;
                    }

                    .info-text {
                        color: #535353;
                        flex-grow: 1;
                        font-size: 16rem;
                        line-height: 24rem;
                        margin-top: 44rem;
                    }

                    .buttons-container {
                        display: flex; 
                        justify-content: space-between;
                        max-width: 403rem;

                        .large-button {
                            width: 233rem;
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
