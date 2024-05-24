import { Router } from "express"
import { CitiesControllers } from "../Controllers/Cities/CiitiesControllers";

const routeCities = Router();
const citiesControllers = new CitiesControllers()

routeCities.get('/on_city/:id', citiesControllers.selectOnCity)
routeCities.get('/cities', citiesControllers.select)

export { routeCities }