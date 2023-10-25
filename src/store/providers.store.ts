//----> Hooks
import { create } from 'zustand';

//----> Services
import { getAll } from '../services/providers.service';

//----> Models
import { paginationInterface, providerInterface, filtersInterface } from '../models';

//----> Configurations
interface equipments extends paginationInterface {
    data: providerInterface[] | never[]
    isLoading: boolean
    error: boolean
    filters: filtersInterface

    load: (page:number) => void
    newFilters: (filters:filtersInterface) => void
    changeFilters: (filters:filtersInterface) => void
}

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
    isLoading:true,
    error:false
}


export const useProvidersStore = create<equipments>((set,get) => ({
    // Initialize default values of the store
    ...initialState,

    // Load() is responsible of executing the query and store the results in this store
    load: async (page:number = 1) =>{
        // Exexute the query to the API with the specified page number and the filters defined in the store 
        const response = await getAll(page, get().filters);
        
        // This condicion search if in the 'response' variable exists a property called 'error_message'
        if('error_message' in response){
            set({
                ...get(),
                isLoading:false,
                error: true
            })
            return
        }

        // This is executed if the query is successful
        set({
            ...response,
            isLoading: false
        });
        
    },

    // This function change the filters in the store and executes the load() function  
    newFilters(filters:filtersInterface) {
        get().changeFilters(filters)
        get().load(1)
    },

    // This function change the filters in the store without execute the load() function
    changeFilters(filters:filtersInterface){
        set({
            ...get(),
            filters
         })
    }

}));