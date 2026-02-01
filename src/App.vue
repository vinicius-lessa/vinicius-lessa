<script setup>
import { useLanguage } from './composables/useLanguage.js'
import Header   from './components/Header.vue'
import Hero     from './components/Hero.vue';
import Stack    from './components/Stack.vue'
import About    from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact  from './components/Contact.vue'

const { text } = useLanguage()

</script>

<template>
    <header>
        <Header />
    </header>

    <section id="hero">
        <Hero :name="'Vinícius Lessa'" :profession="text('hero.profession')" :greeting="text('hero.greeting', { profession: text('hero.profession') })" :callToAction="text('hero.callToAction')"/>
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
