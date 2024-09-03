import { IContaAreceber } from "../ContaReceber/ContaReceber";

export type ISale = {
    id:number
    fk_person:number
    disc_sale:number
    fk_filial:number
    fk_user:number
    tNote: number
    paySale: number
    dinheiro:number
    itens?:IItens []
    contasReceber?:IContaAreceber[]
}

export type IItens = {
    item: number
    amount: number
    valor: number
}