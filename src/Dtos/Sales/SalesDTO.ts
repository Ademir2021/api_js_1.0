import { ISale, IItens } from "../../Interfaces/Sale/Sale";
import { SaleDAO } from "../../Entities/Sale/SaleDAO";

const table = SaleDAO.table

class salesDTO {

    private async findSalesByLoggedInUser(idUser: number) { // Cliente
        const sales = await new SaleDAO().selectOne(idUser, table, "fk_name_user")
        return (sales)
    };

    private async findSalesAdmin() { // Admin Privilege == 2
        const sales = await new SaleDAO().select(table, "id_sale")
        return (sales)
    };

    async registerSale(Sale: ISale) {
        const registerSale = await new SaleDAO().insert(Sale)
        return ([registerSale])
    };

    async listSalesByLoggedInUser(id: number, privilege: number) {
        if (privilege == 2) {
            const sales = await this.findSalesAdmin()
            return sales
        } else {
            const sales = await this.findSalesByLoggedInUser(id)
            return sales
        }
    };
}

export { salesDTO }