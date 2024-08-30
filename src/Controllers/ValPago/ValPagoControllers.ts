import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { IValsPagos } from "../../Interfaces/ValsPagos/ValsPagos";
import { ValPago } from "../../Entities/ValsPagos/ValPago";
import { ValPagoDAO } from "../../Entities/ValsPagos/ValPagoDAO";

class ValPagoControllers extends DAO{
    async registerValPago(request: Request, response: Response) {
        const resp: IValsPagos = <IValsPagos>request.body
        const valPago = new ValPago(
            resp.id_val, resp.fk_conta, resp.fk_compra, resp.fk_user,
            resp.valor, resp.data_recebimento, resp.descricao, resp.fk_person, resp.fk_despesa)
        const registerVal = await new ValPagoDAO().insert(valPago)
        // console.log(registerVal)
        return response.json(registerVal)
    };
    async findAll(request: Request, response: Response) {
        const vals = await new ValPagoControllers().select('vals_pagos', 'id_val')
        response.json(vals)
    };
}

export { ValPagoControllers }