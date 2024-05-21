export type ISale = {
    id:number;
    createdAt?:Date
    fkPerson:number
    diskSale:number
    fkFilial:number
    fkUserId:number

    itens?:IItens []
}

export type IItens = {
    id: number;
    item?: number;
    name: string; //descric
    amount: number;
    valor: number;
    tItem: number;
    image?: string;

};