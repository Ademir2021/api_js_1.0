import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ValRecebido } from "../../Entities/ValsRecebidos/ValRecebido";
import { ValRecebidoDAO } from "../../Entities/ValsRecebidos/ValRecebidoDAO";
import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";

class ValRecebidoControllers extends DAO {
    async registerValRecebido(request: Request, response: Response) {
        const resp: IValsRecebidos = <IValsRecebidos>request.body
        const valRecebido = new ValRecebido(
            resp.id_val, resp.fk_conta, resp.fk_venda, resp.fk_user,
            resp.valor, resp.data_recebimento, resp.descricao, resp.fk_person)
        const registerVal = await new ValRecebidoDAO().insert(valRecebido)
        return response.json(registerVal)
    };
    async findAll(request: Request, response: Response) {
        const vals = await new ValRecebidoControllers().select('vals_recebidos', 'id_val')
        response.json(vals)
    };
}

export { ValRecebidoControllers }