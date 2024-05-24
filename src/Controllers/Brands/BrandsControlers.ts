import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

class BrandsControllers extends DAO {
    async find(request: Request, response: Response) {
        const brands = await new BrandsControllers().select('brands', 'id_brand')
        response.json(brands)
    };
}

export { BrandsControllers }