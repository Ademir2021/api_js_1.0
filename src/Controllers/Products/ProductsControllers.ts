import { Request, Response } from "express"
import { IProduct } from "../../Interfaces/Product/Product"
import { Product } from "../../Entities/Product/Product"
import { ProductDAO } from "../../Entities/Product/ProductDAO"
import { ProductsDTO } from "../../Dtos/Products/ProductsDTO"

const table = Product.table
const msg = { msg: "Passed by ProductsControllers" }

class ProductsControllers{

    async saveProduct(request: Request, response: Response){
        const {id, name, valMax, valMin, fkBrand, fkSector, barCode, image}:IProduct = <IProduct>request.body
        const product:Product =  new Product(id, name, valMax, valMin, fkBrand, fkSector, barCode, image)
        const productDTOSave = await new ProductsDTO().handleSaveProduct(product)
        response.json([productDTOSave, msg, product])
    };

    async listProducts(request: Request, response: Response) {
        const product = await new ProductDAO().select(table, 'id_product')
        response.json(product)
    };

    async listProduct(request: Request, response: Response) {
        const { id }: IProduct = <IProduct>request.body
        const persons = await new ProductDAO().selectOne(id, table, 'id_product')
        response.json(persons)
    };

    async updateProduct(request: Request, response: Response) {
        const {id, name, valMax, valMin, fkBrand, fkSector, barCode, image}:IProduct = <IProduct>request.body
        const product:Product =  new Product(id, name, valMax, valMin, fkBrand, fkSector, barCode, image)
        const productDTOUpdate = await new ProductsDTO().handleUpdateProduct(product)
        response.json([productDTOUpdate, msg, product])
    };

    async deleteProduct(request: Request, response: Response) {
        const { id }: IProduct = <IProduct>request.body
        const deleteProduct = await new ProductDAO().delete(id, table, 'id_product')
        response.json(deleteProduct)
    };
}

export { ProductsControllers }