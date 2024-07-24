<script lang="ts">
    import { enhance } from '$app/forms';
	import Modal from '../../components/overlay.svelte';
    import Button from 'components/UI/Button.svelte';

    export let form;

    let isModalOpen = false;

    function closeOverlay() {
        isModalOpen = false;
    }

    $: if (form?.success && !form?.error) {
        isModalOpen = true;
        form.success = false;
    }
</script>

<div class="contacts">
    <div class="container">
        <h1 class="title">Давайте обсудим проект</h1>
        
        <p class="subtitle">Мы свяжемся с вами, а вы расскажите о своих идеях</p>
    
        <div class="content">
            <form method="POST" 
                  class="form" 
                  use:enhance
                  >
                
                <div class="field name">
                    <label for="name">ФИО</label>
                    <input 
                        name="name" 
                        type="text" 
                        id="name" 
                        placeholder="Иванов Иван Иванович" 
                        value={form?.name || ""}
                        >

                    {#if form?.error && !form?.name}
                        <p class="error">Пожалуйста, укажите ФИО</p>
                    {/if}
                </div>
        
                <div class="field email">
                    <label for="email">Email</label>
                    <input 
                        name="email" 
                        type="email" 
                        id="email" 
                        placeholder="you@company.com"
                        value={form?.email || ""}
                        >

                    {#if form?.error && !form?.email}
                        <p class="error">Пожалуйста, укажите email</p>
                    {/if}
                </div>
        
                <div class="field number">
                    <label for="number">Номер телефона</label>
                    <input 
                        name="number" 
                        type="number" 
                        id="number" 
                        placeholder="+7 (999) 000-55-88" 
                        value={form?.number || ""}
                        >

                    {#if form?.error && !form?.number}
                        <p class="error">Пожалуйста, укажите номер</p>
                    {/if}
                </div>
        
                <div class="field message">
                    <label for="message">Сообщение</label>
                    <textarea name="message" id="message" placeholder="Введите вообщение...">{form?.message || ""}</textarea>
                </div>

                <div class="large-button">
                    <Button icon accent fullWidth submit
                        text="Отправить сообщение"
                        />
                </div>
            </form>
        </div>
    </div>

    <div class="location">
        <div class="container">
            <div class="location-item geo">
                <p class="point">Месторасположение</p>
                <p class="description">Россия, Москва</p>
            </div>
    
            <div class="location-item adress">
                <p class="point">Где мы находимся?</p>
                <p class="description">Московская обл, с.Павловская Слобода
                    ул. Ленина</p>
            </div>
        </div>
    </div>

    <Modal 
        isOpen={isModalOpen}
        onClose={closeOverlay}
        />
</div>

<style lang="postcss">
    .contacts {
        text-align: center;
        margin: 100rem 0  110rem;

        .title {
            font-size: 48rem;
        }

        .subtitle {
            color: #535353;
            letter-spacing: 0.32rem;
            line-height: 25rem;
            margin-top: 28rem;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;

            .form {
                margin-top: 64rem;
                text-align: left;
                max-width: 384rem;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 18rem;

                .field {
                    display: flex;
                    flex-direction: column;
                    
                    label {
                        font-size: 13rem;
                        letter-spacing: 0.26rem;
                    }

                    input,
                    textarea {
                        border: 1rem solid #A6A6A6;
                        border-radius: 5rem;
                        color: #35353D;
                        margin-top: 9rem;
                        padding: 10rem 10rem;
                    }

                    input {
                        height: 34rem;
                    }

                    textarea {
                        height: 110rem;
                    }

                    .error {
                        color: rgba(255, 0, 0, 0.8);
                        font-size: 14rem;
                        margin-top: 5rem;
                    }
                }
            }

            .large-button {
                margin-top: 38rem;
                max-width: 387rem;
                width: 100%;
            }
        }

        .location {
            background-color: rgba(127, 255, 212, 0.2);
            height: 180rem;
            margin-top: 134rem;
            padding: 52rem 12rem 57rem;

            .location-item {
                display: flex;
                font-size: 12rem;
                justify-content: space-between;
                letter-spacing: 0.24rem;
                line-height: 25rem;

                .description {
                    color: #535353;
                    max-width: 276rem;
                    text-align: left;
                    width: 100%;
                }

                &.geo {
                    .point {
                        color: #1563FF;
                    }

                    .description {
                        position: relative;
                        line-height: 24rem;

                        &::before {
                            content: "";
                            background-image: url("/images/contacts/geo.svg");
                            height: 20rem;
                            left: -32rem;
                            position: absolute;
                            top: 0;
                            width: 20rem;
                        }
                    }
                }

                &.adress {
                    .point {
                        font-size: 32rem;
                        line-height: 36rem;
                    }

                    .description {
                        line-height: 19rem;
                    }
                }
            }

            .location-item + .location-item {
                margin-top: 11rem;
            }
        }
    }
</style>
