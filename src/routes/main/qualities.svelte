<script>
  import Button from '../../components/UI/Button.svelte';

</script>
<div class="qualities">
    <div class="header">
        <h2 class="title">
            <span class="highlight">Выберите</span> контроль, профессионализм и качество
        </h2>
    
        <div class="credo">
            <p class="text">Сложные архитектурные конструкции? Помещениях 
                с нестандартными стенами? Нет прямых углов? 
                Множество мелких деталей интерьера? <br />
                Нет причины беспокоиться, Stemsa справится с любыми
                трудностями
            </p>
    
            <p class="author">Стебловский Александр</p>
            <p class="author">Ген. Директор</p>
    
            <div class="button">
                <Button accent icon
                    text="Контакты"
                    />
            </div>
        </div>
    </div>

    <div class="list">
        <div class="item">
            <div class="left">
                <p class="item-title">Апартаменты <span class="place">Moscow City</span></p>
                <p class="item-subtitle">Февраль 2016 </p>

                <div class="icon-container">
                    <img src="/images/main/qualities/hall.png" alt="hall" class="icon">
                </div>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <p class="item-title">Полный спектр услуг под ключ</p>
                <p class="item-subtitle">От А до Я</p>
            </div>

            <p class="description">
                От начальной стадии до установки с помощью 
                высокотехнологичного оборудования
            </p>
        </div>
        <div class="item">
            <div class="left">
                <p class="item-title">Контроль качества работ</p>
                <p class="item-subtitle">С точностью до 1 мм</p>
            </div>

            <p class="description">Результат нашей работы всегда идеальный</p>
        </div>
        <div class="item">
            <div class="left">
                <p class="item-title">Мы работает более 15 лет</p>
                <p class="item-subtitle">С объектами любого уровня сложности</p>
            </div>

            <p class="description">
                И можем гарантировать вам качество 
                выполненных работ на 5 лет минимум
            </p>
        </div>
    </div>
</div>

<style lang="postcss">
    .qualities {
        margin-top: 83rem;
        width: 100%;

        .header {
            display: flex;
            justify-content: space-between;

            .title {
                color: #000;
                font-size: 50rem;
                line-height: 64rem;
                max-width: 505rem;
            }

            .credo {
                .text {
                    font-weight: 400;
                    line-height: 24rem;
                    max-width: 426rem;
                    text-align: left;
                }

                .author {
                    color: #919191;
                    font-size: 14rem;
                    margin-top: 54rem;
                }

                .author + .author {
                    margin-top: 7rem;
                }

                .button {
                    float: right;
                    margin-top: 22rem;
                }
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 78rem;

            .item {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .item-title {
                    color: #1563FF;

                    .place {
                        color: #000;
                    }
                }

                .item-subtitle {
                    font-size: 14rem;
                    font-weight: 400;
                    margin-top: 10rem;
                    padding-left: 12rem;
                    position: relative;

                    &::before {
                        content: "";
                        background-color: #000;
                        border-radius: 50%;
                        height: 6rem;
                        left: 0;
                        position: absolute;
                        top: 50%;
                        width: 6rem;

                        transform: translate(0, -50%);
                    }
                }

                .icon-container {
                    margin-top: 28rem;
                    position: relative;

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

                .description {
                    color: #535353;
                    font-weight: 400;
                    line-height: 23rem;
                    max-width: 386rem;
                    width: 100%;
                }
            }
        }
    }
</style>
