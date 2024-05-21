import { DAO } from "../DAO/DAO";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { IPerson, IAddress } from "../../Interfaces/Person/Person";

class PersonDAO extends DAO {

    public static table = "persons"

    async insert(Person: IPerson, Address: IAddress) {
        try {
            const res = await postgreSQL.query('INSERT INTO ' + PersonDAO.table + '(name_pers, cpf_pers, phone_pers, address_pers, fk_name_filial, fk_id_user, bairro_pers, fk_cep) VALUES (' + "'" + Person.name + "', '" + Person.cpf + "', '" + Person.phone + "', '" + Address.name + "', '" + Person.fkFilial + "', '" + Person.fkIdUser + "', '" + Address.bairro + "', '" + Address.fkCep + "')")
            return (["Registrado com sucesso: ", res])
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };

    async update(Person: IPerson, Address: IAddress) {
        try {
            const res = await postgreSQL.query("UPDATE " + PersonDAO.table + " SET updated_at =  now(), name_pers = '" + Person.name + "', cpf_pers = '" + Person.cpf + "', phone_pers ='" + Person.phone + "', address_pers ='" + Address.name + "', bairro_pers = '" + Address.bairro + "', fk_cep = '" + Address.fkCep + "', fk_name_filial = '" + Person.fkFilial + "' WHERE id_person = '" + Person.id + "'")
            return (["Atualizado com sucesso", res])
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };

    async selectOnePerson(name: string) {
        try {
            const res = await postgreSQL.query("SELECT * FROM " + PersonDAO.table + " WHERE name_pers = '" + name + "'")
            return (res.rows);
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };
}

export { PersonDAO }