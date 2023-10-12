//----> Hooks
import { create } from 'zustand';

//----> Services
import { getAll } from '../services/equipments.service';

//----> Models
import { paginationInterface, equipmentInterface, equipmentFiltersInterface } from '../models/data.model';

//----> Configurations
interface providers extends paginationInterface {
    data: equipmentInterface[] | never[]
    isLoading: boolean
    filters: equipmentFiltersInterface

    load: (page?:number) => void
    newFilters: (filters:equipmentFiltersInterface) => void
}

//----> Initial state of the store
const initialState = {
    page:0,
    limit:0,
    total: 0,
    hasPrevPage:false,
    hasNextPage:false,
    data:[],

    filters:{
        word:'',
        category:-1
    },
    isLoading:true
}


export const useEquipmentsStore = create<providers>((set,get) => ({
    // Initialize store with default settings
    ...initialState,

    load: async (page?: number) => {
        const response = await getAll(page || 1, get().filters);

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

    newFilters(filters:equipmentFiltersInterface){
        set({
            ...get(),
            filters
         })
         get().load(1)
    }

}));