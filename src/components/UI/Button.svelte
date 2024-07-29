<script lang="ts">
    export let text = "";
    export let url = "";

    export let accent = false;
    export let accentOnHover = false;
    export let icon = false;
    export let fullWidth = false;
    export let blue = false;
    export let disable = false;
    export let submit = false;
</script>


<button class="button"
        class:accent
        class:blue
        class:disable
        class:accent-on-hover={accentOnHover}
        class:full-width={fullWidth}
        type = {submit ? "submit" : "button"}
        >

    <span class="text">{text}</span>

    {#if url}
        <!-- svelte-ignore a11y-missing-content -->
        <a href={url}></a>
    {/if}
    
    {#if icon}
        <svg class="icon" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.87486 6.30618L7.77931 0.163514L1.63623 0.22719C1.57212 0.219354 1.50707 0.225385 1.4455 0.244874C1.38392 0.264362 1.32724 0.296855 1.27931 0.34015C1.23139 0.383445 1.19332 0.436533 1.16769 0.495819C1.14206 0.555106 1.12947 0.619207 1.13077 0.683782C1.13207 0.748358 1.14722 0.811901 1.17521 0.870109C1.20321 0.928318 1.24338 0.979833 1.29301 1.02117C1.34264 1.0625 1.40057 1.09269 1.46288 1.10969C1.52519 1.12668 1.59043 1.13009 1.65418 1.11969L6.25759 1.07916L0.238388 7.25643C0.154938 7.34207 0.108928 7.45736 0.110477 7.57692C0.112027 7.69649 0.16101 7.81054 0.246651 7.89399C0.332292 7.97744 0.447577 8.02345 0.567142 8.0219C0.686707 8.02035 0.800759 7.97137 0.884209 7.88573L6.90341 1.70845L6.9822 6.31137C6.98417 6.43099 7.03358 6.54494 7.11957 6.62813C7.20555 6.71132 7.32106 6.75695 7.44069 6.75498C7.56032 6.75301 7.67426 6.70359 7.75745 6.61761C7.84065 6.53163 7.88627 6.41611 7.8843 6.29649L7.87486 6.30618Z"/>
        </svg>
    {/if}
</button>

<style lang="postcss">
    .button {
        background-color: #fff;
        border-radius: 27rem;
        border: 1rem solid #000;
        cursor: pointer;
        font-family: Involve;
        font-size: 16rem;
        gap: 4rem;
        letter-spacing: 0.64rem;
        padding: 0 26rem;
        line-height: 46rem;
        white-space: nowrap;
        position: relative;

        a {
            border-radius: 27rem;
            display: block;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }

        .icon {
            fill: #35353D;
            height: 9rem;
            width: 8rem;
        }

        &:hover {
            border-color: #1563FF;
            color: #1563FF;
        }

        &.full-width {
            padding: 0;
            width: 100%;
        }

        &.blue {
            border-color: #1563FF;
            color: #1563FF;

            .icon {
                fill: #1563FF;
            }
        }

        &.disable {
            border-color: #A6A6A6;
            color: #A6A6A6;
            cursor: default;

            &:hover {
                border-color: #A6A6A6;
                color: #A6A6A6;
            }
        }   

        &.accent {
            background-color: #1563FF;
            border-color: #1563FF;
            color: #fff;

            .icon {
                fill: #fff;
            }

            &:hover {
                background-color: #fff;
                color: #1563FF;

                .icon {
                    fill: #1563FF;
                }
            }
        }

        &.accent-on-hover {
            &:hover {
                background-color: #1563FF;
                color: #fff;

                .icon {
                    fill: #fff;
                }
            }
        }
    }

    @media (max-width: 769px) {
        .button {
            font-size: 12rem;
            line-height: 38rem;
            padding: 0 23rem;

            .icon {
                height: 8rem;
                width: 7rem;
            }
        }
    }

    @media (max-width: 430px) {
        .button {
            padding: 0 19rem;

            .icon {
                height: 8rem;
                width: 7rem;
            }
        }
    }
</style>
