<script setup>
const props = defineProps({
    formToggle: Boolean
})

const emit = defineEmits(['changeToogle'])

</script>
<template>

    <Header />

    <div class="body">
        <div class="wrapper">
            <span class="icon-close">
                <ion-icon name="close-circle"></ion-icon>
            </span>

            <Transition>

                <FormLogin v-if="!formToggle" :formToggle="!formToggle" />

            </Transition>


            <Transition v-if="formToggle">
                <div class="form-box register" :class="{ 'active': formToggle }">
                    <h2>Регистрация</h2>
                    <form action="#">
                        <div class="input-box">
                            <span class="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" required>
                            <label>Электронная почта</label>
                        </div>
                        <div class="input-box">
                            <span class="icon">
                                <ion-icon name="lock"></ion-icon>
                            </span>
                            <input type="password" required>
                            <label>Пароль</label>
                        </div>
                        <div class="input-box">
                            <span class="icon">
                                <ion-icon name="last-name"></ion-icon>
                            </span>
                            <input type="text" required>
                            <label>Фамилия</label>
                        </div>
                        <div class="input-box">
                            <span class="icon">
                                <ion-icon name="first-name"></ion-icon>
                            </span>
                            <input type="text" required>
                            <label>Имя</label>
                        </div>
                        <div class="input-box">
                            <span class="icon">
                                <ion-icon name="patronymic"></ion-icon>
                            </span>
                            <input type="text" required>
                            <label>Отчество</label>
                        </div>
                        <button type="submit" class="login-btn">Войти</button>
                        <div class="login-register">
                            <p>Уже есть аккаунт? Войдите!
                                <span @click="$emit('changeToogle', formToggle)" class="login-link">
                                    Вход
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </Transition>
        </div>
    </div>
</template>
<style src="~/components/form/__form.css" lang="css"></style>