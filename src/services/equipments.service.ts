//----- Models
import { equipmentInterface, filtersInterface } from '../models/data.model'

//----- utils
import { defineEquipmentsFilters } from '../utils/parameters.util'

//----- Variables
const URL =  import.meta.env.VITE_API_URL

interface responseInterface{
    page: number
    limit: number
    hasNextPage: boolean
    hasPrevPage: boolean
    total: number
    data: equipmentInterface[]
}

export async function getAll(page = 1, filters:filtersInterface):Promise<responseInterface | null>{
    const filtersString = defineEquipmentsFilters(filters);
    
    try{
        const data:Promise<responseInterface> = 
                await fetch(URL + `api/equipments?page=${page}`+ filtersString).then(res => res.json())
    
        return await data;
    }
    catch(err){
        console.log(err);
        return null
    }
}

export async function getOne(id:number):Promise<equipmentInterface>{
    const data:Promise<equipmentInterface> = 
            await fetch(URL + 'api/equipments/' + id).then(res => res.json())

    return await data;
}

export async function getAllByProviders(id:number):Promise<responseInterface>{
    const data:Promise<responseInterface> = 
            await fetch(URL + 'api/providers/' + id + '/equipments').then(res => res.json())

    return await data;
}
