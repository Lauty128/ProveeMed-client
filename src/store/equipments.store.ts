//----> Hooks
import { create } from 'zustand';

//----> Services
import { getAll } from '../services/equipments.service';

//----> Models
import { paginationInterface, equipmentInterface } from '../models/data.model';

//----> Configurations
interface providers extends paginationInterface {
    data: equipmentInterface[] | never[]
    isLoading: boolean

    load: (page?:number) => void
}

const initialState = {
    page:0,
    limit:0,
    total: 0,
    hasPrevPage:false,
    hasNextPage:false,
    data:[],

    isLoading:true
}


export const useEquipmentsStore = create<providers>((set,get) => ({
    // Inicializar valores por defecto definidos anteriormente
    ...initialState,

    load: async (page?: number) => {
        const response = await getAll(page || 1);

        if(response){
            set({
                ...response,
                isLoading: false
            });
        }
        else{
            set({
               ...get(),
               isLoading:false 
            })
        }
    },

}));