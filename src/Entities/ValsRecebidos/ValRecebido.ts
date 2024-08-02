import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";
import { ValRecebidoDAO } from "./ValRecebidoDAO"

class ValRecebido extends ValRecebidoDAO implements IValsRecebidos {
    fkConta = 0 //duplicatas
    fkVenda = 0
    fkUser = 0
    valor = 0
    dataRecebimento: Date | string
    fkPerson: number
    constructor(
        id: number,
        fkConta: number,
        fkVenda: number,
        fkUser: number,
        valor: number,
        dataRecebimento: Date | string,
        name:string,
        fkPerson:number
        ) {
        super()
        this.id = id
        this.fkConta = fkConta
        this.fkVenda = fkVenda
        this.fkUser = fkUser
        this.valor = valor
        this.dataRecebimento = dataRecebimento
        this.name = name // Descriçao do pagamento
        this.fkPerson = fkPerson
    }
}

export { ValRecebido }