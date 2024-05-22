import { Request, Response } from "express"
import { IPerson, IAddress } from "../../Interfaces/Person/Person"
import { IUser } from "../../Interfaces/User/User"
import { Person, Address } from "../../Entities/Person/Person"
import { PersonsDTO } from "../../Dtos/Persons/PersonsDTO"
import { PersonDAO } from "../../Entities/Person/PersonDAO"

const table = Person.table
const msg = { msg: "Passed by PersonsControllers" }


class PersonsControlles {

    async savePerson(request: Request, response: Response) {
        const { id, name, cpf, phone, fkFilial, fkIdUser, fkAddress }: IPerson = <IPerson>request.body.person
        const person: Person = new Person(id, name, cpf, phone, fkFilial, fkIdUser, fkAddress)
        const { id: idAddress, name: publicPlace, bairro, fkCep }: IAddress = <IAddress>request.body.address
        const address: Address = new Address(idAddress, publicPlace, bairro, fkCep)
        const personDTOSave = await new PersonsDTO().handleSavePerson(person, address)
        response.json(personDTOSave)
    };

    async listPerson(request: Request, response: Response) {
        const person = await new PersonDAO().select(table, 'id_person')
        response.json(person)
    };

    async listPersons(request: Request, response: Response) {
        const { id }: IPerson = <IPerson>request.body.person
        const persons = await new PersonDAO().selectOne(id, table, 'id_person')
        response.json(persons)
    };

    async listUserPersons(request: Request, response: Response) {
        const  user:IUser[] = <IUser[]>request.body
        const id:number = user[0].id
        const persons = await new PersonDAO().selectOne(id, table, 'fk_id_user')
         response.json(persons)
    };

    async updatePerson(request: Request, response: Response) {
        const { id, name, cpf, phone, fkFilial, fkIdUser, fkAddress }: IPerson = <IPerson>request.body.person
        const person: Person = new Person(id, name, cpf, phone, fkFilial, fkIdUser, fkAddress)
        const { id: idAddress, name: publicPlace, bairro, fkCep }: IAddress = <IAddress>request.body.address
        const address: Address = new Address(idAddress, publicPlace, bairro, fkCep)
        const personDTOUpdate = await new PersonsDTO().handleUpdatePerson(person, address)
        response.json([personDTOUpdate, msg, person, address])
    };

    async deletePerson(request: Request, response: Response) {
        const { id }: IPerson = <IPerson>request.body.person
        const deletePerson = await new PersonDAO().delete(id, table, 'id_person')
        response.json(deletePerson)
    };
}

export { PersonsControlles }