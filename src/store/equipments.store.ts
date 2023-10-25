//----> Hooks
import { create } from 'zustand';
import "react-toastify/dist/ReactToastify.css";

//----> Services
import { getAll } from '../services/equipments.service';

//----> Models
import { paginationInterface, equipmentInterface, filtersInterface, errorResponseInterface } from '../models';

//----> Configurations
interface providers extends paginationInterface {
    data: equipmentInterface[] | never[]
    isLoading: boolean
    error: errorResponseInterface | null
    filters: filtersInterface

    load: (page:number) => void
    newFilters: (filters:filtersInterface) => void
    changeFilters: (filters:filtersInterface) => void
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
    isLoading:true,
    error:null
}


export const useEquipmentsStore = create<providers>((set,get) => ({
    // Initialize default values of the store
    ...initialState,

    // Load() is responsible of executing the query and store the results in this store
    load: async (page: number = 1) => {

        // Exexute the query to the API with the specified page number and the filters defined in the store 
        const response = await getAll(page, get().filters);

        // This condicion search if in the 'response' variable exists a property called 'error_message'
        if('error_message' in response){
            set({
                ...get(),
                isLoading:false,
                error: response
            })
            return
        }

        // This is executed if the query is successful
        set({
            ...response,
            error: null,
            isLoading: false
        });
        return
    },

    // This function change the filters in the store and executes the load() function  
    newFilters(filters:filtersInterface){
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