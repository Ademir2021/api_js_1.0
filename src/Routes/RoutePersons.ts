import { Router } from "express"
import { PersonsControlles } from "../Controllers/Persons/PersonsControllers"

const routerPersons = Router()
const personsControlles = new PersonsControlles()

routerPersons.post('/persons_list', personsControlles.listPersons)
routerPersons.post('/persons_user', personsControlles.listUserPersons)
routerPersons.post('/person_list', personsControlles.listPerson)
routerPersons.post('/person', personsControlles.savePerson)
routerPersons.put('/person_update', personsControlles.updatePerson)
routerPersons.delete('/person_delete', personsControlles.deletePerson)

export { routerPersons }