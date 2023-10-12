//---- Models
import { filtersInterface } from "../models/data.model";


export function defineEquipmentsFilters(filters: filtersInterface):string{
    if(Object.length == 0) return '';

    let string = '&';
    if(filters.category != -1) string += 'category='+filters.category+'&';
    if(filters.word && filters.word.length > 0) string += 'word='+filters.word+'&';

    return string.slice(0,-1)
}