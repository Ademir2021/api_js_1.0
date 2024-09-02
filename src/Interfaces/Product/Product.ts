export type IProduct = {
    id:number; // id_product
    name:string; // descric_product
    valMax:number
    valMin:number
    fkBrand:number
    fkSector:number
    fk_un_med: number
    barCode:string
    image:string
    fk_classe: number
    fk_grupo_fiscal: number
    fk_tipo_prod:number
    ncm:string
}

export type IBrand = {
    id:number
    name:string
}

export type ISector = {
    id:number
    name:string
}