import { Router } from "express"
import { DespesasControllers } from "../Controllers/Despesas/DespesasControllers";

const routeDespesas = Router();
const despesasControllers = new DespesasControllers()
routeDespesas.get('/despesas', despesasControllers.findAll)

export { routeDespesas }