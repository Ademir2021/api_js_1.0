import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

class DespesasControllers extends DAO {
    async findAll(request: Request, response: Response) {
        const despesas = await new DespesasControllers().select('despesas', 'id')
        response.json(despesas)
    };
}

export { DespesasControllers }