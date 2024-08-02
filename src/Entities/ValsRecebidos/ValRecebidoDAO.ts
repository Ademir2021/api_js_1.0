import { DAO } from "../DAO/DAO";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";

class ValRecebidoDAO extends DAO {

    static table = 'vals_recebidos'

    async insert(Vals: IValsRecebidos) {
        try {
            await postgreSQL.query('INSERT INTO ' + ValRecebidoDAO.table + '(fk_conta, fk_venda, fk_user, valor, data_recebimento, descricao, fk_person) VALUES ('
                + "'" + Vals.fkConta
                + "','" + Vals.fkVenda
                + "', '" + Vals.fkUser
                + "', '" + Vals.valor
                + "', '" + Vals.dataRecebimento
                + "', '" + Vals.name
                + "', '" + Vals.fkPerson
                + "')")
        } catch (err) {
            return (new ValRecebidoDAO().errors(err))
        }
    };
}

export { ValRecebidoDAO }