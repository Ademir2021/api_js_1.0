import { IProduct } from "../../Interfaces/Product/Product";
import { ProductDAO } from "../../Entities/Product/ProductDAO";

const table = "products"
const msgAlreadyExists = { msg: 'Product already exists - Passed by DTO' }
const msgRecordSucess = { msg: 'Record com sucess - Passed by DTO' }
const msgProductNotFound = { msg: 'Product not found' }
const msgProductUpdatedSuccessfully = { msg: 'Product updated successfully' }

class ProductsDTO{

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
            return ([msgRecordSucess, product, res])

        }
    };

    public async handleUpdateProduct(Product: IProduct) {
        const product: any = await this.findProduct(Product)
        if (product[0].id_product === Product.id) {
            const res = await this.updateProduct(Product)
            return ([msgProductUpdatedSuccessfully, "Find:", product, "Resp:", res])
        } else {
            return ([msgProductNotFound, product])
        }
    };
}

export {ProductsDTO}