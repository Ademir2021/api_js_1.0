import { Request, Response } from "express"
import { ISale, IItens } from "../../Interfaces/Sale/Sale"
import { Sale } from "../../Entities/Sale/Sale"
import { salesDTO } from "../../Dtos/Sales/SalesDTO"
import { SaleDAO } from "../../Entities/Sale/SaleDAO"

class SalesControllers {

  async  registerSale(request: Request, response: Response) {
        const { fkFilial, diskSale }: ISale = <ISale>request.body
        const { fkPerson }: ISale = <ISale>request.body.person
        const { fkUserId }: ISale = <ISale>request.body.user
        const itens: IItens[] = <IItens[]>request.body.itens
        const sale: Sale = new Sale(fkPerson, diskSale, fkFilial, fkUserId, itens)
        const registerSaleDTO = await new salesDTO().handleRegisterSale(sale)
        response.json([registerSaleDTO])
    };

  async findUserSale(request: Request, response:Response){
    const {fkUserId}:ISale = <ISale>request.body.user
    const findUserSale = await new salesDTO().handleFindUserSales(fkUserId)
    response.json(findUserSale)
  };

  async findSale(request: Request, response:Response){
    const findUserSale = await new SaleDAO().select("sales","id_sale")
    response.json(findUserSale)
  };

}

export { SalesControllers }