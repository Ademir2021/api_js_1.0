export type IValsPagos = {
    id_val: number
    fk_conta: number
    fk_compra: number
    fk_user: number
    valor: number
    data_recebimento: Date | any | null
    descricao:string
    fk_person:number
}