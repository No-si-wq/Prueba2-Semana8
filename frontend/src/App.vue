<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="md:flex h-screen">
    <div class="h-64 md:h-auto bg-cover  bg-center md:w-1/3">
      <img class="aspect-14/22 object-left-top" src="../img/polizas-seguro-proteccion-seguridad.avif">
    </div>
    <div class="m:w-2/3 px-10 py-5 min-h-full overflow-y-scroll">
      <RouterView />
    </div>
  </div>
</template>
