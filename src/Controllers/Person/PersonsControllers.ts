import { Request, Response } from "express"
import { IPerson } from "../../Interfaces/Person/Person"
import { IUser } from "../../Interfaces/User/User"
import { Person } from "../../Entities/Person/Person"
import { PersonsServices } from "../../Services/Persons/PersonsServices"

export type TPerson = {
    id_person: number
    name_pers: string
    cpf_pers: string
    phone_pers: string
    address_pers: string
    num_address: string
    bairro_pers: string
    fk_cep: number
    fk_name_filial: number
    fk_id_user: number
    rg: string
    cnpj: string
    inscricao: string
    fantasia: string
    limit_cred: number
    fk_grupo: number
}

class PersonsControllers {
    async savePerson(request: Request, response: Response) {
        const resp: TPerson = <TPerson>request.body
        const person: Person = new Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers,
            resp.address_pers, resp.num_address, resp.bairro_pers, resp.fk_cep, resp.fk_name_filial, resp.fk_id_user,
            resp.rg, resp.cnpj, resp.inscricao, resp.fantasia, resp.limit_cred, resp.fk_grupo);
        const res = await new PersonsServices().savePerson(person)
        response.json(res)
    };
    async updatePerson(request: Request, response: Response) {
        const resp: TPerson = <TPerson>request.body
        const person: Person = new Person(resp.id_person, resp.name_pers, resp.cpf_pers, resp.phone_pers,
            resp.address_pers, resp.num_address, resp.bairro_pers, resp.fk_cep, resp.fk_name_filial, resp.fk_id_user,
            resp.rg, resp.cnpj, resp.inscricao, resp.fantasia, resp.limit_cred, resp.fk_grupo)
        const res = await new PersonsServices().updatePerson(person)
        response.json(res)
    };
    async listPersons(request: Request, response: Response) {
        const resp = await new PersonsServices().listPersons()
        response.json(resp)
    };
    async listPerson(request: Request, response: Response) {
        const { id }: IPerson = <IPerson>request.body
        const resp = await new PersonsServices().listPerson(id)
        response.json(resp)
    };
    async listUserPersons(request: Request, response: Response) {
        const { id, privilege }: IUser = <IUser>request.body[0]
        const resp = await new PersonsServices().listPersonsByLoggedInUser(id, privilege)
        response.json(resp)
    };
    async deletePerson(request: Request, response: Response) {
        const { id }: IPerson = <IPerson>request.body.person
        const resp = await new PersonsServices().deletePerson(id)
        response.json(resp)
    };
};
export { PersonsControllers }