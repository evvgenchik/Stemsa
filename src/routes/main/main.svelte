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
                <img class="stair" src="./images/main/stair.png" alt="stair">
    
                <div class="gradient"></div>
            </div>
    
            <div class="icon-container hall">
                <img class="hall" src="./images/main/hall.png" alt="hall">
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
            margin-top: 51rem;
            display: flex;
            gap: 32rem;

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
                    width: 315rem;
                    height: 456rem;
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
</style>
