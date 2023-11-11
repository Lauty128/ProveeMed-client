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
    specifications: string
}

//------- Backups
export interface backupsResponse{
    main: string
    files: string[]
}

//------- Error
export interface errorResponseInterface{
    http_code: number
    error_message: string
    user_error_title: {
        es: string
        en: string
    }
    user_error_message: {
        es: string
        en: string
    }
}

