export type IPerson = {
    id: number //id_person
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    rg:string
    cpf: string
    phone: string
    fkAddress: number
    fkFilial: number
    fkIdUser: number
}

export type IAddress = {
    id:number
    createdAt?: Date | string
    updatedAt?: Date | string
    name:string //publicPlace
    number: string //publicPlaceNum
    bairro: string
    fkCep: number
    city: string
    uf: string
    cep: string
}
