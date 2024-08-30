import { Request, Response } from "express"
import { IPerson} from "../../Interfaces/Person/Person"
import { IUser } from "../../Interfaces/User/User"
import { Person } from "../../Entities/Person/Person"
import { PersonsDTO } from "../../Dtos/Persons/PersonsDTO"
import { PersonDAO } from "../../Entities/Person/PersonDAO"

const table = Person.table

class PersonsControllers {

    async savePerson(request: Request, response: Response) {
        const resp: IPerson = <IPerson>request.body
        const person: Person = new Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers,
            resp.address_pers,resp.num_address,resp.bairro_pers,resp.fk_cep, resp.fk_name_filial,resp.fk_id_user,
        resp.rg,resp.cnpj,resp.inscricao,resp.fantasia,resp.limit_cred,resp.fk_grupo)
        const personDTOSave = await new PersonsDTO().savePerson(person)
        response.json(personDTOSave)
    };

    async listPersons(request: Request, response: Response) {
        const person = await new PersonDAO().select(table, 'id_person')
        response.json(person)
    };

    async listPerson(request: Request, response: Response) {
        const { id_person }: IPerson = <IPerson>request.body.person
        const persons = await new PersonDAO().selectOne(table, id_person, 'id_person')
        response.json(persons)
    };

    async listUserPersons(request: Request, response: Response) {
        const { id, privilege }: IUser = <IUser>request.body[0]
      const users = await new PersonsDTO().listPersonsByLoggedInUser(id, privilege)
      response.json(users)
    };

    async updatePerson(request: Request, response: Response) {
        const resp:IPerson = <IPerson>request.body
        const person: Person = new Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers,
            resp.address_pers,resp.num_address,resp.bairro_pers,resp.fk_cep, resp.fk_name_filial,resp.fk_id_user,
        resp.rg,resp.cnpj,resp.inscricao,resp.fantasia,resp.limit_cred,resp.fk_grupo)
        const personDTOUpdate = await new PersonsDTO().updatePerson(person)
        response.json(personDTOUpdate)
    };

    async deletePerson(request: Request, response: Response) {
        const { id_person }: IPerson = <IPerson>request.body.person
        const deletePerson = await new PersonDAO().delete( table, id_person, 'id_person')
        response.json(deletePerson)
    };
}

export { PersonsControllers }