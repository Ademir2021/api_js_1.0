import { Request, Response } from "express"
import { IProduct } from "../../Interfaces/Product/Product"
import { Product } from "../../Entities/Product/Product"
import { ProductDAO } from "../../Entities/Product/ProductDAO"
import { ProductsDTO } from "../../Dtos/Products/ProductsDTO"

const table = Product.table
const msg = { msg: "Passed by ProductsControllers" }

type TProduct = {
  id_product: number
  descric_product: string
  val_max_product: number
  val_min_product: number
  fk_brand: number
  fk_sector: number
  bar_code: string
  image: string
}

class ProductsControllers{

    async saveProduct(request: Request, response: Response){
        const {id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, bar_code, image}:TProduct = <TProduct>request.body
        const product:Product =  new Product(id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, bar_code, image)
        const productDTOSave = await new ProductsDTO().saveProduct(product)
        response.json(productDTOSave)
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
        const {id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, bar_code, image}:TProduct = <TProduct>request.body
        const product:Product =  new Product(id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, bar_code, image)
        const productDTOUpdate = await new ProductsDTO().updateProduct(product)
        response.json(productDTOUpdate)
    };

    async deleteProduct(request: Request, response: Response) {
        const { id }: IProduct = <IProduct>request.body
        const deleteProduct = await new ProductDAO().delete(id, table, 'id_product')
        response.json(deleteProduct)
    };
}

export { ProductsControllers }