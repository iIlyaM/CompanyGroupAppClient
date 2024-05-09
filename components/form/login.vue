<script setup>
const props = defineProps({
    formToggle: Boolean
})

const emit = defineEmits(['changeToogle'])

</script>
<template>
        <div class="form-box login" :class="{ 'active': !formToggle }">
            <h2>Логин</h2>
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
                <button type="submit" class="login-btn">Войти</button>
                <div class="login-register">
                    <p>Нет аккаунта? Зарегистрируйтесь!
                        <span @click="$emit('changeToogle', formToggle)" class="register-link">
                            Регистрация!
                        </span>
                    </p>
                </div>
            </form>
        </div>
</template>
<style src="~/components/form/__form.css" lang="css"></style>