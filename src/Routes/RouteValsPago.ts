import { Router } from "express"
import { ValPagoControllers } from "../Controllers/ValPago/ValPagoControllers"

const routerValsPago = Router()
const valPagoControllers = new ValPagoControllers()

routerValsPago.post('/val_pago', valPagoControllers.registerValPago)
routerValsPago.get('/vals_pagos', valPagoControllers.findAll)

export { routerValsPago }