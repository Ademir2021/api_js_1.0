import { IProduct } from '../Product/Product'

export type INFe = {
    id_nota: number
    fk_name_filial:number
    fk_name_user:number
    fk_name_pers: number
    items?: IProduct[]
    val_rec: number
    disc_sale: number
    total_sale: number
}