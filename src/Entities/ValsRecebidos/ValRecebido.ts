import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";
import { ValRecebidoDAO } from "./ValRecebidoDAO"

class ValRecebido extends ValRecebidoDAO implements IValsRecebidos{
fk_conta = 0 //duplicatas
fk_venda = 0
fk_user = 0
valor = 0
data_recebimento = ""
constructor(id:number, fk_conta:number, fk_venda:number, fk_user:number, valor:number, data_recebimento:Date | string){
    super()
    this.id = id
    this.fk_conta = fk_conta
}

}

export {ValRecebido}