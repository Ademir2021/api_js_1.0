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

    private async saveProduct(Product: IProduct) {
        const product = await new ProductDAO().insert(Product)
        return product
    };

    private async updateProduct(Product: IProduct) {
        const personUpdate = await new ProductDAO().update(Product)
        return personUpdate
    };

    async handleSaveProduct(Product: IProduct) {
        const product: any = await this.findProductName(Product)
        if (product[0]) {
            return ([msgAlreadyExists, product])
        } else {
            const res = await this.saveProduct(Product)
            return ([msgRecordSucess, res])

        }
    };

    public async handleUpdateProduct(Product: IProduct) {
        const product: any = await this.findProduct(Product)
        if (product[0].id_product === Product.id) {
            const res = await this.updateProduct(Product)
            return (msgProductUpdatedSuccessfully)
        } else {
            return (msgProductNotFound)
        }
    };
}

export { ProductsDTO }