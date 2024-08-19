import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { DAO } from "../DAO/DAO";
import { INotaRecebida } from "../../Interfaces/NotaRecebida/NotaRecebida";

class NotaRecebidaDAO extends DAO {

    insert(NotaRecebidas: INotaRecebida){
        //
    }
}

export { NotaRecebidaDAO }