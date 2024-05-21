import { Router } from "express"
import { ConttrollerCeps } from "../Controllers/Ceps/CepsControllers";

const routeCeps = Router();
const conttrollersCeps = new ConttrollerCeps()

// routeCep.get('/ceps/:id', conttrollersCeps.select)
routeCeps.get('/ceps', conttrollersCeps.select)
routeCeps.post('/ceps', conttrollersCeps.insert)

export { routeCeps }