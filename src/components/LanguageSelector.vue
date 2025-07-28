<script setup>
import { useLanguage } from "../composables/useLanguage.js";

const { locale, setLocale } = useLanguage();

const languages = [
  {
    code: "pt-BR",    
    name: "Português",
    flag: "./assets/icons/brazil.png",
  },
  {
    code: "en",
    name: "English",
    flag: "./assets/icons/united-states.png",
  },
];
</script>

<template>
  <div class="flex gap-1">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="setLocale(lang.code)"
      :class="[
        'p-2 rounded-md transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600',
        locale === lang.code
          ? 'ring-1 ring-blue-500 dark:ring-blue-300'
          : '',
      ]"
      :title="lang.name"
    >
      <img :src="lang.flag" alt="Flag" class="w-6 h-6 rounded-full" />
    </button>
  </div>
  <!-- <a href="https://www.flaticon.com/free-icons/united-states" title="united states icons">United states icons created by Freepik - Flaticon</a> -->
  <!-- <a href="https://www.flaticon.com/free-icons/brazil" title="brazil icons">Brazil icons created by Freepik - Flaticon</a> -->
</template>
