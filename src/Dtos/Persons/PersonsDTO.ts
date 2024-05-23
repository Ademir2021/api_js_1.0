import { IPerson, IAddress } from "../../Interfaces/Person/Person"
import { PersonDAO } from "../../Entities/Person/PersonDAO"

const table = "persons"
const msgPhoneAlreadyExists = 'Este número de telefone já existe'
const msgCPFAlreadyExists = 'Este CPF pertence a outro Cliente'
const msgRecordSucess = 'Cliente gravado com sucesso'
const msgPersonNotFound = 'Cliente não localizada'
const msgPersonUpdatedSuccessfully = 'Cliente atualizado com sucesso'

class PersonsDTO {

    private async findPerson(Person: IPerson) {
        const person = await new PersonDAO().selectHandle(table, 'id_person', Person.id)
        return person
    };

    private async findPersonPhone(Person: IPerson, Address: IAddress) {
        const person = await new PersonDAO().selectHandle(table,'phone_pers', Person.phone)
        return person
    };

    private async findPersonCPF(Person: IPerson, Address: IAddress) {
        const person = await new PersonDAO().selectHandle(table,'cpf_pers', Person.cpf)
        return person
    };

    async savePerson(Person: IPerson, Address: IAddress) {
        const personCPF = await this.findPersonCPF(Person, Address)
        if (!personCPF[0]) {
            const personPhone = await this.findPersonPhone(Person, Address)
            if (personPhone[0]) {
                return (msgPhoneAlreadyExists)
            } else {
                const person = await new PersonDAO().insert(Person, Address)
                return (msgRecordSucess)
            }
        } else {
            return (msgCPFAlreadyExists)
        }
    };

    async updatePerson(Person: IPerson, Address: IAddress) {
        const person: any = await this.findPerson(Person)
        if (person[0].id_person === Person.id) {
            const res = await new PersonDAO().update(Person, Address)
            return (msgPersonUpdatedSuccessfully)
        } else {
            return (msgPersonNotFound)
        }
    };

    async listPersonsByLoggedInUser(id: number, privilege: number) {
        if (privilege == 2) {
            const persons = await new PersonDAO().select(table, 'id_person')
            return persons
        } else {
            const persons = await new PersonDAO().selectOne(id, table, 'fk_id_user')
            return persons
        }
    };
}

export { PersonsDTO }