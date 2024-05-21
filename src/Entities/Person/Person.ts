import { IPerson, IAddress } from "../../Interfaces/Person/Person";
import { PersonDAO } from "./PersonDAO";


class Person extends PersonDAO implements IPerson {
    rg = ''
    cpf = ''
    phone = ''
    fkAddress = 0
    fkFilial = 0
    fkIdUser = 0
    constructor(id:number, name:string, cpf:string, phone:string, fkiFilial:number, fkIdUser:number, fkAddress:number) {
        super()
        this.id = id
        this.name = name
        this.cpf = cpf
        this.phone = phone
        this.fkAddress = fkAddress
        this.fkFilial = fkiFilial
        this.fkIdUser = fkIdUser

    }
}

class Address extends PersonDAO implements IAddress {
    number = ''
    bairro = ''
    fkCep = 0
    city = ''
    uf = ''
    cep = ''
    constructor(id:number, name:string, bairro:string, fkCep:number ) {
        super()
        this.id = id
        this.name = name //publicPlace
        this.bairro = bairro
        this.fkCep = fkCep
    }
    getId() {
        return this.id
    }
}

export { Person, Address }