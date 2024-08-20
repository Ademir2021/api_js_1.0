import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO"

class ContasPagarControllers extends DAO{
    async findAllContasPagar(request: Request, response: Response) {
        const contasPagar = await new ContasPagarControllers().select('contas_pagar', 'vencimento')
        response.json(contasPagar)
    };
}

export { ContasPagarControllers }