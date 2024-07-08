import { Request, Response } from "express"
import { IProduct } from "../../Interfaces/Product/Product"
import { Product } from "../../Entities/Product/Product"
import { ProductDAO } from "../../Entities/Product/ProductDAO"
import { ProductsDTO } from "../../Dtos/Products/ProductsDTO"
import { DAO } from "../../Entities/DAO/DAO"

const table = Product.table

type TProduct = {
  id_product: number
  descric_product: string
  val_max_product: number
  val_min_product: number
  fk_brand: number
  fk_sector: number
  fk_un_med: number
  bar_code: string
  image: string
  fk_classe: number
  fk_grupo_fiscal: number
  fk_tipo_prod:number
  ncm:string
}

class ProductsControllers extends DAO{

    async saveProduct(request: Request, response: Response){
        const {id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, fk_un_med, bar_code, image, fk_classe, fk_grupo_fiscal, fk_tipo_prod, ncm}:TProduct = <TProduct>request.body
        const product:Product =  new Product(id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, fk_un_med, bar_code, image, fk_classe, fk_grupo_fiscal, fk_tipo_prod, ncm)
        const productDTOSave = await new ProductsDTO().saveProduct(product)
        response.json(productDTOSave)
    };

    async listProducts(request: Request, response: Response) {
        const product = await new ProductDAO().select(table, 'id_product')
        response.json(product)
    };

    async listProduct(request: Request, response: Response) {
        const { id }: IProduct = <IProduct>request.body
        const persons = await new ProductDAO().selectOne(table, id, 'id_product')
        response.json(persons)
    };

    async updateProduct(request: Request, response: Response) {
        const {id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, fk_un_med, bar_code, image,fk_classe, fk_grupo_fiscal, fk_tipo_prod, ncm}:TProduct = <TProduct>request.body
        const product:Product =  new Product(id_product, descric_product, val_max_product, val_min_product, fk_brand, fk_sector, fk_un_med, bar_code, image,fk_classe, fk_grupo_fiscal, fk_tipo_prod, ncm )
        const productDTOUpdate = await new ProductsDTO().updateProduct(product)
        response.json(productDTOUpdate)
    };

    async deleteProduct(request: Request, response: Response) {
        const { id }: IProduct = <IProduct>request.body
        const deleteProduct = await new ProductDAO().delete( table, id, 'id_product')
        response.json(deleteProduct)
    };

    async findAllUnMeds(request: Request, response: Response) {
        const uniMeds = await new ProductsControllers().select('un_meds', 'id_un')
        response.json(uniMeds)
    };
}

export { ProductsControllers }