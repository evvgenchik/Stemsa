<script lang="ts">
    import Button from '../../components/UI/Button.svelte';
    import Directions from './directions.svelte';
    import Qualities from './qualities.svelte';
    import WhatWeCan from './whatWeCan.svelte';
</script>

<div class="container">
    <div class="main">
        <h1 class="title">
            <span class="highlight">Мы</span> воплощаем ваши гениальные идеи.
        </h1>
    
        <div class="buttons">
            <Button accent icon
                text="Контакты"
                url="/contacts"
                />
    
            <Button
                text="Услуги"
                url="/services"
                />
        </div>
    
        <div class="icons">
            <div class="icon-container stair">
                <img class="stair" src="./images/main/stair.jpg" alt="stair">
    
                <div class="gradient"></div>
            </div>
    
            <div class="icon-container hall">
                <img class="hall" src="./images/main/hall.jpg" alt="hall">
            </div>
        </div>
    
        <Directions />
    
        <Qualities />
    
        <WhatWeCan />
    </div>
</div>

<style lang="postcss">
    .main {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 67rem;
        margin-top: 61rem;

        .title {
            font-size: 78rem;
            letter-spacing: 3.12rem;
            max-width: 742rem;
            text-align: center;
            width: 100%;
        }

        .buttons {
            display: flex;
            gap: 28rem;
            margin-top: 65rem;
        }

        .icons {
            display: flex;
            gap: 5rem;
            justify-content: space-between;
            margin-top: 51rem;
            width: 100%;

            .icon-container {
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

                .stair {
                    height: 100%;
                    max-height: 456rem;
                    max-width: 315rem;
                    width: 100%;
                }

                .hall {
                    height: 100%;
                    max-height: 456rem;
                    max-width: 665rem;
                    width: 100%;
                }

                &.stair::after {
                    content: "";
                    background: rgba(0,0,0,0.2);
                    border-radius: 11rem;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }

                img {
                    border-radius: 11rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .main {
            .title {
                font-size: 54rem;
                max-width: 532rem;
            }
        }
    }

    @media (max-width: 660px) {
        .main {
            .title {
                font-size: 36rem;
                max-width: 382rem;
            }
        }
    }

    @media (max-width: 430px) {
        .main {
            .title {
                font-size: 28rem;
                max-width: 302rem;
            }

            .icons {
                .icon-container {
                    &::before {
                        display: none;
                    }

                    &:first-child{
                        display: none;
                    }

                    .hall {
                        width: 100%;
                    }

                    img {
                        border-radius: 0rem;
                    }
                }
            }
        }
    }
</style>
