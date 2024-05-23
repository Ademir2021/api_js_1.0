import { Request, Response } from "express"
import { IPerson, IAddress } from "../../Interfaces/Person/Person"
import { IUser } from "../../Interfaces/User/User"
import { Person, Address } from "../../Entities/Person/Person"
import { PersonsDTO } from "../../Dtos/Persons/PersonsDTO"
import { PersonDAO } from "../../Entities/Person/PersonDAO"

const table = Person.table
const msg = { msg: "Passed by PersonsControllers" }

type TPerson = {
    id_person: number //nao usa
    name_pers: string
    cpf_pers: string
    phone_pers: string
    address_pers: string
    bairro_pers: string
    fk_cep: number
    name_city?: string
    uf?: string
    num_cep?: string
    fk_name_filial: number
    fk_id_user: number
    fk_address: number
}

class PersonsControlles {

    async savePerson(request: Request, response: Response) {
        const { id_person, name_pers, cpf_pers, phone_pers, address_pers, bairro_pers, fk_cep, fk_name_filial, fk_id_user, fk_address }: TPerson = <TPerson>request.body
        const person: Person = new Person(id_person, name_pers, cpf_pers, phone_pers, fk_name_filial, fk_id_user, fk_address)
        const address: Address = new Address(id_person, address_pers, bairro_pers, fk_cep)
        const personDTOSave = await new PersonsDTO().savePerson(person, address)
        response.json(personDTOSave)
    };

    async listPersons(request: Request, response: Response) {
        const person = await new PersonDAO().select(table, 'id_person')
        response.json(person)
    };

    async listPerson(request: Request, response: Response) {
        const { id }: IPerson = <IPerson>request.body.person
        const persons = await new PersonDAO().selectOne(id, table, 'id_person')
        response.json(persons)
    };

    async listUserPersons(request: Request, response: Response) {
        const { id, privilege }: IUser = <IUser>request.body[0]
      const users = await new PersonsDTO().listPersonsByLoggedInUser(id, privilege)
      response.json(users)
    };

    async updatePerson(request: Request, response: Response) {
        const { id_person, name_pers, cpf_pers, phone_pers, address_pers, bairro_pers, fk_cep, fk_name_filial, fk_id_user, fk_address }: TPerson = <TPerson>request.body
        const person: Person = new Person(id_person, name_pers, cpf_pers, phone_pers, fk_name_filial, fk_id_user, fk_address)
        const address: Address = new Address(id_person, address_pers, bairro_pers, fk_cep)
        const personDTOUpdate = await new PersonsDTO().updatePerson(person, address)
        response.json(personDTOUpdate)
    };

    async deletePerson(request: Request, response: Response) {
        const { id }: IPerson = <IPerson>request.body.person
        const deletePerson = await new PersonDAO().delete(id, table, 'id_person')
        response.json(deletePerson)
    };
}

export { PersonsControlles }