import { Router } from "express"
import { ConttrollersPagSeguro } from "../Controllers/PagSeguro/PagSeguroControllers";

const routePagSeguro = Router();
const conttrollersPagSeguro = new ConttrollersPagSeguro()

routePagSeguro.post('/pix', conttrollersPagSeguro.insertPix)
routePagSeguro.post('/boleto', conttrollersPagSeguro.insertBoleto)
routePagSeguro.post('/card', conttrollersPagSeguro.insertCard)
routePagSeguro.get('/publickey', conttrollersPagSeguro.publicKeyPagSeguro)

export { routePagSeguro }