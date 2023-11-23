//----> Hooks
import { create } from 'zustand';

//----> Services
import { getAll } from '../services/categories.service';

//----> Models
import { categoryInterface, errorResponseInterface } from '../models';

//----> Configurations
interface categories{
    data: categoryInterface[] | null
    isLoading: boolean
    error: errorResponseInterface | null

    load: () => void
}

//----> Initial state of the store
const initialState = {
    data:null,

    isLoading:true,
    error:null
}


export const useCategoriesStore = create<categories>((set,get) => ({
    // Initialize default values of the store
    ...initialState,

    // Load() is responsible of executing the query and store the results in this store
    load: async () => {

        // Exexute the query to the API with the specified page number and the filters defined in the store 
        const response = await getAll();
        
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
            data: response as categoryInterface[],
            error: null,
            isLoading: false
        });
        return
    },

}));