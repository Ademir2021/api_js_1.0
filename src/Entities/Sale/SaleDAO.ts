import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { ISale } from "../../Interfaces/Sale/Sale";
import { DAO } from "../DAO/DAO";

class SaleDAO extends DAO {

    static table = "sales"
    static tableItens = "itens_sale"
    static tableContasReceber = "contas_receber"

    async insert(Sales: ISale) {
        try {
            await postgreSQL.query('INSERT INTO ' + SaleDAO.table + '(fk_name_pers, disc_sale, fk_name_filial, fk_name_user) VALUES ('
                + "'"
                + Sales.fkPerson
                + "','"
                + Sales.diskSale
                + "','"
                + Sales.fkFilial
                + "','"
                + Sales.fkUserId
                + "')")

            const num_sale_ = await postgreSQL.query("SELECT MAX(id_sale) FROM " + SaleDAO.table + "");
            const num_sale: number = num_sale_.rows[0].max;

            if (Sales.itens)
                for (let Sale of Sales.itens) {
                    const sum_total_item: number = 0;
                    await postgreSQL.query('INSERT INTO ' + SaleDAO.tableItens + '(fk_sale, fk_product, amount_product, val_product, total_product) VALUES ('
                        + "'" + num_sale + "','"
                        + Sale.item + "','"
                        + Sale.amount + "','"
                        + Sale.valor + "','"
                        + sum_total_item
                        + "')")
                };

            if (Sales.contasReceber)
                for (let Sale of Sales.contasReceber) {
                    await postgreSQL.query('INSERT INTO ' + SaleDAO.tableContasReceber + '(fk_filial, tipo, fk_venda, fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento, saldo, recebimento) VALUES ('
                        + "'"
                        + Sale.fk_filial + "','"
                        + Sale.tipo + "','"
                        + num_sale + "','"
                        + Sale.fk_user + "','"
                        + Sale.parcela + "','"
                        + Sale.valor + "','"
                        + Sale.multa + "','"
                        + Sale.juros + "','"
                        + Sale.desconto + "','"
                        + Sale.emissao + "','"
                        + Sale.vencimento + "','"
                        + Sale.saldo + "','"
                        + Sale.recebimento
                        + "')")
                };
            return (num_sale)
        } catch (err) {
            return new SaleDAO().errors(err);
        }
    };
}

export { SaleDAO }