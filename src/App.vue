<script setup>

// import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

const nowInSaoPaulo = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
const hour = new Date(nowInSaoPaulo).getHours();
const welcomeMsg = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";

</script>

<template>
    <Header v-bind:welcomeMsg="welcomeMsg" />

    <main>
        <Main />
    </main>
</template>

<style scoped>
</style>
