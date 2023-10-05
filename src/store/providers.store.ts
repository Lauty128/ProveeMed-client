//----> Hooks
import { create } from 'zustand';

//----> Services
import { getAll } from '../services/providers.service';

//----> Models
import { paginationInterface, providerInterface } from '../models/data.model';

//----> Configurations
interface equipments extends paginationInterface {
    data: providerInterface[] | never[]
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


export const useProvidersStore = create<equipments>((set,get) => ({
    // Inicializar valores por defecto definidos anteriormente
    ...initialState,

    load: async (page?:number) =>{
        const response = await getAll(page || 1);
        //console.log(response);
        if(response){
            set({
                ...response,
                isLoading: false
            });
            return
        }
       
        set({
            ...get(),
            isLoading:false 
        })
        
    },

}));