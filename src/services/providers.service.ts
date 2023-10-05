//----- Models
import { fullProviderInterface, providerInterface } from '../models/data.model'

//----- Variables
const URL =  import.meta.env.VITE_API_URL

interface responseInterface{
    page: number
    limit: number
    hasNextPage: boolean
    hasPrevPage: boolean
    total: number
    data: providerInterface[]
}

export async function getAll(page=1):Promise<responseInterface | null>{
    try{
        const data:Promise<responseInterface> = 
                await fetch(URL + `api/providers?page=${page}`).then(res => res.json())

        return await data;
    }
    catch(err){
        console.log(err);
        return null
    }
}

export async function getOne(id:number):Promise<fullProviderInterface>{
    const data:Promise<fullProviderInterface> = 
            await fetch(URL + 'api/providers/' + id).then(res => res.json())

    return await data;
}

export async function getAllByEquipment(id:number):Promise<responseInterface>{
    const data:Promise<responseInterface> = 
            await fetch(URL + 'api/equipments/' + id + '/providers').then(res => res.json())

    return await data;
}
