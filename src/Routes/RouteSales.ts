import {Router} from "express"
import { SalesControllers } from "../Controllers/Sales/SalesControllers"

const routerSales =  Router()
const salesControllers = new SalesControllers()

routerSales.post('/sale_register', salesControllers.registerSale)

export { routerSales }