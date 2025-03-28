<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen gap-y-4 bg-gray-100 dark:bg-gray-900">
        <!-- <img src="../assets/logo.png" alt="Logo" class="w-32 h-32 mb-4 rounded-full shadow-lg" /> -->
        <h1 class="text-gray-300 text-9xl">{{ name }}</h1>
        <h2 class="text-gray-300 text-6xl italic font-thin my-10">{{ profession }}</h2>
        <p class="text-gray-300">Olá, meu nome é {{ name }}, sou {{ profession }} e estou sempre em busca de novos desafios e aprendizados.</p>
        <p class="text-gray-300">Se você está procurando um desenvolvedor web, entre em contato comigo!</p>
        <a href="#contact" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">Entre em contato</a>
    </div> 
</template>