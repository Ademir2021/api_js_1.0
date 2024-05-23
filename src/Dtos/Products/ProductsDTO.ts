import { IProduct } from "../../Interfaces/Product/Product";
import { ProductDAO } from "../../Entities/Product/ProductDAO";

const table = "products"
const msgAlreadyExists = 'Produto já existe'
const msgRecordSucess = 'Produto gravado com sucesso'
const msgProductNotFound = 'Produto não localiado'
const msgProductUpdatedSuccessfully = 'Produto atualizado com sucesso'

class ProductsDTO {

    private async findProduct(Product: IProduct) {
        const product = await new ProductDAO().selectOne(Product.id, table, 'id_product')
        return product
    };


    private async findProductName(Product: IProduct) {
        const product = await new ProductDAO().selectOneproduct(Product)
        return product
    };


    async saveProduct(Product: IProduct) {
        const product: any = await this.findProductName(Product)
        if (product[0]) {
            return ([msgAlreadyExists, product])
        } else {
            const product = await new ProductDAO().insert(Product)
            return ([msgRecordSucess, product])

        }
    };

    public async updateProduct(Product: IProduct) {
        const product: any = await this.findProduct(Product)
        if (product[0].id_product === Product.id) {
            const personUpdate = await new ProductDAO().update(Product)
            return (msgProductUpdatedSuccessfully)
        } else {
            return (msgProductNotFound)
        }
    };
}

export { ProductsDTO }