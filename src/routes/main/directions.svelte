<script lang="ts">
    const SCROLL_SPEED_MULTIPLIER = 2;
    const VERTICAL_SCROLLING_RANGE = 25;

    let listRef: HTMLElement;
    let paneRef: HTMLElement;

    let panePosX = 0;
    let isDragging = false;
    let startY = 0;
    let cursorX = 0;

    function onDrag(event) {
        if (!isDragging) {
            return;
        }
        const currentY = event.offsetY || (event.touches && event.touches[0].clientY);

        // Ignore vertical movement if it exceeds a small threshold (e.g., 5px)
        if (Math.abs(currentY - startY) > VERTICAL_SCROLLING_RANGE) {
            return;
        }

        event.preventDefault();

        const listRect = listRef.getBoundingClientRect();
        const paneRect = paneRef.getBoundingClientRect();
        const maxRightPosition = -(paneRect.width - listRect.width - listRef.offsetLeft * 2);

        const offsetX = event.offsetX || (event.touches && event.touches[0].clientX);
        
        let leftPosX = (offsetX - cursorX) * SCROLL_SPEED_MULTIPLIER;

        leftPosX = Math.min(leftPosX, 0);
        leftPosX = Math.max(leftPosX, maxRightPosition);

        paneRef.style.left = `${leftPosX}px`;
    } 

    function onPointerDown(event) {
        const offsetX = event.offsetX || (event.touches && event.touches[0].clientX);
        const offsetY = event.offsetY || (event.touches && event.touches[0].clientY);

        isDragging = true;
        cursorX = (offsetX - paneRef.offsetLeft);
        startY = offsetY;
    }

    function stopDragging() {
        isDragging = false;
    }
</script>

<div class="directions">
    <h2 class="title">
        Изучите <span class="highlight">Наши</span> Направления
    </h2>
    
    <p class="subtitle">
        опыт на протяжении 15 лет позволил реализовать много различных проектов,
        поэтому мы с уверенностью можем гарантировать вам качество
    </p>

    <div class="list"
         on:pointermove={onDrag}
         on:pointerdown={onPointerDown}
         on:pointerup={stopDragging}
         on:touchmove={onDrag}
         on:touchstart={onPointerDown}
         on:touchend={stopDragging}
         bind:this={listRef}
         >

        <div 
            class="pane" 
            style="-webkit-transform: translateX({panePosX}px); transform: translateX({panePosX}px)"
            bind:this={paneRef}
            >

            <div class="item">
                <div class="icon-container">
                    <img src="./images/main/directions/rhombus.svg" alt="" class="icon">
                </div>
    
                <p class="item-title">ЗD Замеры</p>
                
                <p class="item-subtitle">
                    Измеряем площади,  рассчитаем перепады 
                    углов, высот и уровней, параллельность стен
                </p>
            </div>
    
            <div class="item">
                <div class="icon-container">
                    <img src="./images/main/directions/ruler.svg" alt="" class="icon">
                </div>
    
                <p class="item-title">Проектрирование</p>
                
                <p class="item-subtitle">
                    Обмерный план для планировки <br /> помещения и фотографии с привязкой
                </p>
            </div>
    
            <div class="item">
                <div class="icon-container">
                    <img src="./images/main/directions/wrench.svg" alt="" class="icon">
                </div>
    
                <p class="item-title">Изготовление</p>
                
                <p class="item-subtitle">
                    Настоящие профессионалы изготовят <br />
                    ваше изделие в своих мастерских
                </p>
            </div>
    
            <div class="item">
                <div class="icon-container">
                    <img src="./images/main/directions/hammer.svg" alt="" class="icon">
                </div>
    
                <p class="item-title">Монтаж изделий</p>
                
                <p class="item-subtitle">
                    Установка готовых изделий с помощью высокотехнологичного оборудования
                </p>
            </div>
    
            <div class="item">
                <div class="icon-container">
                    <img src="./images/main/directions/star.svg" alt="" class="icon">
                </div>
    
                <p class="item-title">Эксклюзивные изделия</p>
                
                <p class="item-subtitle">
                    Собственная разработка, аналогов<br /> 
                    на рынке нет
                </p>
            </div>
    
            <div class="item">
                <div class="icon-container">
                    <img src="./images/main/directions/pen.svg" alt="" class="icon">
                </div>
    
                <p class="item-title">Разработка Дизайна</p>
                
                <p class="item-subtitle">С использованием новейших<br />компьютерных технологий</p>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .directions {
        margin-top: 100rem;
        text-align: center;
        width: 100%;

        .title {
            font-size: 50rem;
        }

        .subtitle {
            font-size: 16rem;
            letter-spacing: 0.32rem;
            line-height: 27rem;
            margin: 34rem auto 0;
            max-width: 653rem;
            width: 100%;
        }

        .list {
            margin-top: 48rem;

            .pane {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                pointer-events: none;
                row-gap: 25rem;

                transform: translateX(0);

                .item {
                    border: 1rem solid #F4F4F4;
                    border-radius: 10rem;
                    height: 206rem;
                    padding: 24rem 20rem 22rem;
                    text-align: left;
                    width: 316rem;

                    .icon-container {
                        align-items: center;
                        background-color: #F3F7FF;
                        border-radius: 50%;
                        display: flex;
                        height: 64rem;
                        justify-content: center;
                        width: 64rem;
                    }

                    .item-title {
                        margin-top: 22rem;
                        line-height: 28rem;
                    }

                    .item-subtitle {
                        color: #A6A6A6;
                        font-size: 12rem;
                        font-weight: 400;
                        line-height: 15rem;
                        margin-top: 8rem;
                    }
                }
            }
        }
    }

    @media (max-width: 980px) {
        .directions {
            .list {
                .pane {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        }
    }

    @media (max-width: 660px) {
        .directions {
            .list {
                height: 446rem;
                position: relative;
                
                .pane {
                    grid-template-columns: repeat(3, 1fr);
                    position: absolute;
                }
            }
        }
    }
</style>
