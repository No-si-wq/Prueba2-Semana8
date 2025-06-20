import { ref, computed } from 'vue'
import { defineStore } from 'pinia' 

export const useAppointmentsStore = defineStore('appointments', () => {

    const polizas = ref([])

    function onPolizaSelected(poliza) {
        if(polizas.value.some(selectedPoliza => selectedPoliza._id === poliza._id)){
            polizas.value = polizas.value.filter(selectedPoliza => selectedPoliza._id !== poliza._id )
        }else{
            polizas.value.push(poliza)
        }
    }
    const isPolizaSelected = computed(() => {
        return (id) => polizas.value.some( poliza => poliza._id === id )
    })

    const noPolizasSelected = computed(() => polizas.value.length === 0)

    return{
        polizas,
        onPolizaSelected,
        isPolizaSelected,
        noPolizasSelected,
    }
})