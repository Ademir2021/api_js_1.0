import { Router } from "express"
import { NFeControllers } from "../Controllers/NFe/NFeControllers";

const routeNFe = Router();
const nfeControllers = new NFeControllers()

routeNFe.get('/nfe', nfeControllers.findNFe)
// routeNFe.post('/ceps', nfeControllers.findNFe)

export { routeNFe }