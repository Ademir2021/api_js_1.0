import { Router } from "express"
import { SectorsConttrollers } from "../Controllers/Sectors/SectorsControllers";

const routeSectors = Router();
const sectorsconttrollers = new SectorsConttrollers()

routeSectors.get('/sectors', sectorsconttrollers.findAll)

export { routeSectors }