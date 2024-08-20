import { DAO } from "../DAO/DAO";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { IPerson, IAddress } from "../../Interfaces/Person/Person";

class PersonDAO extends DAO {
    public static table = "persons"
    async insert(Person: IPerson, Address: IAddress) {
        try {
            await postgreSQL.query('INSERT INTO ' + PersonDAO.table + '(name_pers, cpf_pers, phone_pers, address_pers, num_address, fk_name_filial, fk_id_user, bairro_pers, fk_cep) VALUES (' + "'" + Person.name + "', '" + Person.cpf + "', '" + Person.phone + "', '" + Address.name + "', '" + Address.number + "', '" + Person.fkFilial + "', '" + Person.fkIdUser + "', '" + Address.bairro + "', '" + Address.fkCep + "')")
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };
    async update(Person: IPerson, Address: IAddress) {
        try {
            await postgreSQL.query("UPDATE " + PersonDAO.table + " SET updated_at =  now(), name_pers = '" + Person.name + "', cpf_pers = '" + Person.cpf + "', phone_pers ='" + Person.phone + "', address_pers ='" + Address.name + "', num_address = '" + Address.number + "', bairro_pers = '" + Address.bairro + "', fk_cep = '" + Address.fkCep + "', fk_name_filial = '" + Person.fkFilial + "' WHERE id_person = '" + Person.id + "'")
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };
}
export { PersonDAO }