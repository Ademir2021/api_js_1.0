import { Request, Response } from "express"
import { postgreSQL } from "../../Providers/Storages/pg/postgreSQL";

export class ConttrollerBrands {
    async select(request: Request, response: Response) {
        try{
            const res = await postgreSQL.query("SELECT * FROM brands ORDER BY id_brand");
            response.json(res.rows);
        }catch(err){
            console.log("Error Ocurred ! " + err)
        }
    }
}