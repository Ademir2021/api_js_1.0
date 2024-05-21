import { IItens, ISale } from "../../Interfaces/Sale/Sale";
import { SaleDAO } from "./SaleDAO";

class Sale extends SaleDAO implements ISale{
    fkPerson = 0
    diskSale = 0
    fkFilial = 0
    fkUserId = 0
    itens?: IItens[] | undefined = []
    constructor(fkPerson:number, diskSale:number, fkFilial:number, fkUserId:number, itens:IItens[] ){
        super()
        this.fkPerson = fkPerson
        this.diskSale = diskSale
        this.fkFilial = fkFilial
        this.fkUserId = fkUserId
        this.itens = itens
    }
}

export { Sale }