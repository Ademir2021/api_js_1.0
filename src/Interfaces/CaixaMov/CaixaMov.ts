export type TCaixaMov = {
    id:number  //id_caixa
    fkVal:number //fk_val
    data_recebimento: Date | string | any
    debito:number 
    credito:number 
    saldo:number
}