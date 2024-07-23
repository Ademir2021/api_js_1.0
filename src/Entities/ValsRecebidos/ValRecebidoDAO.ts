import { DAO } from "../DAO/DAO";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { IValsRecebidos } from "../../Interfaces/ValsRecebidos/ValsRecebidos";

class ValRecebidoDAO extends DAO {

    static table = 'vals_recebidos'

    //insert

}

export { ValRecebidoDAO }