import { DAO } from "../DAO/DAO";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { IPerson, IAddress } from "../../Interfaces/Person/Person";

export class PersonDAO extends DAO {

    async insert(person: any) {
        try {

            await postgreSQL.query('INSERT INTO persons(name_pers, cpf_pers, phone_pers, address_pers, fk_name_filial, fk_id_user, bairro_pers, fk_cep) VALUES (' + "'" + person.name_pers + "', '" + person.cpf_pers + "', '" + person.phone_pers + "', '" + person.address_pers + "', '" + person.fk_name_filial + "', '" + person.fk_id_user + "', '" + person.bairro_pers + "', '" + person.fk_cep + "');")
            return ("Registrado com sucesso: ")
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };
    async update(person: IPerson | any, id: number) { //temp
        try {
            await postgreSQL.query("UPDATE persons SET updated_at =  now(), name_pers = '" + person.name_pers + "', cpf_pers = '" + person.cpf_pers + "', phone_pers ='" + person.phone_pers + "', address_pers ='" + person.address_pers + "', bairro_pers = '" + person.bairro_pers + "', fk_cep = '" + person.fk_cep + "', fk_name_filial = '" + person.fk_name_filial + "' WHERE id_person = '" + id + "'")
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };

    async selectOneUser(user_id: number) {
        try {
            const res = await postgreSQL.query("SELECT * FROM persons WHERE fk_id_user = '" + user_id + "'")
            return (res.rows);
        } catch (err) {
            return (new PersonDAO().errors(err))
        }
    };
}