<template>
  <div class="flex flex-col justify-center h-screen bg-gray-100 dark:bg-gray-700">
    <div class=
      "max-w-[900px] mx-auto grid p-5 gap-5
      md:grid-cols-3
      bg-gray-800 rounded-lg shadow-md"
    >
    <div class="md:col-span-1 flex justify-center items-center px-5">
      <img src="/assets/images/profile.jpg" alt="Foto de Vinícius Lessa" class="w-50 h-50 md:w-80 md:h-80 object-contain"/>
    </div>
    <div class="md:col-span-2 flex flex-col gap-8">
      <div>
        <h1 class="text-gray-300 text-4xl pb-2 font-bold">Sobre Mim</h1>
        <p class="text-gray-300 text-xl">
          Meu nome é Vinícius Lessa, sou desenvolvedor web e estou sempre em busca de novos desafios e aprendizados.
        </p>
      </div>

      <div>
        <h3 class="text-gray-300 text-4xl pb-2 font-bold">Formação</h3>
        <p class="text-gray-300 text-xl">Graduação em Sistemas de Informação - Universidade de São Paulo</p>
        <a href="./docs/diploma.pdf" target="_blank" class="text-blue-500 hover:underline">Ver Diploma</a>
      </div>

      <div>
        <h3 class="text-gray-300 text-4xl pb-2 font-bold">Profissão</h3>
        <p class="text-gray-300 text-xl">Desenvolvedor Full Stack</p>
        <a href="./docs/cv.pdf" target="_blank" class="text-blue-500 hover:underline">Ver Resumo</a>
      </div>
    </div>
    </div>
  </div>
</template>