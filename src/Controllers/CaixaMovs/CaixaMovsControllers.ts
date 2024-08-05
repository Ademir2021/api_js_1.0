import { Request, Response } from "express"
// import { CaixaMov } from "../../Entities/CaixaMov/CaixaMov"
import { CaixaMovDAO } from "../../Entities/CaixaMov/CaixaMovDAO"

const table = CaixaMovDAO.table

class CaixaMovsControllers {
    async listCaixaMovs(request: Request, response: Response) {
        const product = await new CaixaMovDAO().select(table, 'id_caixa')
        response.json(product)
    };
}

export { CaixaMovsControllers }