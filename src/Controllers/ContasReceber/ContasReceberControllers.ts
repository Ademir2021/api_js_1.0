import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

class ContasReceberControllers extends DAO {
    async findAllContasReceber(request: Request, response: Response) {
        const contasReceber = await new ContasReceberControllers().select('contas_receber', 'id_conta')
        response.json(contasReceber)
    }
}

export { ContasReceberControllers }