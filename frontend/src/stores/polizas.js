import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import PolizasAPI from '../api/PolizasApi'
export const usePolizasStore = defineStore('polizas', () => {

    const polizas = ref([])
    onMounted(async () =>{ 
        try{
            const { data } = await PolizasAPI.all()
            polizas.value = data
        } catch(error) {
            console.log(error)
        }
    })

    return { polizas }
})