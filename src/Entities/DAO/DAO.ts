import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL"

abstract class DAO {

    public id: number = 0
    public name:string = ''

    protected errors(err: unknown) {
        return "Error occurred ! " + err
    }

    public async select(table: string, param: string) {
        try {
            const res = await postgreSQL.query("SELECT * FROM " + table + " order by " + param + " ")
            return res.rows
        } catch (err) {
            return (this.errors(err))
        }
    };

    public async selectOne(id: number, table: string, param: string) {
        try {
            const res = await postgreSQL.query("SELECT * FROM " + table + " WHERE " + param + " = " + id + " ")
            if (res.rowCount !== 0) {
                return res.rows
            } else {
                return "ID:" + id + ", não localizado"
            }
        } catch (err) {
            return (this.errors(err))
        }
    };

    public async delete(id: number, table: string, param: string) {
        try {
            const res = await postgreSQL.query("DELETE FROM " + table + " WHERE " + param + " = " + id + "")
            if (res.rowCount !== 0) {
                return "ID:" + res.rowCount + ", deletado com sucesso"
            } else {
                return "ID:" + id + ", não localizado"
            }
        } catch (err) {
            return (this.errors(err))
        }
    };
}

export { DAO }