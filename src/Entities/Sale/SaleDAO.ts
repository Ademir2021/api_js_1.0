import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { DAO } from "../DAO/DAO";

class SaleDAO extends DAO {

    async select() {
        try {
            const sales = await postgreSQL.query("SELECT * FROM sales  ORDER BY id_sale")
            return sales.rows
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    };

    async selectOneSale(Sales: any) {
        try {
            const itens = await postgreSQL.query("SELECT * FROM itens_sale WHERE fk_sale = '" + Sales.id + "'")
            for (let i = 0; itens.rows.length > i; i++) {
                return (itens.rows[i])
            }
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    };

    async insert(Sales: any) {
        try {
            await postgreSQL.query('INSERT INTO sales(fk_name_pers, disc_sale, fk_name_filial, fk_name_user) VALUES ('
                + "'"
                + Sales.person.fk_name_pers
                + "','"
                + Sales.disc_Sales
                + "','"
                + Sales.filial
                + "','"
                + Sales.user.user_id
                + "')")
            const num_sale_ = await postgreSQL.query("SELECT MAX(id_sale) FROM sales");
            const num_sale: number = num_sale_.rows[0].max;
            for (let i = 0; Sales.itens.length > i; i++) {
                const sum_total_item: number = 0;
                await postgreSQL.query('INSERT INTO itens_sale(fk_sale, fk_product, amount_product, val_product, total_product) VALUES ('
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
            return num_sale
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    };
}

export { SaleDAO }