<script setup>

import Header from './components/Header.vue'
import Hero from './components/Hero.vue';
// import About from './components/About.vue'

// const nowInSaoPaulo = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
// const hour = new Date(nowInSaoPaulo).getHours();
// const welcomeMsg = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";

const name = "Vinícius Lessa";
const profession = "Desenvolvedor Web";

</script>

<template>
    <header>
        <Header />
    </header>

    <section id="hero">
        <Hero :name="name" :profession="profession" />
    </section>
</template>

<style scoped>
</style>
