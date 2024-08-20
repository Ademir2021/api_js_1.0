import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

class ValPagoControllers extends DAO{

    async findAll(request: Request, response: Response) {
        const vals = await new ValPagoControllers().select('vals_pagos', 'id_val')
        response.json(vals)
    };

}

export { ValPagoControllers }