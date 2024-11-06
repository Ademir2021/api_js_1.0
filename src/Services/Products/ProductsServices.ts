import { IListProductQuery } from "../../Interfaces/Product/Product";
import { ProductsDTO } from "../../Dtos/Products/ProductsDTO";
import { ProductDAO } from "../../Entities/Product/ProductDAO";

class ProductsServices {
    async listProductQuery(list:IListProductQuery) {
        const resp:ProductDAO = await new ProductsDTO().listProductQuery(list)
        // console.log('Passou pelo Service')
        return resp
    };
}

export { ProductsServices }