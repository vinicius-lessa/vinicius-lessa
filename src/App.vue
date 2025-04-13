<script setup>

import Header   from './components/Header.vue'
import Hero     from './components/Hero.vue';
import Stack    from './components/Stack.vue'
import About    from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact  from './components/Contact.vue'

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

    <section id="about">
        <About />
    </section>

    <section id="stack">
        <Stack />
    </section>

    <section id="projects">
        <Projects />
    </section>

    <section id="contact">
        <Contact />
    </section>
</template>

<style scoped>
</style>
