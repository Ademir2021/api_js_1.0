import { Request, Response } from "express"
import { NFe } from "../../Entities/NFe/NFe";
import { INFe } from "../../Interfaces/NFe/NFe";
import { NFeServices } from "../../Services/NFe/NFeServices";

class NFeControllers {
    async findNFe(request: Request, response: Response) {
        const res: INFe = new NFe(9, 1, 1, 2, [], 10.00, 2.00, 8.00)
        const resp = await new NFeServices().findNota(res)
        // console.log(resp)
        return response.json(resp)
    }
}

export { NFeControllers }