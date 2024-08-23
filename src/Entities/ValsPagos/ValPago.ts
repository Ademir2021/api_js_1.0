import { IValsPagos } from "../../Interfaces/ValsPagos/ValsPagos";
import { ValPagoDAO } from "./ValPagoDAO"

class ValPago extends ValPagoDAO implements IValsPagos {
    id_val: number
    fk_conta: number
    fk_compra: number
    fk_user: number
    valor: number
    data_recebimento: Date | any | null
    descricao: string
    fk_person: number
    fk_despesa: number;
    constructor(
        id_val: number,
        fk_conta: number,
        fk_compra: number,
        fk_user: number,
        valor: number,
        data_recebimento: Date | any | null,
        descricao: string,
        fk_person: number,
        fk_despesa:number
    ) {
        super()
        this.id_val = id_val
        this.fk_conta = fk_conta
        this.fk_compra = fk_compra
        this.fk_user = fk_user
        this.valor = valor
        this.data_recebimento = data_recebimento
        this.descricao = descricao
        this.fk_person = fk_person
        this.fk_despesa = fk_despesa
    }
}

export { ValPago }