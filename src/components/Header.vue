<script setup>
import { useLanguage } from '../composables/useLanguage.js'
import LanguageSelector from './LanguageSelector.vue'

const { t } = useLanguage()

</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md py-4 z-50"
  >
    <div class="flex justify-between items-center max-w-6xl mx-auto px-4">
      <ul class="flex justify-center space-x-4 text-lg font-semibold text-gray-700 dark:text-gray-200 flex-1">
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#about">{{ t('header.about') }}</a>
        </li>
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#stack">{{ t('header.stack') }}</a>
        </li>
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#projects">{{ t('header.projects') }}</a>
        </li>
        <li class="text-gray-700 dark:text-gray-200 text-xl">
          <a href="#contact">{{ t('header.contact') }}</a>
        </li>
      </ul>
      
      <LanguageSelector />
    </div>
  </header>
</template>

<style scoped></style>
