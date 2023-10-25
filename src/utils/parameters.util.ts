//---- Models
import { filtersInterface } from "../models";

export function defineFilters(filters: filtersInterface):string{
    if(Object.length == 0) return '';

    let string = '&';
    if(filters.category != -1) string += 'category='+filters.category+'&';
    if(filters.word && filters.word.length > 0) string += 'word='+filters.word+'&';

    return string.slice(0,-1)
}

// This function returns an object with the parameters of the query to the API
export function generateParams(filters: filtersInterface, page: number){
    return {
        page,
        word: filters.word || null,
        category: (filters.category != -1) ? filters.category : null
    }
}
