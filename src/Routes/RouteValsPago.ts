import { Router } from "express"
import { ValPagoControllers } from "../Controllers/ValPago/ValPagoControllers"

const routerValsPago = Router()
const valPagoControllers = new ValPagoControllers()

routerValsPago.post('/val_pago', valPagoControllers.registerValPago)
routerValsPago.post('/vals_pagos_list', valPagoControllers.findAllList)

export { routerValsPago }