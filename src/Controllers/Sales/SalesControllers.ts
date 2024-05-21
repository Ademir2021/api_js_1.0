import { Request, Response } from "express"
import { ISale, IItens } from "../../Interfaces/Sale/Sale"
import { Sale } from "../../Entities/Sale/Sale"

class SalesControllers {

    registerSale(request: Request, response: Response) {
        const { fkFilial, diskSale }: ISale = <ISale>request.body
        const { fkPerson }: ISale = <ISale>request.body.person
        const { fkUserId }: ISale = <ISale>request.body.user
        const itens: IItens[] = <IItens[]>request.body.itens
        const sale: Sale = new Sale(fkPerson, diskSale, fkFilial, fkUserId, itens)
        response.json([sale])
    };

}

export { SalesControllers }