import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";

  class SectorsConttrollers extends DAO {
    async findAll(request: Request, response: Response){
    const sectors = await new SectorsConttrollers().select('sectors', 'id_sector')
    response.json(sectors)
    };
 }

export {SectorsConttrollers}