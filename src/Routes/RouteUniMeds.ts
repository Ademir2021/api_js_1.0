import { Router } from "express"
import { UniMedsControllers } from "../Controllers/UniMeds/UniMedsControllers";

const routeUniMeds = Router();
const uniMedsControllers = new UniMedsControllers()

routeUniMeds.get('/un_meds', uniMedsControllers.findAll)

export { routeUniMeds }