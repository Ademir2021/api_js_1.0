import { Router } from "express"
import { ConttrollerCities } from "../Controllers/Cities/CiitiesControllers";

const routeCities = Router();
const conttrollersCities = new ConttrollerCities()

routeCities.get('/on_city/:id', conttrollersCities.selectOnCity)
routeCities.get('/cities', conttrollersCities.select)

export { routeCities }