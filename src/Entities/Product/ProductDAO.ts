import { IProduct } from "../../Interfaces/Product/Product";
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";
import { DAO } from "../DAO/DAO";


class ProductDAO extends DAO {

    public static table = "products"

    async insert(Product: IProduct) {
        try {
            await postgreSQL.query('INSERT INTO ' + ProductDAO.table + '("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector", "bar_code", "image") VALUES ('
                + "'" + Product.name + "', '" + Product.valMax + "', '" + Product.valMin + "', '" + Product.fkBrand + "', '" + Product.fkSector + "', '" + Product.barCode + "', '" + Product.image + "')")
        } catch (err) {
            return (new ProductDAO().errors(err))
        }
    };

    async update(Product: IProduct) {
        try {
            await postgreSQL.query("UPDATE " + ProductDAO.table + " SET updated_at = now(), descric_product = '" + Product.name + "', val_max_product = '"
                + Product.valMax + "', val_min_product ='" + Product.valMin + "', fk_brand = '" + Product.fkBrand + "', fk_sector = '" + Product.fkSector + "', bar_code = '" + Product.barCode + "', image = '" + Product.image + "' WHERE id_product = '" + Product.id + "'")
        } catch (err) {
            return (new ProductDAO().errors(err))
        }
    };

    async selectOneproduct(Product: IProduct) {
        try {
            const res = await postgreSQL.query("SELECT * FROM " + ProductDAO.table + " WHERE descric_product = '" + Product.name + "'")
            return (res.rows);
        } catch (err) {
            return (new ProductDAO().errors(err))
        }
    }
}

export { ProductDAO }