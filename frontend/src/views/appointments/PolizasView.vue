<script setup>
import PolizaItem from '../../components/PolizaItem.vue'
import { usePolizasStore } from '../../stores/polizas'
const store = usePolizasStore()
</script>

<template>
    <h2 class="text-4xl font-extrabold text-black mt-10">
        polizas</h2>
    <p class="text-black text-lg mt-5">A continuación elija al menos una poliza
    </p>
    
    <div class="grid grid-cols-2 gap-5 mt-5">
        <PolizaItem v-for="poliza in store.polizas" 
        :key="poliza._id"
        :poliza="poliza" />
    </div>
</template>



