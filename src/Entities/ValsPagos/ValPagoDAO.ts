import { IValsPagos } from "../../Interfaces/ValsPagos/ValsPagos";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { DAO } from "../DAO/DAO";

class ValPagoDAO extends DAO {

    static table = 'vals_pagos'

    async insert(Vals: IValsPagos) {
        try {
            await postgreSQL.query('INSERT INTO ' + ValPagoDAO.table + '(fk_conta, fk_compra, fk_user, valor, data_recebimento, descricao, fk_person) VALUES ('
                + "'" + Vals.fk_conta
                + "','" + Vals.fk_compra
                + "', '" + Vals.fk_user
                + "', '" + Vals.valor
                + "', '" + Vals.data_recebimento
                + "', '" + Vals.descricao
                + "', '" + Vals.fk_person
                + "')")
        } catch (err) {
            return (new ValPagoDAO().errors(err))
        }
    };
}

export { ValPagoDAO }