import { ISale, IItens } from "../../Interfaces/Sale/Sale";
import { SaleDAO } from "../../Entities/Sale/SaleDAO";


class salesDTO {
   async handleRegisterSale(Sale:ISale){
        const registerSale = await new SaleDAO().insert(Sale)
        return ([registerSale])
    }
}

export {salesDTO}