export type IValsRecebidos = {
    id_val?: number | any
    fkConta: number
    fkVenda: number
    fkUser: number
    valor: number
    dataRecebimento: Date | string | any
    fkPerson:number
    name: string //descrição do pagamento
}