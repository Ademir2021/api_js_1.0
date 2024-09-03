import { Router } from 'express'
import { ProductControllers } from '../Controllers/Product/ProductControllers'

const routerProducts = Router()
const productControlers = new ProductControllers()

routerProducts.post('/products_list', productControlers.listProducts)
routerProducts.post('/product_list', productControlers.listProduct)
routerProducts.post('/product', productControlers.saveProduct)
routerProducts.put('/product_update', productControlers.updateProduct)
routerProducts.delete('/product_delete', productControlers.deleteProduct)

routerProducts.get('/un_med', productControlers.findAllUnMeds)

export {routerProducts}