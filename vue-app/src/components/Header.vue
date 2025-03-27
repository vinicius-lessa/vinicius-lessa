<script setup>
defineProps({
welcomeMsg: {
    type: String,
    required: true,
},
})
</script>

<template>
    <header>
        <ul>
            <li><a href="#welcome">Welcome</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <p>{{ welcomeMsg }}</p>
    </header>
</template>

<style scoped>
</style>