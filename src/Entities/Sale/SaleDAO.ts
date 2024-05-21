import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { ISale } from "../../Interfaces/Sale/Sale";
import { DAO } from "../DAO/DAO";

class SaleDAO extends DAO {

     static table = "sales"
     static tableItens = "itens_sale"

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
                for (let i = 0; Sales.itens.length > i; i++) {
                    const sum_total_item: number = 0;
                    await postgreSQL.query('INSERT INTO ' + SaleDAO.tableItens + '(fk_sale, fk_product, amount_product, val_product, total_product) VALUES ('
                        + "'"
                        + num_sale
                        + "','"
                        + Sales.itens[i].item
                        + "','"
                        + Sales.itens[i].amount
                        + "','"
                        + Sales.itens[i].valor
                        + "','"
                        + sum_total_item
                        + "')")
                }
            return (num_sale)
        } catch (err) {
            return new SaleDAO().errors(err);
        }
    };
}

export { SaleDAO }