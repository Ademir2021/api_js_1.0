export type ISale = {
    id:number;
    createdAt?:Date
    fkPerson:number
    diskSale:number
    fkFilial:number
    fkUserId:number
    itens?:IItens []
    contasReceber?:IContaAreceber[]
}

export type IItens = {
    id?: number;
    item: number;
    name?: string; //descric
    amount: number;
    valor: number;
    tItem?: number;
    image?: string;

};

export type IContaAreceber = {
    id_conta: number 
    fk_filial: number
    tipo: string
    fk_venda: number
    fk_user:number
    parcela: number | string
    valor: number | any //numeric 13 ,3
    multa: number //numeric 8, 4
    juros: number //numeric 8, 4
    desconto: number //numeric 13, 3
    emissao:Date |  string | any 
    vencimento:Date | string | any
    saldo:number //numeric 13,3
    pagamento:Date | string  | any
    recebimento: number | null
    observacao:string | null
    fk_pagador:number
}