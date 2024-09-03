import { Request, Response } from "express"
import { IItens} from "../../Interfaces/Sale/Sale"
import { Sale } from "../../Entities/Sale/Sale"
import { salesDTO } from "../../Dtos/Sales/SalesDTO"
import { SaleDAO } from "../../Entities/Sale/SaleDAO"
import { IUser } from "../../Interfaces/User/User"
import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber"

type TSale = {
  filial: number
  user: {
    user_id: number
    user_name: string
  }
  person: {
    fk_name_pers: number
    name_pers: string
    cpf_pers: string
    phone_pers: string
    address: {
      address_pers: string
      bairro_pers: string
      fk_cep: number
      name_city: string
      uf: string
      num_cep: string
    }
  }
  disc_sale: number
  tItens: number
  tNote: number
  paySale: number
  dinheiro:number
  itens: IItens[]
  duplicatas:IContaAreceber[]
}

class SalesControllers {

  async registerSale(request: Request, response: Response) {
    const sale_: TSale = <TSale>request.body
    const sale: Sale = new Sale(sale_.person.fk_name_pers, sale_.disc_sale, sale_.filial, sale_.user.user_id, sale_.tItens, sale_.paySale, sale_.dinheiro, sale_.itens, sale_.duplicatas)
    const registerSaleDTO = await new salesDTO().registerSale(sale)
    response.json([registerSaleDTO])
  };

  async findUserSale(request: Request, response: Response) {
    const { id, privilege }: IUser = <IUser>request.body[0]
    const sales = await new salesDTO().listSalesByLoggedInUser(id, privilege)
    response.json(sales)
  };

  async findSale(request: Request, response: Response) {
    const findUserSale = await new SaleDAO().select("sales", "id_sale")
    response.json(findUserSale)
  };
  
}

export { SalesControllers }