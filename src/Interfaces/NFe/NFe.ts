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

export type IItems = [{
    fk_product: number
    descric_product: string
    amount_product: number
    val_product: number
    total_product: number
    imposto: {
        ICMS: {
            ICMS00: {
                orig: string
                CST: string
                modBC: string
                vBC: number
                pICMS: number
                vICMS: number

            }
        },
        PIS: {
            PISAliq: {
                CST: string
                vBC: number
                pPIS: number
                vPIS: number
            }
        },
        COFINS: {
            COFINSAliq: {
                CST: string
                vBC: number
                pCOFINS: number
                vCOFINS: number
            }
        }
    }
}]