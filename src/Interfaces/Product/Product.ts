export type IProduct = {
    id:number; // id_product
    createdAt?:Date
    updatedAt?:Date
    name:string; // descric_product
    valMax:number
    valMin:number
    fkBrand:number
    fkSector:number
    barCode:string
    image:string
}

export type IBrand = {
    id:number
    name:string
}

export type ISector = {
    id:number
    name:string
}