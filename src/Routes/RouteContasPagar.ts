import { Router } from "express"
import { ContasPagarControllers } from "../Controllers/ContasPagar/ContasPagarControllers"

const routeContasPagar = Router()
const contasPagarControllers = new ContasPagarControllers()

routeContasPagar.get('/contas_pagar', contasPagarControllers.findAllContasPagar);
// routeContasPagar.put('/contas_receber', contasPagarControllers.updateContasPagar);
// routeContasPagar.post('/contas_receber', contasPagarControllers.saveContasPagar);
export {routeContasPagar}