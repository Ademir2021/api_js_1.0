import { Router } from "express"
import { ContactsConttrollers } from "../Controllers/Contacts/ContactsControllers";

const routeContacts = Router();
const contactsConttrollers = new ContactsConttrollers()

routeContacts.get('/contacts/:user_id', contactsConttrollers.select)
routeContacts.post('/contact', contactsConttrollers.insert)

export { routeContacts }