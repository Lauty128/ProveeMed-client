//----- Dependencies
import axios from 'axios';
import { toast  } from 'react-toastify';

//----- Models
import { fullProviderInterface, providerInterface, 
    filtersInterface, errorResponseInterface } from '../models'

//----- utils
import { generateParams } from '../utils/parameters.util'

//-----> Variables
const URL =  import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_API_TOKEN;

//-----> Configurations
    const instance = axios.create({
        baseURL: URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': TOKEN
        }
    })
    interface responseInterface{
        page: number
        limit: number
        hasNextPage: boolean
        hasPrevPage: boolean
        total: number
        data: providerInterface[]
    }

export async function getAll(page:number, filters:filtersInterface):Promise<responseInterface | errorResponseInterface>{
    // This function returns a string that is used in the url for adding the parameters
    const params = generateParams(filters, page);
    
    // Exucuting of the query
    const data = await instance('/providers',{
        // Query type
        method:'GET',
        // Parameters 
        params
    })
    .then(response => response.data)
    .catch(response => {
        // The error response is in distint path that the success response
        const message = (response.response)
            ? response.response.data as errorResponseInterface
            : response.message as string;

        // An error message is created in the screen
        if(typeof message != 'string'){
            toast.error(message.user_error_title.es);
        }
        else{
            toast.error(message);
        }

        // The error message is returned
        return message
    })

    // How the error is handled in the API, Here try&catch don't is used
    return await data;
}

export async function getOne(id:number):Promise<fullProviderInterface | errorResponseInterface>{
     // Exucuting of the query
     const data = await instance('/providers/'+ id ,{
        // Query type
        method:'GET'
    })
    .then(response => response.data)
    .catch(response => response.response.data)
    
    // How the error is handled in the API, Here try&catch don't is used
    return await data;
}

export async function getAllByEquipment(id:number):Promise<responseInterface | errorResponseInterface>{
     // Exucuting of the query
     const data = await instance('/equipments/'+id+'/providers',{
        // Query type
        method:'GET',
    })
    .then(response => response.data)
    .catch(response => response.response.data)

    // How the error is handled in the API, Here try&catch don't is used
    return await data;
}
