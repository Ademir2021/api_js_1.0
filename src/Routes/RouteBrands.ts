import { Router } from "express"
import { ConttrollerBrands } from "../Controllers/Brands/BrandsControlers";

const routeBrands = Router();
const conttrollersBrands = new ConttrollerBrands()


routeBrands.get('/brands', conttrollersBrands.select)


export { routeBrands }