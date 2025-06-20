<script setup>
    import { useAppointmentsStore } from '../stores/appointments'

    const appointments = useAppointmentsStore()
    defineProps({
        poliza: {
            type: Object
        }
    })
</script>

<template>
    <div
        class="p-5 space-y-5 rounded-lg cursor-pointer bg-white text-black"
        :class="appointments.isPolizaSelected(poliza._id) ? 'bg-blue-500 text-black' : 'bg-white'"
        @click="appointments.onPolizaSelected(poliza)"
    >
        <p class="text-2xl font-black">{{ poliza.numeroPoliza }}</p>
        <p class="text-4xl font-black text-blue-600">{{ poliza.tipoSeguro }}</p>
        <p class="text-4xl font-black text-blue-600">{{ poliza.titular }}</p>
        <p class="text-4xl font-black text-blue-600">{{ poliza.monto }}</p>
    </div>
</template>