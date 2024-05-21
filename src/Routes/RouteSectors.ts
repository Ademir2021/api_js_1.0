import { Router } from "express"
import { ConttrollerSectors } from "../Controllers/Sectors/SectorsControllers";

const routeSectors = Router();
const conttrollerSectors = new ConttrollerSectors()

routeSectors.get('/sectors', conttrollerSectors.select)

export { routeSectors }