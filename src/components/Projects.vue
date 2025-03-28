<script setup>
// import { ref } from 'vue';
import { projects } from '../data/projects.js'; // Assuming you have a data file with project information
</script>

<template>
    <section id="projects">
        <h2>Projects</h2>
        <div class="projects-container">
            <div class="project-card" v-for="project in projects" :key="project.id">
                <img :src="project.image" :alt="project.title" />
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank">View Project</a>
            </div>
        </div>
    </section>
</template>