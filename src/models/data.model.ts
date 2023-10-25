//------- Pagination
export interface paginationInterface{
    page: Number
    limit: Number
    total: Number
    hasNextPage: Boolean
    hasPrevPage: Boolean
}

//------- Filters
export interface filtersInterface{
    category: number
    word: string
    order?: string
}
