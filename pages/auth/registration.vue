<template>
    <Registration @changeToogle="toFormToggle" />
    <Login @changeToogle="toFormToggle" />
</template>

<script setup>
import * as ion from 'ionicons';
import Registration from '~/components/form/registration.vue';
import Login from '~/components/form/login.vue';

definePageMeta({
    layout: 'logged'
})

const formToggle = ref(false)

const toFormToggle = () => {
    formToggle.value = !formToggle.value
}



</script>