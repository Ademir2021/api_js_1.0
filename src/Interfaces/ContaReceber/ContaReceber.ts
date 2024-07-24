export type IContaAreceber = {
    id?: number | any
    fkFilial: number
    tipo: any
    fkVenda: number
    fkUser:number
    parcela: any
    valor: number | any  //numeric 13 ,3
    multa: number | any//numeric 8, 4
    juros: number | any //numeric 8, 4
    desconto:number | any //numeric 13, 3
    emissao:Date |  string | any 
    vencimento:Date | string | any
    saldo:number | any //numeric 13,3
    pagamento:Date | string  | any
    recebimento: number | any
}