import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

class UniMedsControllers extends DAO {
    async findAll(request: Request, response: Response) {
        const uniMeds = await new UniMedsControllers().select('un_meds', 'id_un')
        response.json(uniMeds)
    };
}

export { UniMedsControllers }