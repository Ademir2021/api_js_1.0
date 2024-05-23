import { ISale, IItens } from "../../Interfaces/Sale/Sale";
import { SaleDAO } from "../../Entities/Sale/SaleDAO";

const table = SaleDAO.table

class salesDTO {

    async handleFindUserSales(idUser:number){ // Cliente
        const sales = await new SaleDAO().selectOne(idUser, table, "fk_name_user" )
        return (sales)
    };

    async handleFindSales(){ // Admin Privilege == 2
        const sales = await new SaleDAO().select(table, "id_sale" )
        return (sales)
    };

   async handleRegisterSale(Sale:ISale){
        const registerSale = await new SaleDAO().insert(Sale)
        return ([registerSale])
    };
}

export {salesDTO}