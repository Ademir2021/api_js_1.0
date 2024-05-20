import { IPerson, IAddress } from "../../Interfaces/Person/Person";
import { PersonDAO } from "./PersonDAO";

class Person extends PersonDAO implements IPerson {
    rg = ''
    cpf = ''
    phone = ''
    fkAddress = 0
    fkFilial = 0
    fkIdUser = 0
    fkCep = 0
    constructor(id: number, name: string, cpf: string, phone: string, fkaddress: number, fkidFilial: number, fkIdUser: number, fkCep: number) {
        super()
        this.id = id
        this.name = name
        this.cpf = cpf
        this.fkAddress = fkaddress
        this.fkFilial = fkidFilial
        this.fkIdUser = fkIdUser
        this.fkCep = fkCep
    }
}

class Address extends PersonDAO implements IAddress {
    number = ''
    bairro = ''
    fkCep = 0
    city = ''
    uf = ''
    cep = ''
    fkPerson = 0
    constructor(name:string ,  bairro:string, fkCep:number) {
        super()
        this.name = name //publicPlace
        this.bairro = bairro
        this.fkCep = fkCep
    }
}

new Person(0,"Ademir","888","888",0,0,0,0)
new Address("Rua","centro",0)