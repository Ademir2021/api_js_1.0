export type TCaixaMov = {
    id_caixa:number
    fk_val:number
    data_recebimento: Date | string 
    debito:number 
    credito:number 
    saldo:number
}