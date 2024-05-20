import { Router } from "express"
import { PersonsControlles } from "../Controllers/Persons/PersonsControllers"

const routerPersons = Router()
const personsControlles = new PersonsControlles()

routerPersons.post('/person', personsControlles.savePerson)
routerPersons.put('/person_update', personsControlles.updatePerson)

export { routerPersons }