export type IValsRecebidos = {
    id: number
    fkConta: number
    fkVenda: number
    fkUser: number
    valor: number
    dataRecebimento: Date | string | any
    fkPerson:number
    name: string //descrição do pagamento
}