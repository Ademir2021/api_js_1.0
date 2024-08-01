import { Router } from "express"
import { ContasReceberControllers } from "../Controllers/ContasReceber/ContasReceberControllers"

const routeContasReceber = Router()
const contasReceberControllers = new ContasReceberControllers()

routeContasReceber.get('/contas_receber', contasReceberControllers.findAllContasReceber);
routeContasReceber.put('/contas_receber', contasReceberControllers.updateContasReceber);
routeContasReceber.post('/contas_receber', contasReceberControllers.saveContasReceber);
export {routeContasReceber}