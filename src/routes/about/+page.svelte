<script>
	import WhatWeCan from '../main/whatWeCan.svelte';
    import Button from '../../components/UI/Button.svelte';

</script>
<div class="container">
    <h1 class="title">О нас</h1>

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
                <h2 class="info-title"><span class="highlight">Что</span> означает stemsa?</h2>

                <p class="info-text">
                    Имя компании stemsa было выбрано потому <br />
                    что в переводе с (англ.) stem- стержень, ствол, стебель, основа, в которую нами заложен смысл идеала <br />
                    и качества, т.е., какая основа - такое и все то, <br />
                    что мы делаем на всех этапах, и эту цепочку <br /> не разорвать
                </p>

                <div class="button">
                    <Button accent icon
                        text="Контакты"
                        url="/contacts"
                        />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="icon-container">
                <img src="/images/about/stair.png" alt="work">
            </div>

            <div class="info">
                <h2 class="info-title">Вы можете нам довериться</h2>

                <p class="info-text">
                    Накопленный опыт на протяжении 15 лет позволяет <br />
                    нам оставаться всегда на высоте, и производить изготовление и монтаж любого уровня сложности <br />
                    Нами реализовано много разнообразных и сложных проектов. Мы с уверенностью можем гарантировать Вам Качество на 100,1%!.
                </p>

                <div class="button">
                    <Button accent icon
                        text="Наши работы"
                        url="/works"
                        />
                </div>
            </div>
        </div>
    </div>

    <div class="services">
        <WhatWeCan />
    </div>
</div>


<style lang="postcss">
    .container {
        margin-top: 53rem;

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

        .services {
            margin-bottom: 110rem;
        }

        .content {
            margin-top: 105rem;

            .row {
                display: flex;
                justify-content: space-between;

                .icon-container {
                    height: 320rem;
                    position: relative;
                    width: 485rem;

                    &::before {
                        content: "";
                        background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 92%);
                        height: 100%;
                        left: 0;
                        position: absolute;
                        top: 0;
                        width: 100%;
                        z-index: 1;
                    }
                }

                .info {
                    max-width: 465rem;
                    width: 100%;

                    .info-title {
                        font-size: 36rem;
                        line-height: 42rem;
                    }

                    .info-text {
                        color: #535353;
                        font-size: 16rem;
                        line-height: 24rem;
                        margin-top: 28rem;
                    }

                    .button {
                        margin-top: 46rem;
                    }
                }
            }

            .row:nth-child(even) {
                flex-direction: row-reverse;

                .icon-container {
                    &::before {
                        background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 55%);
                    }
                }
            }

            .row + .row {
                margin-top: 91rem;
            }
        }
    }
</style>
