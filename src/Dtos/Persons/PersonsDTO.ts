import { IPerson, IAddress } from "../../Interfaces/Person/Person"
import { PersonDAO } from "../../Entities/Person/PersonDAO"

const table = "persons"
const msgAlreadyExists = 'Este cliente já existe'
const msgRecordSucess = 'Cliente gravado com sucesso'
const msgPersonNotFound = 'Cliente não localizada'
const msgPersonUpdatedSuccessfully = 'Cliente atualizado com sucesso'

class PersonsDTO {

    private async findPerson(Person: IPerson) {
        const person = await new PersonDAO().selectOne(Person.id, table, 'id_person')
        return person
    };

    private async findPersonName(Person: IPerson, Address: IAddress) {
        const person = await new PersonDAO().selectOnePerson(Person)
        return person
    };

    async savePerson(Person: IPerson, Address: IAddress) {
        const person: any = await this.findPersonName(Person, Address)
        if (person[0]) {
            return (msgAlreadyExists)
        } else {
            const person = await new PersonDAO().insert(Person, Address)
            return (msgRecordSucess)

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