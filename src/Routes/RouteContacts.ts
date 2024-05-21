import { Router } from "express"
import { ConttrollersContacts } from "../Controllers/Contacts/ContactsControllers";

const routeContact = Router();
const conttrollersContacts = new ConttrollersContacts()

routeContact.get('/contacts/:user_id', conttrollersContacts.select)
routeContact.post('/contact', conttrollersContacts.insert)

export { routeContact }