import { TCaixaMov } from "../../Interfaces/CaixaMov/CaixaMov";
import { CaixaMovDAO } from "./CaixaMovDAO";

class CaixaMov extends CaixaMovDAO implements TCaixaMov {
    id_caixa = 0
    fk_val = 0
    data_recebimento: Date | string;
    debito = 0
    credito = 0
    saldo = 0
    constructor(
        id_caixa: number,
        fk_val: number,
        data_recebimento: Date | string,
        debito: number,
        credito: number,
        saldo: number
    ) {
        super();
        this.id_caixa = id_caixa
        this.fk_val = fk_val
        this.data_recebimento = data_recebimento
        this.debito = debito
        this.credito = credito
        this.saldo = saldo
    }
}

export { CaixaMov }