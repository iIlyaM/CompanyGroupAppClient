<template>

        <div class="body">
            <div class="wrapper">
                <span class="icon-close">
                    <ion-icon name="close-circle"></ion-icon>
                </span>
                <div class="form-box login">
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
                                <a href="#" class="register-link">
                                    Регистрация!
                                </a>
                            </p>
                        </div>
                    </form>
                </div>


                <div class="form-box register">
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
                                <a href="#" class="login-link">
                                    Вход
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('assets/office.jpg') no-repeat;
    background-size: cover;
    background-position: center;
}



.wrapper {
    position: relative;
    width: 400px;
    height: 400px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: height .2s ease;
}

.wrapper.active {
    height: 520px;
}

.wrapper .form-box {
    width: 100%;
    padding: 40px;
}

.wrapper .form-box.login {
    transition: transform .18s ease;
    transform: translateX(0);
}

.wrapper.active .form-box.login {
    transition: none;
    transform: translateX(-400px);
}

.wrapper .form-box.register {
    position: absolute;
    transition: none;
    transform: translateX(400px);
}

.wrapper.active .form-box.register {
    transition: transform .18s ease;
    transform: translateX(0);
}

.wrapper .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}

.form-box h2 {
    font-size: 2em;
    color: #162938;
    text-align: center;
}

.input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;
}

.input-box label {
    position: top;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #162938;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}

.input-box input-focus~label,
.input-box input-valid~label {
    top: -5px;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600;
    padding: 0 35px 0;
}

.input-box .icon {
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    line-height: 57px;
}

.btn {
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
}

.login-register {
    font-size: .9em;
    color: #162938;
    text-align: center;
    margin: 25px 0 10px;
}

.login-register p a {
    color: #162938;
    text-decoration: none;
}

.login-register p a:hover {
    text-decoration: underline;
}
</style>


<script setup>
import { onMounted } from 'vue';
import * as ion from 'ionicons';

let wrapper, loginLink, registerLink;

onMounted(() => {
    wrapper = document.querySelector('.wrapper');
    loginLink = document.querySelector('.login-link');
    registerLink = document.querySelector('.register-link');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
});
</script>