import { IContaAreceber, IItens, ISale } from "../../Interfaces/Sale/Sale";
import { SaleDAO } from "./SaleDAO";

class Sale extends SaleDAO implements ISale {
    fkPerson = 0
    diskSale = 0
    fkFilial = 0
    fkUserId = 0
    itens?: IItens[] = []
    contasReceber?: IContaAreceber[] = []
    constructor(fkPerson: number, diskSale: number, fkFilial: number, fkUserId: number, itens: IItens[], contasReceber: IContaAreceber[]) {
        super()
        this.fkPerson = fkPerson
        this.diskSale = diskSale
        this.fkFilial = fkFilial
        this.fkUserId = fkUserId
        this.itens = itens
        this.contasReceber = contasReceber
    }
}

export { Sale }