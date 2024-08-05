import { TCaixaMov } from "../../Interfaces/CaixaMov/CaixaMov";
import { CaixaMovDAO } from "./CaixaMovDAO";

class CaixaMov extends CaixaMovDAO implements TCaixaMov {
    fkVal = 0
    data_recebimento: any;
    debito = 0
    credito = 0
    saldo = 0
    constructor(
        id: number,
        fkVal: number,
        data_recebimento: Date | string,
        debito: number,
        credito: number,
        saldo: number
    ) {
        super();
        this.id = id
        this.fkVal = fkVal
        this.data_recebimento = data_recebimento
        this.debito = debito
        this.credito = credito
        this.saldo = saldo
    }
}

export { CaixaMov }