import { DAO } from "../DAO/DAO";
import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber"
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";

class ContaReceberDAO extends DAO {

    static table = 'contas_receber'

    async update(ContaRec: IContaAreceber) {
        try {
            await postgreSQL.query("UPDATE " + ContaReceberDAO.table
                + " SET juros = '" + ContaRec.juros
                + "', multa = '" + ContaRec.multa
                + "', desconto ='" + ContaRec.desconto
                + "', saldo ='" + ContaRec.saldo
                + "', pagamento = '" + ContaRec.pagamento
                + "', recebimento = '" + ContaRec.recebimento
                + "' WHERE id_conta = '" + ContaRec.id
                + "'")
        } catch (err) {
            return (new ContaReceberDAO().errors(err))
        }
    };
}

export { ContaReceberDAO }