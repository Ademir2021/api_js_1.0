import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";
import { ValRecebidoDAO } from "./ValRecebidoDAO"

class ValRecebido extends ValRecebidoDAO implements IValsRecebidos {
    fkConta = 0 //duplicatas
    fkVenda = 0
    fkUser = 0
    valor = 0
    dataRecebimento: Date | string
    constructor(id: number, fkConta: number, fkVenda: number, fkUser: number, valor: number, dataRecebimento: Date | string) {
        super()
        this.id = id
        this.fkConta = fkConta
        this.fkVenda = fkVenda
        this.fkUser = fkUser
        this.valor = valor
        this.dataRecebimento = dataRecebimento
    }
}

export { ValRecebido }