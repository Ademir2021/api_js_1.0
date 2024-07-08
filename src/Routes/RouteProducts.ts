import { Router } from 'express'
import { ProductsControllers } from '../Controllers/Products/ProductsControllers'

const routerProducts = Router()
const productsControlers = new ProductsControllers()

routerProducts.post('/products_list', productsControlers.listProducts)
routerProducts.post('/product_list', productsControlers.listProduct)
routerProducts.post('/product', productsControlers.saveProduct)
routerProducts.put('/product_update', productsControlers.updateProduct)
routerProducts.delete('/product_delete', productsControlers.deleteProduct)

routerProducts.get('/un_med', productsControlers.findAllUnMeds)

export {routerProducts}