<script>
    import Button from '../../components/UI/Button.svelte';
</script>

<div class="works">
    <div class="container">
        <h1 class="title">Наши работы</h1>
    
        <p class="subtitle">
            Главное преимущество компании stemsa — 
            Качественное выполнение взятых на себя обязательств
        </p>
    
        <div class="content">
            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/chandelier.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">Апартаменты Moscow City</h2>
    
                    <p class="info-text">
                        Благодаря  фирмe stemsa, которая в 2014 году выполнила часть работ на 71-этаже башни Москва , апартаменты
                        стали победителем в номинации Luxury Design. <br />
                        Одного из крупнейшего международного конкурса в сфере дизайна A’ Design Award and Competition 2016 <br />
                        за проект пентхауса в комплексе Moscow city
                    </p>
    
                    <div class="buttons-container">
                        <Button accent icon
                            text="Контакты"
                            url="/contacts"
                            />
    
                        <div class="large-button">
                            <Button fullWidth 
                                text="Подбробнее о проекте"
                                url="./works/city"
                                />
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div class="icon-container">
                    <img src="/images/about/stair.png" alt="work">
                </div>
    
                <div class="info">
                    <h2 class="info-title">“Барвиха Хиллс”</h2>
    
                    <p class="info-text">
                        «Барвиха Хиллс» расположен в подмосковье на Рублево-Успенском шоссе. 
                        Именно в Барвиха Хиллс сосредоточены самые роскошные проекты и особняки. 
                        Его отличают рукотворные холмы, дома с большими панорамными окнами и подземными этажами
                    </p>
    
                    <div class="buttons-container">
                        <div class="large-button">
                            <Button fullWidth 
                                text="Подбробнее о проекте"
                                url="./works/barviha"
                                />
                        </div>
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
            max-width: 468rem;
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
                    max-width: 485rem;
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
