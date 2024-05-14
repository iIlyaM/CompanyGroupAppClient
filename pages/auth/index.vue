<script setup>
    const formToggle = ref(false)

    const toFormToggle = () => {
        formToggle.value = !formToggle.value
    }
</script>
<template>
    <div class="body">
        <div class="wrapper">
            <span class="icon-close">
                <ion-icon name="close-circle"></ion-icon>
            </span>

            <Transition>
                <FormLogin v-if="!formToggle" :formToggle="formToggle" @changeToogle="toFormToggle" />
            </Transition>
            <Transition>
                <FormRegister v-if="formToggle" :formToggle="formToggle" @changeToogle="toFormToggle" />
            </Transition>

        </div>
    </div>
</template>