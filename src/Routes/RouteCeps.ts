import { Router } from "express"
import { CepsControllers } from "../Controllers/Ceps/CepsControllers";

const routeCeps = Router();
const cepsControllers = new CepsControllers()

routeCeps.get('/ceps', cepsControllers.select)
routeCeps.post('/ceps', cepsControllers.insert)

export { routeCeps }