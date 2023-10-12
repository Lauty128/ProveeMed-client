//------- Category
export interface categoryInterface{
    categoryID: Number
    name: string
}

//------- Providers
export interface providerInterface{
    providerID: Number
    name: string
}

export interface fullProviderInterface extends providerInterface{
    mail: string
    web: string
    address: string
    phone: string
    categories: categoryInterface[] 
}

//------- Equipments
export interface equipmentInterface{
    equipmentID: Number
    name: string
    categoryID: Number
    category?: string
}

export interface fullEquipmentInterface{
    umdns: string
    description: string
    price: number
    especifications: string
}

//------- Pagination
export interface paginationInterface{
    page: Number
    limit: Number
    total: Number
    hasNextPage: Boolean
    hasPrevPage: Boolean
}

export interface equipmentFiltersInterface{
    category: number
    word: string
    order?: string
}
