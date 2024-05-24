import { Router } from "express"
import { BrandsControllers } from "../Controllers/Brands/BrandsControlers";

const routeBrands = Router();
const brandsControllers = new BrandsControllers()


routeBrands.get('/brands', brandsControllers.findAll)


export { routeBrands }