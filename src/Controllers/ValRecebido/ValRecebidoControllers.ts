import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ValRecebido } from "../../Entities/ValsRecebidos/ValRecebido";
import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";

type TValsRecebidos = {
    id_val: number
    fk_conta: number
    fk_venda: number
    fk_user: number
    valor: number
    data_recebimento: Date | string
}

class ValRecebidoControllers extends DAO{

    async registerValRecebido(request: Request, response: Response){
       const {id_val, fk_conta, fk_user, fk_venda, valor, data_recebimento}:TValsRecebidos = <TValsRecebidos>request.body 
       const valRecebido = new ValRecebido(id_val, fk_conta, fk_user, fk_venda, valor, data_recebimento)
    console.log(valRecebido)

    return response.json
    
    }
}

export { ValRecebidoControllers }