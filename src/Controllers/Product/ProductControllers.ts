import { Request, Response } from "express"
import { IProduct, IListProductQuery} from "../../Interfaces/Product/Product"
import { Product } from "../../Entities/Product/Product"
import { ProductDAO } from "../../Entities/Product/ProductDAO"
import { ProductsDTO } from "../../Dtos/Products/ProductsDTO"
import { ProductsServices } from "../../Services/Products/ProductsServices"
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



class ProductControllers extends DAO{

    async saveProduct(request: Request, response: Response){
        const resp:TProduct = <TProduct>request.body
        const product:Product =  new Product(resp.id_product, resp.descric_product, resp.val_max_product,
            resp.val_min_product, resp.fk_brand, resp.fk_sector, resp.fk_un_med, resp.bar_code, resp.image,
            resp.fk_classe, resp.fk_grupo_fiscal, resp.fk_tipo_prod, resp.ncm)
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

    async listProductParam(request:Request, response: Response) {
        const { id } = request.params
        response.json(id)
    };

    async listProductQuery(request:Request, response: Response) {
        const list:IListProductQuery | any = request.query
        const resp:ProductDAO = await new ProductsServices().listProductQuery(list)
        // console.log('Chegou no Controlador')
        response.json(resp)
    };

    async updateProduct(request: Request, response: Response) {
        const resp:TProduct = <TProduct>request.body
        const product:Product =  new Product(resp.id_product, resp.descric_product, resp.val_max_product,
            resp.val_min_product, resp.fk_brand, resp.fk_sector, resp.fk_un_med, resp.bar_code, resp.image,
            resp.fk_classe, resp.fk_grupo_fiscal, resp.fk_tipo_prod, resp.ncm)
        const productDTOUpdate = await new ProductsDTO().updateProduct(product)
        response.json(productDTOUpdate)
    };

    async deleteProduct(request: Request, response: Response) {
        const { id }: IProduct = <IProduct>request.body
        const deleteProduct = await new ProductDAO().delete( table, id, 'id_product')
        response.json(deleteProduct)
    };

    async findAllUnMeds(request: Request, response: Response) {
        const uniMeds = await new ProductControllers().select('un_meds', 'id_un')
        response.json(uniMeds)
    };
}

export { ProductControllers }