import { IPerson} from "../../Interfaces/Person/Person";
import { PersonDAO } from "./PersonDAO";

class Person extends PersonDAO implements IPerson {
    id_person: number
    // created_at?: Date | any
    // updated_at?: Date | any
    name_pers: string
    cpf_pers: string
    phone_pers: string
    address_pers: string
    num_address:string
    bairro_pers: string
    fk_cep: number
    // num_cep: string | undefined | any
    // name_city: string | undefined | any
    // uf: string | undefined
    fk_name_filial: number
    fk_id_user: number
    rg:string
    cnpj:string
    inscricao:string
    fantasia:string
    limit_cred:number
    fk_grupo:number
    constructor(
        id_person: number,
        // created_at?: Date | any
        // updated_at?: Date | any
        name_pers: string,
        cpf_pers: string,
        phone_pers: string,
        address_pers: string,
        num_address:string,
        bairro_pers: string,
        fk_cep: number,
        // num_cep: string | undefined | any
        // name_city: string | undefined | any
        // uf: string | undefined
        fk_name_filial: number,
        fk_id_user: number,
        rg:string,
        cnpj:string,
        inscricao:string,
        fantasia:string,
        limit_cred:number,
        fk_grupo:number

    ) {
        super()
        this.id_person = id_person
        this.name_pers = name_pers
        this.cpf_pers = cpf_pers
        this.phone_pers = phone_pers
        this.address_pers = address_pers
        this.num_address = num_address
        this.bairro_pers = bairro_pers
        this.fk_cep = fk_cep
        this.fk_name_filial = fk_name_filial
        this.fk_id_user = fk_id_user
        this.rg = rg
        this.cnpj = cnpj
        this.inscricao = inscricao
        this.fantasia = fantasia
        this.limit_cred = limit_cred
        this.fk_grupo = fk_grupo
     

    }
}

export { Person }