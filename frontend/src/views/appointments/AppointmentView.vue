<script setup>
   import SelectedPoliza from '../../components/SelectedPoliza.vue'
   import { useAppointmentsStore } from '../../stores/appointments'

   const appointments = useAppointmentsStore()
</script>

<template>
  <h2 class="text-4xl font-extrabold text-black">Poliza de Seguros</h2>
  <p class="text-black text-lg">A Continuación se le muestra una lista sus polizas</p>

  <h3 class="text-3xl font-extrabold text-black">Polizas</h3>

  <p v-if="appointments.noPolizasSelected" 
  class="text-black text-2xl text-center">No hay polizas Seleccionadas</p>

  <div v-else class="grid gap-5">
    <SelectedPoliza
        v-for="poliza in appointments.polizas"
        :key="poliza._id"
        :poliza="poliza"

    />
  </div>

</template>


