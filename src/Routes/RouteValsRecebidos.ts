import { Router } from "express"
import { ValRecebidoControllers } from "../Controllers/ValRecebido/ValRecebidoControllers"

const routerValsRecebidos = Router()
const valRecebidoControllers = new ValRecebidoControllers()

routerValsRecebidos.post('/val_recebido', valRecebidoControllers.registerValRecebido)

export { routerValsRecebidos }