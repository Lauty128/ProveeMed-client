//----- Dependencies
import axios from 'axios';
import { toast  } from 'react-toastify';

//----- Models
import { categoryInterface, errorResponseInterface } from '../models'

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

    export async function getAll():Promise<categoryInterface[] | errorResponseInterface>{
       // Exucuting of the query
        const data = await instance('/categories')
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