<script setup>
import { useLanguage } from '../composables/useLanguage.js'
import LanguageSelector from './LanguageSelector.vue'

const { text } = useLanguage()

</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md py-4 z-50"
  >
    <div class="flex justify-between items-center max-w-6xl mx-auto px-4">
      <ul class="flex justify-center space-x-4 text-lg font-semibold text-gray-700 dark:text-gray-200 flex-1">
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#about">{{ text('header.about') }}</a>
        </li>
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#stack">{{ text('header.stack') }}</a>
        </li>
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#projects">{{ text('header.projects') }}</a>
        </li>
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#contact">{{ text('header.contact') }}</a>
        </li>
      </ul>
      
      <LanguageSelector />
    </div>
  </header>
</template>

<style scoped></style>
