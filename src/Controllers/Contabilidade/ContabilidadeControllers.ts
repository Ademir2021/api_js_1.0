import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

class ContabilidadeControllers extends DAO {
    async findAllX(request: Request, response: Response) {
        const xxxx = await new ContabilidadeControllers().select('xxx', 'id_xx')
        response.json(xxxx)
    };
    async findAllXX(request: Request, response: Response) {
        const xxxx = await new ContabilidadeControllers().select('xxx', 'id_xx')
        response.json(xxxx)
    };
    async findAllXXX(request: Request, response: Response) {
        const xxxx = await new ContabilidadeControllers().select('xxx', 'id_xx')
        response.json(xxxx)
    };
};