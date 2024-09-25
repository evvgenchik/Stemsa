<script lang="ts">
    import { Viewports } from '../../common/types';

    import { onMount } from 'svelte';
    import Button from '../../components/UI/Button.svelte';

    const items = [
        {
            title: "Полный спектр услуг под ключ",
            subtitle: "От А до Я",
            description: `От начальной стадии до установки с помощью 
                высокотехнологичного оборудования`,
        },
        {
            title: "Контроль качества работ",
            subtitle: "С точностью до 1 мм",
            description: "Результат нашей работы всегда идеальный",
        },
        {
            title: "Мы работает более 15 лет",
            subtitle: "С объектами любого уровня сложности",
            description: "И можем гарантировать вам качество выполненных работ на 5 лет минимум",
        },
    ];

    let screenWidth = Viewports.Desktop;

    const visibilityDescriptions = new Array(items.length).fill(false);
    
    onMount(() => {
        screenWidth = window.innerWidth;

        const handleResize = () => {
            screenWidth = window.innerWidth;
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    })

    function toggleDescriptionVisibility(index: number) {
        visibilityDescriptions[index] = !visibilityDescriptions[index];
    }
</script>

<div class="qualities">
    <header class="header">
        <h2 class="title">
            <span class="highlight">Выберите</span> контроль, профессионализм и качество
        </h2>
    
        <div class="credo">
            <p class="text">
                {#if screenWidth <= Viewports.Mobile}
                    Сложные архитектурные конструкции? 
                    Помещениях с нестандартными стенами?
                    Нет прямых углов? 
                    Множество мелких деталей интерьера? 
                    Нет причины беспокоиться
                    Stemsa справится с любыми трудностями
                {:else}
                    Сложные архитектурные конструкции? Помещениях 
                    с нестандартными стенами? Нет прямых углов? 
                    Множество мелких деталей интерьера? 
                    Нет причины беспокоиться, Stemsa справится с любыми
                    трудностями
                {/if}
            </p>
    
            <p class="author">Стебловский Александр<br />Ген. Директор</p>
    
            <div class="button">
                <Button accent icon
                    text="Контакты"
                    url="/contacts"
                    />
            </div>
        </div>
    </header>

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

        {#each items as item, index}
            <div class="item">
                <div class="left">
                    <p class="item-title">{item.title}</p>
                    <p class="item-subtitle">{item.subtitle}</p>
                </div>
            
                <p class="description" class:visible={visibilityDescriptions[index]}>
                    {item.description}
                </p>
            
                {#if screenWidth <= Viewports.Mobile}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="check" on:click={() => toggleDescriptionVisibility(index)}>
                        <img src="/images/main/qualities/check.svg" alt="check">
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .qualities {
        margin-top: 83rem;
        width: 100%;

        .header {
            display: flex;
            gap: 10rem;
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
                    max-width: 456rem;
                    text-align: left;
                    white-space: pre-line;
                }

                .author {
                    color: #919191;
                    font-size: 14rem;
                    line-height: 20rem;
                    margin-top: 54rem;
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
                        height: 4rem;
                        left: 0;
                        position: absolute;
                        top: 50%;
                        width: 4rem;

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

                    img {
                        height: 100%;
                        max-height: 431rem;
                        max-width: 1012rem;
                        width: 100%;
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

    @media (max-width: 980px) {
        .qualities {
            .header {
                display: block;
                position: relative;

                .title {
                    font-size: 40rem;
                    line-height: 55rem;
                    max-width: 426rem;
                }

                .credo {
                    font-size: 14rem;

                    .text {
                        margin-top: 56rem;
                        max-width: 400rem;
                    }

                    .author {
                        margin-top: 0;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }

                    .button {
                        margin-top: 0;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
            }

            .list {
                margin-top: 83rem;
            }
        }
    }

    @media (max-width: 768px) {
        .qualities {
            .list {
                .item {
                    position: relative;

                    .item-title {
                        font-size: 14rem;
                    }

                    .item-subtitle {
                        font-size: 12rem; 

                        &::before {
                            height: 3rem;
                            width: 3rem;
                        }
                    }

                    .description {
                        font-size: 12rem;
                        line-height: 22rem;
                        max-width: 288rem;
                    }

                    .check {
                        cursor: pointer;
                        height: 14rem;
                        position: absolute;
                        right: 28rem;
                        top: 10rem;
                        width: 8rem;
                        z-index: 1;
                    }
                }
            }
        }
    }

    @media (max-width: 660px) {
        .qualities {
            .header {
                .title {
                    font-size: 32rem;
                }

                .credo {
                    font-size: 12rem;

                    .author {
                        bottom: -83rem;
                        font-size: 12rem;
                    }

                    .button {
                        position: absolute;
                        left: 0;
                        top: 451rem;
                    }
                }
            }

            .list {
                gap: 19rem;
                margin-top: 169rem;

                .item {
                    display: block;

                    &:not(:first-child) {
                        border-bottom: 1rem solid #F4F4F4;
                        padding-bottom: 16rem;
                    }

                    .left {
                        background-color: #fff;
                        position: relative;
                        z-index: 1;
                    }

                    .description {
                        left: 0;
                        max-height: 0; 
                        overflow: hidden;
                        position: relative;

                        transform: translate(0, -40rem);
                        transition: all 0.42s ease-in-out; 

                        &.visible {
                            margin-bottom: 15rem;
                            max-height: 64rem;

                            transform: translate(0, 25rem);
                        }
                    }
                }
            }
        }
    }
</style>
