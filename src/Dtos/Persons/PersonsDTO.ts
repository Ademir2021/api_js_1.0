import { IPerson, IAddress } from "../../Interfaces/Person/Person"
import { PersonDAO } from "../../Entities/Person/PersonDAO"

const table = "persons"
const msgAlreadyExists = 'Está pessoa já existe'
const msgRecordSucess = 'Cliente Gravado com sucesso'
const msgPersonNotFound = 'Cliente não localizada'
const msgPersonUpdatedSuccessfully = 'Cliente Atualizado com sucesso'

class PersonsDTO {

    private async findPerson(Person: IPerson) {
        const person = await new PersonDAO().selectOne(Person.id, table, 'id_person')
        return person
    };

    private async findPersonName(Person: IPerson, Address: IAddress) {
        const person = await new PersonDAO().selectOnePerson(Person)
        return person
    };

    private async savePerson(Person: IPerson, Address: IAddress) {
        const person = await new PersonDAO().insert(Person, Address)
        return person
    };

    private async updatePerson(Person: IPerson, Address: IAddress) {
        const personUpdate = await new PersonDAO().update(Person, Address)
        return personUpdate
    };

    async handleSavePerson(Person: IPerson, Address: IAddress) {
        const person: any = await this.findPersonName(Person, Address)
        if (person[0]) {
            return (msgAlreadyExists)
        } else {
            const res = await this.savePerson(Person, Address)
            return (msgRecordSucess)

        }
    };

    public async handleUpdatePerson(Person: IPerson, Address: IAddress) {
        const person: any = await this.findPerson(Person)
        if (person[0].id_person === Person.id) {
            const res = await this.updatePerson(Person, Address)
            return (msgPersonUpdatedSuccessfully)
        } else {
            return (msgPersonNotFound)
        }
    };
}

export { PersonsDTO }