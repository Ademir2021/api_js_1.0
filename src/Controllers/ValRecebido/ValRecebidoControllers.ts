import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ValRecebido } from "../../Entities/ValsRecebidos/ValRecebido";
import { ValRecebidoDAO } from "../../Entities/ValsRecebidos/ValRecebidoDAO";
// import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";

type TValsRecebidos = {
    id_val: number
    fk_conta: number
    fk_venda: number
    fk_user: number
    valor: number
    data_recebimento: Date | string
}

class ValRecebidoControllers extends DAO {

    async registerValRecebido(request: Request, response: Response) {
        const { id_val, fk_conta, fk_venda, fk_user, valor, data_recebimento }: TValsRecebidos = <TValsRecebidos>request.body
        const valRecebido = new ValRecebido(id_val, fk_conta, fk_venda, fk_user, valor, data_recebimento)
        const registerVal = await new ValRecebidoDAO().insert(valRecebido)
        // console.log(registerVal)
        return response.json(registerVal)
    };

    async findAll(request: Request, response: Response) {
        const vals = await new ValRecebidoControllers().select('vals_recebidos', 'id_val')
        response.json(vals)
    };
}

export { ValRecebidoControllers }