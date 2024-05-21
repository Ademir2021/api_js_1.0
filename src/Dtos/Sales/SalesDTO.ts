import { ISale, IItens } from "../../Interfaces/Sale/Sale";
import { SaleDAO } from "../../Entities/Sale/SaleDAO";

const table = SaleDAO.table

class salesDTO {

    async handleFindUserSales(idUser:number){ // privilege Admin
        const findUserSales = await new SaleDAO().selectOne(idUser, table, "fk_name_user" )
        return ([findUserSales])
    };

   async handleRegisterSale(Sale:ISale){
        const registerSale = await new SaleDAO().insert(Sale)
        return ([registerSale])
    };
}

export {salesDTO}