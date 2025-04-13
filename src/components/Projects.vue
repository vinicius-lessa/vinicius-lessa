<script setup>
import { projects } from '../data/projects.json';
import { onMounted } from 'vue';

onMounted(() => {
  const projectsContainer = document.querySelector('.projects-container');
  
  projectsContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default vertical scroll
            
    const scrollAmount = event.deltaY; //  could be '/ 2' or '/ 3' for slower scroll
    
    // Apply smooth scrolling using behavior: 'smooth'
    projectsContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
</script>

<template>
    <div 
        id="projects"
        class="flex flex-col items-center justify-center h-screen gap-y-4 bg-gray-100 dark:bg-gray-800"
    >
        <h2 class="text-gray-300 text-6xl">Projects</h2>
        <div class="projects-container overflow-x-auto flex space-x-4 py-4 px-6 w-full max-w-screen-xl">
            <div class="project-card flex-shrink-0 bg-gray-600 rounded-lg p-4 shadow-lg" v-for="project in projects" :key="project.id">
                <img :src="project.image" :alt="project.title" class="w-64 h-48 object-cover rounded" />
                <h3 class="text-gray-300 text-xl mt-2">{{ project.title }}</h3>
                <p class="text-gray-300">{{ project.description }}</p>
                <a :href="project.link" target="_blank" class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">View Project</a>
            </div>
        </div>    
    </div>
</template>

<style scoped>
.projects-container {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
    scroll-behavior: smooth;
}

.projects-container::-webkit-scrollbar {
    height: 8px;
}

.projects-container::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 4px;
}

.project-card {
    min-width: 280px;
    max-width: 280px;
}
</style>