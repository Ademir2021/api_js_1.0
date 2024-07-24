import { Router } from "express"
import { ContasReceberControllers } from "../Controllers/ContasReceber/ContasReceberControllers"

const routeContasReceber = Router()
const contasReceberControllers = new ContasReceberControllers()

routeContasReceber.get('/contas_receber', contasReceberControllers.findAllContasReceber);
routeContasReceber.put('/contas_receber', contasReceberControllers.updateContasReceber);
export {routeContasReceber}