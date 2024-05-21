import { Request, Response } from "express"
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";

export class ConttrollerSectors {
    async select(request: Request, response: Response) {
        try {
            const res = await postgreSQL.query("SELECT * FROM sectors ORDER BY id_sector");
            response.json(res.rows);
        } catch (err) {
            console.log("Error Ocurred ! " + err)
        }
    };
}